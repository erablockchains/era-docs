# ERA V14 documentation

This repository is the documentation companion to the authenticated ERA V14 source and native-wallet release preparation.

## Current status

| Area | Verified status |
| --- | --- |
| Network | ERA production genesis `0x0abc2c3d8db5815541050b73da4d81267ebf14d90dbee8d7258155b667ea112e` |
| Fleet | Authenticated V14 node release accepted on all nine hosts |
| Runtime | `era` specVersion 15, transactionVersion 1; upgrade finalized once at block 118480 |
| Runtime identity | compressed Wasm SHA-256 `122af167022227c46b2b74d99f5d3a73f41f8d65bb4a8a1de7b88b6e986de2af`; metadata SHA-256 `c188b00f3589677fe7ecfa833d92d884858ad642a6d231d52696298edbe91d40` |
| Website | Original-design multilingual website and wallet build4 deployment accepted; validator and FAQ content prepared separately for review |
| Native wallet | Android, Windows, iOS and Linux source prepared in `erablockchains/apps`; Windows and Android read-only owner checks accepted. iOS/Linux are unverified source targets, not additional V14 acceptance gates. |
| V14 programme | Not yet finally accepted |

Native transfers, consensus staking, capped SecurityBudget accrual, founder vesting, category custody, native Assets, NFT primitives and the World registry are deployed runtime capabilities. Metadata Phase 5 persistence is complete. NFT and allocator production commissioning remains required for V14; implementation does not prove commissioning. The first legitimate SecurityBudget reward payment, approved penalty activation and independent qualification remain open.

AMM and AI predictive tokenization are inactive and deferred. Sentry/private metadata storage is outside V14. The dedicated public ERA Metadata Service is the V14 metadata route.

## Canonical repositories

| Component | Repository and default branch | Current status |
| --- | --- | --- |
| Blockchain | [`erablockchains/era-blockchain`](https://github.com/erablockchains/era-blockchain), `main` | `v14.0.0-rc.1` source prerelease published; commissioning remains open |
| Documentation | [`erablockchains/era-docs`](https://github.com/erablockchains/era-docs), `main` | validator/FAQ update proposed in [draft PR #1](https://github.com/erablockchains/era-docs/pull/1) |
| Native wallet | [`erablockchains/apps`](https://github.com/erablockchains/apps), `master`, subtree `era-wallet/` | build4 website downloads published; iOS/Linux source targets unverified |

The canonical repositories retain their existing default branches and protected pull-request workflow. The blockchain source is published as a clearly labelled `v14.0.0-rc.1` prerelease; this is separate from full V14 production acceptance. The validator/FAQ documentation changes are proposed on `coord/validator-faq-20261003` in draft PR #1 and are held for companion website publication.

## Document map

- [V14 release and commissioning status](docs/11_V14_RELEASE_STATUS.md)
- [Native wallet platforms and artifact binding](docs/12_V14_NATIVE_WALLET.md)
- [Acceptance and independent qualification](docs/13_V14_ACCEPTANCE_AND_QUALIFICATION.md)
- [Source provenance and reproducibility](docs/06_SOURCE_PROVENANCE_AND_REPRODUCIBILITY.md)
- [Security, governance and custody](docs/07_SECURITY_GOVERNANCE_AND_CUSTODY.md)
- [Independent review guide](docs/09_INDEPENDENT_REVIEW_GUIDE.md)
- [Fact ledger](docs/10_FACT_LEDGER.md)
- [Developer and validator onboarding](docs/14_DEVELOPER_AND_VALIDATOR_ONBOARDING.md)
- [Verified listing factsheet](docs/15_PUBLIC_LISTING_FACTSHEET.md)
- [Become a validator](docs/16_BECOME_A_VALIDATOR.md)
- [Frequently asked questions](docs/17_FAQ.md)

Documents 01–10 originated as the 28 August 2026 V13 private-review baseline. Their historical anchors remain useful but do not override the current V14 status above or documents 11–13.

## Publication boundary

The published blockchain source-prerelease tag is `v14.0.0-rc.1`. Public source delivery is separate from completing NFT/allocator commissioning, the legitimate reward payment, penalty activation and independent qualification. Those gates still govern operational completion and any full-V14-acceptance claim. New documentation is proposed through the protected pull-request process; neither this branch nor its website companion is a production validator activation.

First-party documentation is distributed under [Apache-2.0](LICENSE) with the repository [NOTICE](NOTICE). Third-party material retains its own terms and attribution.

See [SECURITY.md](SECURITY.md) for responsible reporting and [CONTRIBUTING.md](CONTRIBUTING.md) for evidence rules.
