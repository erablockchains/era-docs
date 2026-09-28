# Staking, validators, and V14 rewards

> **Historical V13 baseline (28 August 2026):** Retained for audit context. Current ERA V14 status and canonical repository identities are in [the repository index](../README.md) and documents 11–13. Historical repository links and LIVE_V13 labels below do not describe the current production chain.


[Back to index](../README.md)

## Live V13 behavior

Staking is LIVE_V13. The reviewed runtime and wallet source expose bonding,
bond-extra, validator declaration, nomination, unbonding, withdrawal of
unbonded funds, validator elections, era/session progression, exposure, and era
reward points.

At the 2026-08-28 finalized anchor:

| Observation | Value |
|---|---:|
| Finalized block | 2,077,518 |
| Session index | 20,777 |
| Current era | 2,620 |
| Active era | 2,619 |
| Completed era checked for reward | 2,618 |
| Active/selected validators | 4 |
| MinValidatorBond | 0 ETKN |
| Staking.ErasValidatorReward for completed era | 0 ETKN |

The runtime's Staking EraPayout implementation is unit, and the completed-era
storage value checked was zero. Bonding or nominating therefore must not be
presented as producing a current staking return.

## Points, exposure, commission, and nominations

Authorship reports block authors into Staking reward-point accounting. Staking
exposure records validator self-stake and eligible nominator backing. Election
logic selects the active validator set; being bonded or declaring as a
validator does not guarantee selection.

The pallet contains standard commission and slashing-related interfaces. The
active source configures the Slash imbalance handler as unit, so this review
does not name a treasury or reward destination for slashed value. It also did
not inspect offence history or assert a particular live penalty outcome.
Reviewers should assess those runtime paths at the exact deployed identity
before publishing operational guidance.

## Separate V13 reward-reserve component

PRIVATE_REVIEW_SOURCE also contains RewardReserve, which is separate from
Staking.ErasValidatorReward. It has activation flags and transfer-based
per-era budgeting/claim logic based on reward points, exposure, and commission.
The live anchor observed RewardSystemActive and FeeRoutingActive as true.

That observation does not establish an available balance, a claim amount, a
recipient, or a current return. The bounded review did not read reserve
balances, budgets, or claim history. Its source-configured 70%/30% normal-fee
routing and 100%/0% tip routing differ from the approved V14 policy. Replacing
or reconciling this behavior is OWNER_DECISION_REQUIRED.

## Approved V14 fairness direction

This entire section is APPROVED_V14_DESIGN_NOT_LIVE.

Let S be eligible bonded stake and A be RemainingAllowance at the annual
calculation boundary. APPROVED_V14_DESIGN_NOT_LIVE sets:

~~~text
staking_issuance_target = 0.10 × S
gross_issuance_target = min(staking_issuance_target / 0.90,
                            6,000,000 ETKN,
                            A)
issuance_staking_pool = 0.90 × gross_issuance_target
fee_staking_pool = 0.90 × normal fees excluding tips
fallback_tip_staking_pool = 0.50 × tips whose author is missing/unreceivable
R = issuance_staking_pool + fee_staking_pool + fallback_tip_staking_pool
gross(v) = R × p(v) / sum(points of eligible validators)
commission(v) = gross(v) × configured commission rate(v)
shared(v) = gross(v) - commission(v)
participant_share(i,v) = shared(v) × eligible_exposure(i,v)
                         / total_eligible_exposure(v)
~~~

The direction has these policy effects:

- the 10% staking APR is a target before commission, performance, and additive
  normal-fee income; the gross annual new-issuance ceiling is 6,000,000 ETKN;
- validator gross reward follows valid era reward points/performance rather
  than total backing alone;
- commission is bounded from 0% through a 20% maximum and is applied
  transparently before the shared portion;
- eligible self-stake and nominator exposure share the remainder pro rata;
- small and large nominators backing the same validator receive the same
  percentage treatment;
- a less-backed validator can produce a higher return per ETKN than a more
  heavily backed validator with comparable points and commission, encouraging
  stake distribution;
- offline or ineligible participants receive no unearned reward.

The target is not guaranteed yield. A binding annual ceiling or Remaining
Allowance, validator performance, eligibility, commission, exposure, and
rounding can reduce an individual result. The formula is approved policy, not
completed implementation evidence. Annual-boundary mechanics, rounding,
minimum payout, exposure paging, eligibility, funding order, and exhausted
allowance still require exact V14 implementation and tests.

## Planned validator policy

- PLANNED_FUTURE minimum validator self-bond: **10,000 ETKN**.
- LIVE_V13 observed minimum validator bond: **0 ETKN**.
- PLANNED_FUTURE active-set direction: **4→7 bootstrap, followed by qualified
  validators added one at a time with no permanent policy cap and a finite
  benchmark-proven runtime safety bound**.
- A later reviewed and benchmarked upgrade may raise the finite technical bound.
- One active validator per independent operator is the bootstrap rule.
  Operator independence remains an evidence/reporting control rather than an
  unsupported on-chain identity claim. Expansion also depends on network
  health and finality.

Eligibility at a planned threshold would not guarantee an active seat.
Validator selection remains an election/set-management outcome.

## V14 funding and routing

APPROVED_V14_DESIGN_NOT_LIVE specifies:

- gross new issuance: 90% protocol staking for validators/nominators and 10%
  ecosystem/foundation protocol treasury;
- normal transaction fees excluding tips: 90% staking reward pot and 10%
  treasury;
- tips: 90% block author and 10% treasury;
- if the block author is missing or cannot receive a tip: 50% staking reward
  pot and 50% treasury;
- burn: 0%.

Gross issuance consumes the lifetime RemainingAllowance. Fees and tips
redistribute existing ETKN. The separate existing 20 million ETKN
validator/nominator allocation is not the V14 issuance source and must not be
double-counted. ERA_TREA is approved as a keyless accumulation-only treasury
with EnsureNever spending origin and no V14 withdrawal dispatchable.
