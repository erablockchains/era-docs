# ERA V13 private review documentation

> **Publication status:** PRIVATE_REVIEW_SOURCE
> **Network status:** LIVE_V13
> **Economic design status:** APPROVED_V14_DESIGN_NOT_LIVE
> **Repository status:** private review material; it is not presently represented as a public or open-source release.

This repository is the reviewer-first technical baseline for the live ERA V13
network and the separately approved V14 design direction. It deliberately
separates observed live state, reviewed private source, policy that is approved
but not deployed, planned work, and decisions still owned by the project.

Nothing here offers a token sale, wallet download, staking return, listing,
security certification, or delivery guarantee.

## Review anchor

The bounded read-only snapshot was taken on 2026-08-28 at finalized block
2,077,518:

- finalized hash:
  0xa6e6f6460493523a2cb132879613ec5fb5719fbec430fd74f902d7509f703b1c
- network/genesis: ERA-MAINNET /
  0xba96ed0fe6c37790ee7da7ed9e83e9630b29fc8ba66e6753dc2e5c5704aa94e7
- runtime: era 13; transaction version 1
- token properties: ETKN, 18 decimals, SS58 prefix 42
- total issuance / remaining lifetime allowance: 100,000,000 /
  900,000,000 ETKN
- active validators: 4
- current minimum validator bond: 0 ETKN
- completed-era validator payout: zero

These are point-in-time LIVE_V13 observations, not promises about later state.
Use the public secure endpoint
[wss://eraprojects.org/](wss://eraprojects.org/) or the
[Polkadot.js explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feraprojects.org%2F#/explorer)
to perform an independent read-only check.

## Reviewed source identities

All sibling repositories were private when this baseline was prepared.

| Component | Identity | Role |
|---|---|---|
| [ERA blockchain](https://github.com/erablockchains/era-blockchain/tree/8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9) | main commit 8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9 | PRIVATE_REVIEW_SOURCE publication of the V13 source |
| ERA deployed source | commit 77eb28b519d2f83796e65d402a62671a8c777c83; tree 1b0d6a42f1c6dbe091391474fd4b72445a5b2fdb | PRIVATE_REVIEW_SOURCE identity tied to the deployed Wasm |
| [ERA wallet](https://github.com/erablockchains/era-wallet/tree/76cc7b126233845e02a9dc69355baec7f4aa52a0) | main commit 76cc7b126233845e02a9dc69355baec7f4aa52a0; tree e2d91e43e76d6e23f9f385e367a2ccc66ca67250 | PRIVATE_REVIEW_SOURCE publication of reviewed wallet source |
| Wallet accepted source | commit a22e2c5e0ae0f1fdb48e0a813dffd380a1abb505; tree 37ebac418786ce5b3b616758e6edf5e14fc2c0a0 | recorded accepted-source identity, distinct from GitHub publication |
| ERA documentation | this repository's main commit after the Gate B3 publication | private documentation publication identity |

The deployed runtime Wasm is 997,122 bytes with SHA-256
ecca5baddc60d4e8522c8ea6206fec0c29175d59ddf2359e6d43201f1faa44a2.
Publication commits and historical accepted/deployed identities are intentionally
kept distinct.

## Status vocabulary

| Label | Meaning |
|---|---|
| LIVE_V13 | Confirmed on the running V13 network or a stable property of the deployed V13 identity |
| PRIVATE_REVIEW_SOURCE | Supported by source or review evidence in a repository that is currently private |
| APPROVED_V14_DESIGN_NOT_LIVE | Owner-approved V14 policy that is not deployed |
| PLANNED_FUTURE | Directional work without a delivery promise |
| OWNER_DECISION_REQUIRED | A decision or evidence gap that remains unresolved |

## Document map

1. [Executive and project overview](docs/01_EXECUTIVE_AND_PROJECT_OVERVIEW.md)
2. [Network, runtime, and architecture](docs/02_NETWORK_RUNTIME_AND_ARCHITECTURE.md)
3. [Monetary policy and tokenomics](docs/03_MONETARY_POLICY_AND_TOKENOMICS.md)
4. [Staking, validators, and V14 rewards](docs/04_STAKING_VALIDATORS_AND_V14_REWARDS.md)
5. [ERA Wallet status and review](docs/05_ERA_WALLET_STATUS_AND_REVIEW.md)
6. [Source provenance and reproducibility](docs/06_SOURCE_PROVENANCE_AND_REPRODUCIBILITY.md)
7. [Security, governance, and custody](docs/07_SECURITY_GOVERNANCE_AND_CUSTODY.md)
8. [V13 status, V14 roadmap, and known gaps](docs/08_V13_STATUS_V14_ROADMAP_AND_KNOWN_GAPS.md)
9. [Independent review guide](docs/09_INDEPENDENT_REVIEW_GUIDE.md)
10. [Fact ledger](docs/10_FACT_LEDGER.md)

See [SECURITY.md](SECURITY.md) for private vulnerability reporting and
[CONTRIBUTING.md](CONTRIBUTING.md) for the documentation correction workflow.

## Critical boundaries

- LIVE_V13 staking, nomination, elections, era progression, and reward points
  remain available. The staking pallet's era payout is zero, so this
  documentation advertises no current staking yield.
- APPROVED_V14_DESIGN_NOT_LIVE policy assigns new issuance 90% to
  validators/nominators through protocol staking and 10% to the
  ecosystem/foundation protocol treasury. Normal fees excluding tips are
  90% staking reward pot and 10% treasury. Tips are 90% block author and 10%
  treasury; when the block author is missing or cannot receive the tip, the
  complete tip falls back 50% to the staking reward pot and 50% to the
  treasury. The burn share is 0%.
- APPROVED_V14_DESIGN_NOT_LIVE also sets a 10% target staking APR before
  commission, performance, and additive fee income; a 6,000,000 ETKN gross
  annual issuance ceiling; validator commission from 0% through a 20% maximum;
  and a keyless ERA_TREA treasury that can accumulate but has EnsureNever
  spending origin and no V14 withdrawal dispatchable.
- PLANNED_FUTURE validator growth is a 4→7 bootstrap, followed by qualified
  validators added one at a time with no permanent policy cap. Every runtime
  must retain a finite benchmark-proven technical safety bound.
- The existing 20,000,000 ETKN validator/nominator allocation is separate from
  V14 gross issuance and must not be double-counted or reclassified without an
  owner decision.
- The wallet repository contains source, not a public release. Current recorded
  validation outputs are unsigned and are not downloads.
- Licence selection is OWNER_DECISION_REQUIRED. This repository therefore does
  not add a LICENSE file.
- Generic runtime capabilities do not prove operational custody, governance,
  application adoption, independent operators, or product integration.
