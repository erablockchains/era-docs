# Developer and validator onboarding — current scope

[Back to index](../README.md)

## Build and connect as a developer

Use the [canonical blockchain source](https://github.com/erablockchains/era-blockchain) and its pinned toolchain, lockfile, [build instructions](https://github.com/erablockchains/era-blockchain/blob/main/docs/BUILD.md) and [source provenance](https://github.com/erablockchains/era-blockchain/blob/main/docs/PROVENANCE.md). This source candidate is bound to the deployed spec15 runtime, but the proposed public release is source-only: it does not supply a newly independently rebuilt or signed node binary. Review third-party licences and advisories before integrating.

ERA's public endpoint is `wss://eraprojects.org/` or `https://eraprojects.org/`. Authenticate chain `ERA`, genesis `0x0abc2c3d8db5815541050b73da4d81267ebf14d90dbee8d7258155b667ea112e`, runtime `era` specVersion 15/transactionVersion 1 and the published metadata binding before relying on API calls. The native SDK has pinned V14 metadata and bounded Assets/NFT readers; keep calls and result decoding tied to a finalized block. The dedicated public metadata service serves four approved NFT documents, with exact-byte retrieval checks. Production NFT/allocator creation and market commissioning remain open, so a missing production collection is expected rather than proof of a reader failure.

A separate non-validator full node can be prepared using the raw chain specification and two public sentry addresses in the [operator guide](https://github.com/erablockchains/era-blockchain/blob/main/docs/OPERATORS.md). Its command is a reviewed candidate, not a verified independent onboarding run; public sentry reachability from a new operator remains to be qualified. Keep RPC loopback and do not use production chain databases, authority keys or founder identities.

## Actual validator admission

The production set currently comprises four founder-controlled validators. The spec15 runtime enforces a 10,000 ETKN minimum validator self-bond, bounds commission at 20% and has a finite technical validator-set bound. Bonding, creating independent session keys, setting them on the candidate node and declaring validator intent are only prerequisites; election and the currently controlled set determine whether a candidate becomes active. Stake does **not** buy a seat. The planned 4-to-7 expansion and external-operator admission have no completed public production procedure or independent admission proof. An interested operator should request the current reviewed intake and qualification route from ERA Projects before funding, signing or running a validator. No founder keystore or existing production database should be copied.

Validator selection, rewards and penalties must be described separately. Standard staking era payout is zero in this runtime; the custom SecurityBudget reward route has accrued eligibility but its first legitimate production payment is still unverified. A 10% design target or other policy bound is not a promised return. The penalty policy is implemented but activation remains after the recorded reward-payment gate. Public validator qualification must demonstrate connectivity, session-key control, safe operations, election behavior, finality and independent operation before broader admission claims.

## Evidence and support

Fleet and runtime deployment passed authenticated coordinator checks. Android and Windows wallet checks include owner-performed results; iOS/Linux source presence is not device qualification. Metadata Phase 5 is complete, while the defined independent endpoint and separate full-node qualification remains open. See [release status](11_V14_RELEASE_STATUS.md), [qualification requirements](13_V14_ACCEPTANCE_AND_QUALIFICATION.md) and the [factsheet](15_PUBLIC_LISTING_FACTSHEET.md). Report security concerns through [SECURITY.md](../SECURITY.md); support and policy links must be verified at publication time.
