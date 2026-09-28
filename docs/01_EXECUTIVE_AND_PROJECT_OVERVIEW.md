# Executive and project overview

> **Historical V13 baseline (28 August 2026):** Retained for audit context. Current ERA V14 status and canonical repository identities are in [the repository index](../README.md) and documents 11–13. Historical repository links and LIVE_V13 labels below do not describe the current production chain.


[Back to index](../README.md)

## Purpose and review posture

ERA is a Substrate-based blockchain network whose live production identity is
ERA-MAINNET, genesis
0xba96ed0fe6c37790ee7da7ed9e83e9630b29fc8ba66e6753dc2e5c5704aa94e7,
runtime spec era 13, and transaction version 1. This documentation is a
PRIVATE_REVIEW_SOURCE baseline written for technical and policy review. It is
not a wallet distribution channel, financial promotion, or assurance report.

The evidence model is intentionally layered:

| Layer | Meaning in this review |
|---|---|
| LIVE_V13 | A point-in-time public-network observation or deployed V13 invariant |
| PRIVATE_REVIEW_SOURCE | Exact private blockchain/wallet source and its recorded provenance |
| APPROVED_V14_DESIGN_NOT_LIVE | Approved economic direction that remains undeployed |
| PLANNED_FUTURE | Roadmap direction requiring implementation and evidence |
| OWNER_DECISION_REQUIRED | An unresolved policy, licence, custody, or disclosure decision |

## Legal attribution and project separation

The ERA blockchain and ETKN holder is **ERA Projects Development LLC**, a New
Mexico, USA company:

- address: 1209 Mountain Rd PL NE, STE R, Albuquerque, NM 87110
- Entity ID: 0008115472

ERA World Engine LLC is a separate Wyoming company holding ERA World Engine.
The two projects share a founder/developer, but they are not the same legal
entity. ERA World Engine integration is PLANNED_FUTURE; the runtime source
surface alone does not establish a live compute or commercial integration.

## Current network

The 2026-08-28 bounded read-only snapshot at finalized block 2,077,518 confirmed:

| Item | LIVE_V13 observation |
|---|---|
| Network | ERA-MAINNET |
| Runtime | era 13, transaction version 1 |
| Token | ETKN; display/project name ERA; 18 decimals; SS58 prefix 42 |
| Approximate target block time | 6 seconds in reviewed runtime source |
| Total issuance | 100,000,000 ETKN |
| Lifetime hard cap | 1,000,000,000 ETKN |
| Remaining issuance allowance | 900,000,000 ETKN |
| Selected/active validators | 4 |
| Current minimum validator bond | 0 ETKN |
| Staking-era payout | zero for the completed era checked |

Staking remains operational: source and wallet compatibility evidence cover
bonding, nomination, unbonding, withdrawal, elections, eras, validator
selection, and authored reward points. The zero era payout means no current
staking yield is advertised.

## Source-review status

The V13 source publication is pinned to
[era-blockchain commit 8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9](https://github.com/erablockchains/era-blockchain/tree/8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9).
Its provenance record distinguishes that GitHub publication identity from
deployed-source commit 77eb28b519d2f83796e65d402a62671a8c777c83 and
deployed-source tree 1b0d6a42f1c6dbe091391474fd4b72445a5b2fdb. The
deployed Wasm identity is recorded separately.

The wallet source publication is pinned to
[era-wallet commit 76cc7b126233845e02a9dc69355baec7f4aa52a0](https://github.com/erablockchains/era-wallet/tree/76cc7b126233845e02a9dc69355baec7f4aa52a0).
It contains source for six platform targets, but no GitHub release and no
approved signed Android distribution.

Both source repositories and this documentation repository were private at the
Gate B3 review. Their presence on GitHub does not itself grant a public-source
licence.

## Major source-proven capabilities

The deployed V13 publication configures BABE block production, GRANDPA
finality, Session/Historical, Authorship, Staking, Balances, Timestamp,
TransactionPayment, Vesting, Sudo, and custom IssuanceCap, RewardReserve,
AiPredictions, and EraWorlds components. Generic Multisig, Proxy, Assets, and
NFTs pallets also appear in the runtime construction.

These are PRIVATE_REVIEW_SOURCE observations. A configured generic pallet does
not prove a production product, active user adoption, operational custody
arrangement, independent operator, or legal/compliance status.

## Boundaries and roadmap

- LIVE_V13: 100 million ETKN issuance, 900 million ETKN remaining lifetime
  allowance, four active validators, live staking mechanics, and zero staking
  era payout at the snapshot anchor.
- APPROVED_V14_DESIGN_NOT_LIVE: exact 90/10 new-issuance, normal-fee, and
  receivable-tip policies; 50/50 missing-author tip fallback; 10% target
  staking APR; 6 million ETKN gross annual issuance ceiling; 20% maximum
  validator commission; and keyless accumulation-only ERA_TREA treasury
  described in
  [monetary policy](03_MONETARY_POLICY_AND_TOKENOMICS.md).
- PLANNED_FUTURE: 10,000 ETKN validator self-bond minimum; a 4→7 bootstrap
  followed by qualified validators added one at a time with no permanent
  policy cap and a finite benchmark-proven runtime safety bound;
  implementation/testnet proof; governance handover; signed wallet releases;
  independent security work; and public-source transition.
- OWNER_DECISION_REQUIRED: project licensing, the relationship between the
  active V13 reward-reserve configuration and approved V14 policy, treatment of
  the separate existing 20 million ETKN allocation, later governance-enabled
  treasury controls, custody transition, and publication timing.

No roadmap item is a delivery promise, return promise, token-sale invitation,
or listing guarantee.
