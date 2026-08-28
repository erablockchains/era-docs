# Monetary policy and tokenomics

[Back to index](../README.md)

## Current V13 monetary state

At finalized block 2,077,518 on 2026-08-28, the bounded LIVE_V13 snapshot
observed:

- total issuance: **100,000,000 ETKN**
- lifetime hard cap: **1,000,000,000 ETKN**
- remaining gross-issuance allowance: **900,000,000 ETKN**

The reviewed IssuanceCap source maintains RemainingAllowance separately from
Balances total issuance. Controlled gross issuance consumes the allowance.
Burning ETKN reduces circulating/total issuance but does not replenish consumed
allowance.

The initial reconciliation is:

~~~text
100,000,000 current issuance
+ 900,000,000 remaining gross-issuance allowance
= 1,000,000,000 lifetime hard cap
~~~

After any permitted future gross issuance G:

~~~text
remaining allowance = 900,000,000 - G
lifetime gross issuance ceiling remains 1,000,000,000
burned amount is not added back to remaining allowance
~~~

## Existing issued-supply allocation

The owner-recorded allocation of the current 100 million ETKN is distinct from
future gross issuance:

| Current issued-supply category | ETKN |
|---|---:|
| Founding vesting | 20,000,000 |
| Presale | 20,000,000 |
| Ecosystem/Foundation | 20,000,000 |
| Liquidity | 10,000,000 |
| Airdrop/Validators | 30,000,000 |
| **Total** | **100,000,000** |

The recorded internal split of Airdrop/Validators is:

| Internal policy category | ETKN |
|---|---:|
| Validator/Nominator reward allocation | 20,000,000 |
| Contributor onboarding allocation | 10,000,000 |
| **Airdrop/Validators total** | **30,000,000** |

The existing 20 million ETKN validator/nominator allocation is not the approved
funding source for V14 protocol staking issuance. For V14 accounting it remains
separate pending an OWNER_DECISION_REQUIRED reclassification/use decision. It
must not be counted both as existing issued supply and as future gross issuance.
This review did not inspect its current account balance or claim history.

## Approved V14 policy

Everything in this section is APPROVED_V14_DESIGN_NOT_LIVE.

### New ETKN issuance

For each amount G of gross new ETKN issuance:

| Destination | Share | Amount |
|---|---:|---:|
| Validators and nominators through protocol staking | 90% | 0.90 × G |
| Ecosystem/Foundation protocol treasury | 10% | 0.10 × G |
| Burn | 0% | 0 |
| **Total** | **100%** | **G** |

All of G consumes the shared RemainingAllowance. The approved annual target and
ceiling are specified below; annual-boundary, rounding, and cap-aware minting
implementation are not yet established by completed V14 evidence.

### Normal transaction fees excluding tips

For each collected normal-fee amount F:

| Destination | Share | Amount |
|---|---:|---:|
| Staking reward pot | 90% | 0.90 × F |
| Ecosystem/Foundation protocol treasury | 10% | 0.10 × F |
| Burn | 0% | 0 |
| **Total** | **100%** | **F** |

F is existing ETKN redistributed by a transaction. It is not new issuance and
does not consume or restore RemainingAllowance.

### Tips

For each collected tip amount T when the block author can receive it:

| Destination | Share | Amount |
|---|---:|---:|
| Block author | 90% | 0.90 × T |
| Ecosystem/Foundation protocol treasury | 10% | 0.10 × T |
| Burn | 0% | 0 |
| **Total** | **100%** | **T** |

T is also existing ETKN redistribution, not issuance.

If the block author is missing or cannot receive T, the approved fallback is:

| Destination | Share | Amount |
|---|---:|---:|
| Staking reward pot | 50% | 0.50 × T |
| Ecosystem/Foundation protocol treasury | 50% | 0.50 × T |
| Burn | 0% | 0 |
| **Total** | **100%** | **T** |

The fallback redistributes the complete existing tip; it does not mint ETKN.

### Target APR and gross annual ceiling

Let S be eligible bonded stake and A be RemainingAllowance at the annual
calculation boundary. The approved unconstrained protocol-staking issuance
target is 10% of S before validator commission, performance adjustment, and
additive normal-fee income:

~~~text
staking_issuance_target = 0.10 × S
gross_issuance_target = min(staking_issuance_target / 0.90,
                            6,000,000 ETKN,
                            A)
staking_issuance_share = 0.90 × gross_issuance_target
treasury_issuance_share = 0.10 × gross_issuance_target
~~~

The **6,000,000 ETKN** value is a gross annual new-issuance ceiling, including
both the 90% staking share and 10% treasury share. If that ceiling or Remaining
Allowance binds, the resulting protocol-staking issuance rate is below the 10%
target. Validator performance, eligibility, commission, exposure, rounding,
and fee income can make an individual participant's result differ. The 10%
value is a target input, not guaranteed yield.

Normal-fee staking income is additive to the new-issuance target and remains
existing-ETKN redistribution.

### Commission and treasury

Approved validator commission is bounded from 0% through a maximum of 20%.
Commission is deducted from a validator's gross reward before the remaining
eligible exposure receives its pro-rata shares.

The approved V14 treasury account is **ERA_TREA**. It is keyless and
accumulation-only: the spending origin is EnsureNever and V14 has no treasury
withdrawal dispatchable. This design prevents V14 treasury outflow; a later
governance-enabled spending mechanism requires a separately reviewed upgrade.

## V13 source policy versus V14 design

PRIVATE_REVIEW_SOURCE contains older activation-gated routing constants:

| Flow | Reviewed V13 source configuration | Approved V14 design |
|---|---|---|
| Normal fees excluding tips | 70% reward reserve / 30% treasury / 0% burn | 90% staking reward pot / 10% treasury / 0% burn |
| Receivable tips | 100% block author / 0% treasury / 0% burn | 90% block author / 10% treasury / 0% burn |
| Missing/unreceivable author | no R2 fallback in reviewed V13 source | 50% staking reward pot / 50% treasury / 0% burn |

The snapshot observed the separate reward-system and fee-routing activation
flags as true. It did not inspect balances, claim history, or payout
availability. Staking.ErasValidatorReward remained zero at the checked
completed era. The approved V14 percentages must therefore be implemented and
proven as a migration/change; they must not be described as current V13 routing.

## Required V14 evidence and decisions

OWNER_DECISION_REQUIRED or PLANNED_FUTURE items include:

- implementation of the approved target formula, annual boundary/rounding,
  cap-aware atomicity, and exhausted-allowance behavior;
- reconciliation of the existing 20 million ETKN allocation;
- replacement/migration of the older V13 fee and tip routing;
- later governance replacement for the V14 accumulation-only treasury;
- migration ordering, rollback assumptions, invariants, tests, and testnet proof;
- public reporting that distinguishes gross issuance from fee redistribution.

No percentage, allocation, or roadmap statement is a promise of return or
future delivery.
