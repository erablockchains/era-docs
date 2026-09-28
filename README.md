# ERA V14 documentation

This repository is the documentation companion to the authenticated ERA V14 source and native-wallet release preparation.

## Current status

| Area | Verified status |
| --- | --- |
| Network | ERA production genesis `0x0abc2c3d8db5815541050b73da4d81267ebf14d90dbee8d7258155b667ea112e` |
| Fleet | Authenticated V14 node release accepted on all nine hosts |
| Runtime | `era` specVersion 15, transactionVersion 1; upgrade finalized once at block 118480 |
| Runtime identity | compressed Wasm SHA-256 `122af167022227c46b2b74d99f5d3a73f41f8d65bb4a8a1de7b88b6e986de2af`; metadata SHA-256 `c188b00f3589677fe7ecfa833d92d884858ad642a6d231d52696298edbe91d40` |
| Website | Reviewed R6 deployment closed |
| Native wallet | Android, Windows, iOS and Linux source prepared in `erablockchains/apps`; Windows and Android read-only owner checks accepted. iOS/Linux are unverified source targets, not additional V14 acceptance gates. |
| V14 programme | Not yet finally accepted |

Native transfers, consensus staking, capped SecurityBudget accrual, founder vesting, category custody, native Assets, NFT primitives and the World registry are deployed runtime capabilities. Metadata Phase 5 persistence is complete. NFT and allocator production commissioning remains required for V14; implementation does not prove commissioning. The first legitimate SecurityBudget reward payment, approved penalty activation and independent qualification remain open.

AMM and AI predictive tokenization are inactive and deferred. Sentry/private metadata storage is outside V14. The dedicated public ERA Metadata Service is the V14 metadata route.

## Canonical repositories

| Component | Repository and default branch | Prepared local integration identity |
| --- | --- | --- |
| Blockchain | [`erablockchains/era-blockchain`](https://github.com/erablockchains/era-blockchain), `main` | branch `coord/v14-integration-20260928`, commit `06b95bb5da22937707ba20f677d4c4bbd95a5107` |
| Documentation | [`erablockchains/era-docs`](https://github.com/erablockchains/era-docs), `main` | this local integration branch; final commit recorded after validation |
| Native wallet | [`erablockchains/apps`](https://github.com/erablockchains/apps), `master`, subtree `era-wallet/` | branch `coord/v14-wallet-integration-20260928`, commit `6fc0b720e961412198f06a20cee1bdb5bb95a8b5` |

The blockchain repository remains private during preparation. The documentation repository also remains private. The apps repository is already public, so any push publishes wallet bytes; no prepared branch has been pushed. Default branches have not been renamed, and no replacement repository has been created.

## Document map

- [V14 release and commissioning status](docs/11_V14_RELEASE_STATUS.md)
- [Native wallet platforms and artifact binding](docs/12_V14_NATIVE_WALLET.md)
- [Acceptance and independent qualification](docs/13_V14_ACCEPTANCE_AND_QUALIFICATION.md)
- [Source provenance and reproducibility](docs/06_SOURCE_PROVENANCE_AND_REPRODUCIBILITY.md)
- [Security, governance and custody](docs/07_SECURITY_GOVERNANCE_AND_CUSTODY.md)
- [Independent review guide](docs/09_INDEPENDENT_REVIEW_GUIDE.md)
- [Fact ledger](docs/10_FACT_LEDGER.md)

Documents 01–10 originated as the 28 August 2026 V13 private-review baseline. Their historical anchors remain useful but do not override the current V14 status above or documents 11–13.

## Publication boundary

The proposed blockchain tag is `v14.0.0`; it does not exist. Branch pushes, tags, releases, repository visibility changes and release-asset publication require separate approval. The website deployment did not authorize GitHub publication.

The documentation repository still has no selected first-party license. Existing records classify that choice as an owner decision, so a license has not been invented during preparation. This must be resolved before public documentation publication.

See [SECURITY.md](SECURITY.md) for responsible reporting and [CONTRIBUTING.md](CONTRIBUTING.md) for evidence rules.
