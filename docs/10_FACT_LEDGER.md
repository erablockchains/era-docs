# Fact ledger

> **Historical V13 baseline (28 August 2026):** Retained for audit context. Current ERA V14 status and canonical repository identities are in [the repository index](../README.md) and documents 11–13. Historical repository links and LIVE_V13 labels below do not describe the current production chain.


[Back to index](../README.md)

## Evidence keys

- **B** — erablockchains/era-blockchain at
  8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9.
- **W** — erablockchains/era-wallet at
  76cc7b126233845e02a9dc69355baec7f4aa52a0.
- **L** — one read-only public WSS snapshot on 2026-08-28, anchored at finalized
  block 2,077,518 /
  0xa6e6f6460493523a2cb132879613ec5fb5719fbec430fd74f902d7509f703b1c.
- **P** — owner-approved Gate B3 policy supplied for this documentation review;
  it is authorization/policy evidence, not source implementation evidence.

Repository paths below are relative and contain no internal evidence location.

## Claim-to-evidence ledger

| ID | Status | Claim | Exact evidence | Live confirmation and public qualification |
|---|---|---|---|---|
| F01 | PRIVATE_REVIEW_SOURCE | Blockchain GitHub publication identity is 8d4a0e… with tree b8ba68… | B Git commit/tree; B:docs/review/SOURCE_PROVENANCE.md | Repository identity/visibility checked privately; do not describe as public |
| F02 | PRIVATE_REVIEW_SOURCE | Deployed-source identity is commit 77eb28… and tree 1b0d6a… | B:docs/review/SOURCE_PROVENANCE.md | Distinct from publication commit |
| F03 | PRIVATE_REVIEW_SOURCE | Deployed Wasm is 997,122 bytes, SHA-256 ecca5b… | B:docs/review/SOURCE_PROVENANCE.md; W:lib/era_v13_compatibility.dart | L confirmed spec identity, not Wasm bytes |
| F04 | LIVE_V13 | Network is ERA-MAINNET at genesis ba96ed… | L system_chain and block hash 0; W:lib/era_v13_compatibility.dart | Point-in-time identity matched exactly |
| F05 | LIVE_V13 | Runtime is era 13, transaction version 1 | L state_getRuntimeVersion; B:runtime/src/lib.rs | Matched exactly |
| F06 | LIVE_V13 | Token is ETKN, display/project name ERA, 18 decimals, SS58 42 | L system_properties; W:lib/era_v13_compatibility.dart | Use live ETKN symbol; do not substitute source chain-spec display |
| F07 | PRIVATE_REVIEW_SOURCE | Target block time is approximately six seconds | B:runtime/src/lib.rs | Configuration target, not a throughput guarantee |
| F08 | LIVE_V13 | Total issuance is 100,000,000 ETKN | L Balances.TotalIssuance at anchor | Exact decoded 18-decimal value |
| F09 | LIVE_V13 | Lifetime hard cap is 1,000,000,000 ETKN | B:runtime/src/upgrade13_policy.rs; B:runtime/src/issuance_cap.rs | L confirmed 900M allowance plus observed 100M issuance |
| F10 | LIVE_V13 | Remaining gross-issuance allowance is 900,000,000 ETKN | L IssuanceCap.RemainingAllowance | Exact decoded value at anchor |
| F11 | PRIVATE_REVIEW_SOURCE | Burns do not restore consumed allowance | B:runtime/src/issuance_cap.rs | Stable source invariant; distinguish allowance from current issuance |
| F12 | PRIVATE_REVIEW_SOURCE | Existing issued allocation is 20M founding, 20M presale, 20M ecosystem, 10M liquidity, 30M airdrop/validators | P; B:runtime/src/upgrade13_policy.rs | Totals 100M; allocation policy is not an account-balance audit |
| F13 | OWNER_DECISION_REQUIRED | Existing 20M validator/nominator allocation remains separate from V14 gross issuance | P | Do not double-count; balance/claim history not checked by L |
| F14 | LIVE_V13 | Four validators were selected/active | L Staking.ValidatorCount and Session.Validators | Point-in-time count does not prove independent operators |
| F15 | LIVE_V13 | Staking mechanics and era/session progression are active | L session 20,777/current era 2,620/active era 2,619; B:runtime/src/lib.rs; W compatibility calls/storage | Avoid any current-return implication |
| F16 | LIVE_V13 | MinValidatorBond was 0 ETKN | L Staking.MinValidatorBond | Point-in-time storage value |
| F17 | LIVE_V13 | Completed-era Staking.ErasValidatorReward was zero | L era 2,618 storage; B:runtime/src/lib.rs EraPayout=() | Exact staking-era payout wording; separate from RewardReserve |
| F18 | PRIVATE_REVIEW_SOURCE | Authorship forwards author events to Staking reward points | B:runtime/src/lib.rs | Source data flow, not nonzero payout |
| F19 | PRIVATE_REVIEW_SOURCE | RewardReserve is a separate transfer-based point/exposure/commission component | B:pallets/reward-reserve/src/lib.rs; B:runtime/src/lib.rs | L observed activation flags true but did not inspect balances/budgets/claims |
| F20 | OWNER_DECISION_REQUIRED | V13 source fee policy is 70% reserve/30% treasury/0% burn; tips 100% author/0% treasury | B:runtime/src/lib.rs; L FeeRoutingActive=true | Must be reconciled/migrated; not the approved V14 split |
| F21 | APPROVED_V14_DESIGN_NOT_LIVE | Gross new issuance is 90% validator/nominator protocol staking and 10% ecosystem/foundation protocol treasury | P | No completed live/source implementation evidence |
| F22 | APPROVED_V14_DESIGN_NOT_LIVE | Normal fees excluding tips are 90% staking reward pot and 10% ecosystem/foundation protocol treasury | P | Existing-ETKN redistribution; no issuance |
| F23 | APPROVED_V14_DESIGN_NOT_LIVE | Receivable tips are 90% block author and 10% ecosystem/foundation protocol treasury | P | Existing-ETKN redistribution; no issuance |
| F23A | APPROVED_V14_DESIGN_NOT_LIVE | When the author is missing or cannot receive the tip, the complete tip is 50% staking reward pot and 50% treasury | P | Existing-ETKN redistribution; exact fallback is not V13 behavior |
| F24 | APPROVED_V14_DESIGN_NOT_LIVE | Burn share is 0% for issuance, normal fees, receivable tips, and fallback tips | P | Every routing table reconciles to 100% |
| F24A | APPROVED_V14_DESIGN_NOT_LIVE | Target staking APR is 10% before commission, performance, and additive normal-fee income; gross annual issuance ceiling is 6M ETKN | P | Target is not guaranteed yield; implementation/rounding evidence remains |
| F24B | APPROVED_V14_DESIGN_NOT_LIVE | Validator commission is allowed from 0% through a 20% maximum | P | Runtime enforcement and edge-case tests remain |
| F24C | APPROVED_V14_DESIGN_NOT_LIVE | ERA_TREA is keyless, accumulation-only, EnsureNever spending, with no V14 withdrawal dispatchable | P | No live treasury flow; later governance replacement is future work |
| F25 | APPROVED_V14_DESIGN_NOT_LIVE | Fairness uses valid era points, commission first, then eligible exposure pro rata | P | Annual-boundary/rounding/eligibility require implementation evidence |
| F26 | PLANNED_FUTURE | Minimum validator self-bond is 10,000 ETKN | P; B:runtime/src/upgrade13_policy.rs policy helper; W notice | L confirmed current value is 0; threshold is not deployed |
| F27 | PLANNED_FUTURE | Validator direction is a 4→7 bootstrap, then qualified validators one at a time with no permanent policy cap | P | Every runtime retains a finite benchmark-proven technical bound; operator independence requires evidence |
| F28 | PRIVATE_REVIEW_SOURCE | V13 configures BABE, GRANDPA, Session/Historical, Authorship, Staking, Balances, Timestamp, TransactionPayment, Vesting, and Sudo | B:runtime/src/lib.rs | Only selected identity/state was live-queried |
| F29 | PRIVATE_REVIEW_SOURCE | IssuanceCap, RewardReserve, AiPredictions, EraWorlds, Multisig, Proxy, Assets, and NFTs are constructed in source | B:runtime/src/lib.rs | Pallet presence is not product adoption or operational custody |
| F30 | PRIVATE_REVIEW_SOURCE | EraWorlds privileged activation is fail-closed | B:runtime/src/lib.rs; B:pallets/era-worlds/src/lib.rs | No live ERA World Engine integration inferred |
| F31 | PRIVATE_REVIEW_SOURCE | Sudo privileged dispatch is configured and issuance-sensitive nested calls are filtered | B:runtime/src/lib.rs | L did not query holder/history; never publish custody identity |
| F32 | PLANNED_FUTURE | Foundation/governance handover is directional work | P | Mechanism, parties, thresholds, proof, and timing undecided |
| F33 | OWNER_DECISION_REQUIRED | First-party project licensing is unsettled | B:LICENSE versus B:Cargo.toml; W third-party notices and absence of top-level LICENSE | Do not add or infer a licence |
| F34 | PRIVATE_REVIEW_SOURCE | ERA blockchain/ETKN holder is ERA Projects Development LLC, New Mexico, Entity ID 0008115472 | P | Address is owner-approved legal attribution; not independently re-verified in this gate |
| F35 | PRIVATE_REVIEW_SOURCE | ERA World Engine LLC is a separate Wyoming company | P | Shared founder/developer does not merge legal entities |
| F36 | PRIVATE_REVIEW_SOURCE | Wallet publication identity is 76cc7b… / tree e2d91e…, 540 files | W Git commit/tree/list; W:BUILD_PROVENANCE.md | Private source publication |
| F37 | PRIVATE_REVIEW_SOURCE | Wallet accepted source is a22e2c… / tree 37ebac… with manifest df2374… | P; W:BUILD_PROVENANCE.md | Accepted-source identity is distinct from GitHub main |
| F38 | PRIVATE_REVIEW_SOURCE | Canonical lib/main.dart committed-byte digest is 708374… | W Git blob at lib/main.dart; W:BUILD_PROVENANCE.md | Independently recomputed from Git blob |
| F39 | PRIVATE_REVIEW_SOURCE | Wallet pins ERA V13 identity and required metadata surfaces | W:lib/config.dart; W:lib/era_v13_compatibility.dart | L network identity matched |
| F40 | PRIVATE_REVIEW_SOURCE | Android/iOS/Linux/macOS/web/Windows targets exist in source | W platform directories; W:pubspec.yaml | Target presence is not distribution/qualification |
| F41 | PRIVATE_REVIEW_SOURCE | Wallet provenance records 165 passing tests | W:BUILD_PROVENANCE.md | Not rerun by this documentation gate |
| F42 | PRIVATE_REVIEW_SOURCE | No public GitHub wallet release existed at Gate B3 | Private GitHub release-state check on 2026-08-28; P | Point-in-time repository state; no binary/download link |
| F43 | PRIVATE_REVIEW_SOURCE | Android signing for an approved distribution is absent | P; W build/release provenance | Recorded outputs are unsigned validation artifacts |
| F44 | APPROVED_V14_DESIGN_NOT_LIVE | V14 is development/design scope, not deployed | P; L still spec 13 | Do not promote V14 claims to current state |
| F45 | PLANNED_FUTURE | V15, signed releases, public-source transition, validator growth, later treasury governance, and independent security work are future | P | No schedule or delivery promise |
| F46 | OWNER_DECISION_REQUIRED | Existing-allocation treatment, annual-boundary/rounding mechanics, migration, benchmarks, testnet proof, and later treasury governance remain open | P; absence of completed evidence at B | Required before applicable promotion |
| F47 | PRIVATE_REVIEW_SOURCE | era-docs was private and truly empty before this baseline | Gate B3 repository identity/default-branch check | Publication process fact; remote main verified after push |

## Snapshot detail

The L snapshot reported node health with four peers, not syncing, and
shouldHavePeers=true. The sync-state current/highest values were 2,077,521 when
read shortly after the finalized anchor. No extrinsic was submitted, no account
secret was used, and no claim in this ledger depends on private infrastructure.

## Ledger maintenance rule

Any future website, white paper, yellow paper, release note, or public-source
change should cite one or more ledger rows. Update the status only when the new
exact source identity and, where applicable, a finalized live observation
support the promotion. Preserve superseded rows rather than rewriting history
without explanation.
