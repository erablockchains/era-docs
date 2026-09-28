# V13 status, V14 roadmap, and known gaps

> **Historical V13 baseline (28 August 2026):** Retained for audit context. Current ERA V14 status and canonical repository identities are in [the repository index](../README.md) and documents 11–13. Historical repository links and LIVE_V13 labels below do not describe the current production chain.


[Back to index](../README.md)

## Version boundary

| Version | Status | Meaning |
|---|---|---|
| V13 | LIVE_V13 | Current ERA-MAINNET runtime at the Gate B3 anchor |
| V14 | APPROVED_V14_DESIGN_NOT_LIVE | Active design/development scope; not deployed |
| V15 | PLANNED_FUTURE | Later direction only; no delivery commitment |

Version labels describe evidence state, not schedules.

## V13 baseline

LIVE_V13:

- ERA-MAINNET at the recorded genesis, spec 13, transaction version 1;
- 100 million ETKN total issuance, one billion lifetime cap, 900 million
  remaining gross-issuance allowance;
- four selected/active validators at the point-in-time snapshot;
- active staking mechanics and era/session progression;
- zero Staking.ErasValidatorReward for the completed era checked;
- MinValidatorBond of zero ETKN at the snapshot.

PRIVATE_REVIEW_SOURCE:

- BABE/GRANDPA, Session/Historical, Authorship/Staking, Balances, Timestamp,
  TransactionPayment, Vesting, Sudo, IssuanceCap, RewardReserve,
  AiPredictions, EraWorlds, and generic Multisig/Proxy/Assets/NFTs;
- a separate activated reward-reserve/fee-routing surface whose balances and
  claims were not reviewed in the bounded live check;
- wallet source with V13 identity/metadata guards and six platform targets.

## V14 approved scope

APPROVED_V14_DESIGN_NOT_LIVE:

- new gross issuance: 90% validators/nominators through protocol staking and
  10% ecosystem/foundation protocol treasury;
- normal fees excluding tips: 90% staking reward pot and 10% treasury;
- tips: 90% block author and 10% treasury;
- missing or unreceivable block author: 50% staking reward pot and 50%
  treasury for the complete tip;
- burn share: 0%;
- 10% target staking APR before commission, validator performance, and
  additive normal-fee staking income;
- 6,000,000 ETKN gross annual new-issuance ceiling;
- validator commission bounded from 0% through a 20% maximum;
- keyless ERA_TREA treasury, accumulation-only, EnsureNever spending origin,
  and no V14 withdrawal dispatchable;
- performance/points-based validator gross share, commission first, then
  eligible exposure pro rata;
- equal percentage treatment for small and large nominators backing the same
  validator;
- no unearned reward for offline/ineligible participants.

PLANNED_FUTURE:

- 10,000 ETKN validator self-bond minimum;
- a 4→7 validator bootstrap followed by qualified validators added one at a
  time with no permanent policy cap;
- a finite benchmark-proven runtime technical safety bound, raised only through
  later reviewed runtime upgrades;
- one active validator per independent operator as a bootstrap rule, with
  independence retained as an evidence/reporting control;
- foundation/governance handover;
- signed wallet distribution and a public-source transition when their gates
  are met.

## Known gaps and acceptance evidence

| Gap | Status | Evidence required to close |
|---|---|---|
| Staking-era payout is zero | LIVE_V13 | V14 runtime implementation, upgrade proof, post-upgrade anchored storage/events |
| V14 10% target / 6M ceiling | APPROVED_V14_DESIGN_NOT_LIVE | exact annual-boundary, rounding, cap/exhaustion implementation and deterministic tests |
| V14 90/10 issuance routing | APPROVED_V14_DESIGN_NOT_LIVE | exact runtime code, migrations, event/accounting tests |
| V14 90/10 normal-fee routing | APPROVED_V14_DESIGN_NOT_LIVE | replacement of V13 70/30 configuration and fee-imbalance tests |
| V14 90/10 tip routing | APPROVED_V14_DESIGN_NOT_LIVE | replacement of V13 100/0 configuration and author/fallback tests |
| Missing/unreceivable-author tip fallback | APPROVED_V14_DESIGN_NOT_LIVE | exact 50/50 fallback routing and unreceivable-author tests |
| Existing 20M allocation | OWNER_DECISION_REQUIRED | separately approved reclassification/use and balance/accounting disclosure |
| RewardReserve live-state disclosure | OWNER_DECISION_REQUIRED | bounded review of budgets, claims, reserve balance, and policy relationship |
| Commission and rounding | APPROVED_V14_DESIGN_NOT_LIVE | enforce 0–20% commission bounds; specify rounding and edge-case tests |
| 10,000 ETKN minimum | PLANNED_FUTURE | runtime enforcement, migration, eligibility tests, live verification |
| Validator expansion | PLANNED_FUTURE | 4→7 bootstrap, one-at-a-time qualification, operator-independence evidence, telemetry/finality criteria |
| Runtime validator bound | PLANNED_FUTURE | finite benchmark-proven limit in every runtime and separately reviewed increases |
| V14 treasury | APPROVED_V14_DESIGN_NOT_LIVE | deploy keyless ERA_TREA accumulation-only control with EnsureNever and no withdrawal dispatchable |
| Later treasury governance | PLANNED_FUTURE | separately reviewed spending authorization, reporting, recovery, and upgrade |
| Sudo/governance handover | PLANNED_FUTURE | approved process, on-chain proof, rollback/recovery plan |
| Multisig/Proxy custody | OWNER_DECISION_REQUIRED | approved public accounts/configuration and operating evidence |
| Project licence | OWNER_DECISION_REQUIRED | reconcile blockchain declarations and select first-party wallet/docs terms |
| Independent security work | PLANNED_FUTURE | defined scope, report handling, remediation evidence |
| Signed wallet releases | PLANNED_FUTURE | signing custody, reproducible provenance, device/platform acceptance, release checksums |
| Public-source transition | PLANNED_FUTURE | licence, secret/history review, public security/reporting and release decisions |
| ERA World Engine integration | PLANNED_FUTURE | separate-company agreement, runtime/application evidence, public architecture |
| V15 | PLANNED_FUTURE | separately approved scope and evidence; no implied schedule |

## Promotion rule

A claim moves to LIVE_V13 or a future live-version label only after exact source,
migration/build evidence, and an anchored public-network check agree. A design
document, configured generic pallet, private artifact, or owner intention is
not enough by itself.
