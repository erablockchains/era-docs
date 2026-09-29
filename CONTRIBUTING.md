# Contributing to ERA documentation

Prepare changes on a non-default branch and submit them for review. Do not force-push or rename `main` as part of V14 publication.

Every current claim must distinguish among deployed runtime capability, completed production commissioning, owner-performed validation, automated validation and independent qualification. Cite a repository, exact commit and path for source claims; cite a finalized block and hash for live-chain claims. A source implementation is not evidence that a production workflow ran.

Do not include credentials, seeds, keys, private operational evidence, custody identity mappings, host access details, internal paths, personal data, node databases, signing requests or compiled wallet/runtime/node artifacts. Use public addresses and chain hashes only when required to verify a public claim.

Before review:

1. check internal links and UTF-8 rendering;
2. reconcile runtime, metadata, source and artifact hashes;
3. scan the exact diff for secrets and private operational evidence;
4. preserve the distinctions that NFT commissioning remains required, AMM/AI are deferred, and sentry/private storage is outside V14;
5. record owner evidence separately from automated and independent evidence;
6. do not publish until the separate action-time approval is recorded.

First-party documentation is prepared under Apache-2.0 in [LICENSE](LICENSE), subject to rights-holder review before publication. Preserve third-party terms and attribution; a linked source is not relicensed by this repository.
