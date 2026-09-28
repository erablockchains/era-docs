# Source provenance and reproducibility

> **Historical V13 baseline (28 August 2026):** Retained for audit context. Current ERA V14 status and canonical repository identities are in [the repository index](../README.md) and documents 11–13. Historical repository links and LIVE_V13 labels below do not describe the current production chain.


[Back to index](../README.md)

## Identity layers

Different artifacts have different identities. A review must not substitute one
for another.

| Artifact | Recorded identity | Status and meaning |
|---|---|---|
| Blockchain deployed source | commit 77eb28b519d2f83796e65d402a62671a8c777c83; tree 1b0d6a42f1c6dbe091391474fd4b72445a5b2fdb | PRIVATE_REVIEW_SOURCE historical identity tied to deployed V13 |
| Blockchain GitHub publication | commit 8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9; tree b8ba684f1612e056b1ba3037762e2a0bc368e6d5 | private main publication containing the reviewed deployed-source material and provenance |
| Deployed runtime Wasm | 997,122 bytes; SHA-256 ecca5baddc60d4e8522c8ea6206fec0c29175d59ddf2359e6d43201f1faa44a2 | binary identity recorded by blockchain provenance and wallet compatibility |
| Wallet accepted source | commit a22e2c5e0ae0f1fdb48e0a813dffd380a1abb505; tree 37ebac418786ce5b3b616758e6edf5e14fc2c0a0 | accepted review-source identity |
| Wallet GitHub publication | commit 76cc7b126233845e02a9dc69355baec7f4aa52a0; tree e2d91e43e76d6e23f9f385e367a2ccc66ca67250 | private main publication, 540 files |
| Wallet source manifest | SHA-256 df2374a3a4c79f04954013a8bf05543cbdcd116845780eeba4e9997a6c8cbafb | recorded accepted-source manifest identity |
| Wallet canonical entrypoint | lib/main.dart SHA-256 70837410ee5139ee9bd5ba2dc3059a5a6ac0febe9c02c2471a4e477123208ba1 | digest of bytes stored in Git |
| Documentation publication | main commit and tree produced by the Gate B3 publication | private publication identity verified after push |

A Git commit cannot contain its own final commit hash without changing itself.
Accordingly, the documentation publication identity is verified from remote
main after publication and reported by the gate; the committed documents
describe the verification method rather than embedding a self-referential hash.

## Blockchain verification

With authorized repository access:

~~~sh
git clone https://github.com/erablockchains/era-blockchain.git
cd era-blockchain
git checkout 8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9
git rev-parse HEAD
git rev-parse HEAD^{tree}
git status --short
~~~

Review, at minimum:

- runtime/src/lib.rs for active runtime construction, versions, timing,
  Staking, Authorship, fee routing, and component indices;
- runtime/src/issuance_cap.rs for lifetime allowance behavior;
- runtime/src/upgrade13_policy.rs and runtime/src/v13_migration.rs for recorded
  migration/allocation policy;
- pallets/reward-reserve/src/lib.rs for reserve budgeting and claims;
- node/src/chain_spec.rs for source chain properties, while preferring live
  system_properties for the deployed token symbol;
- docs/review/SOURCE_PROVENANCE.md and
  docs/review/V13_MAINNET_BASELINE_AND_KNOWN_GAPS.md for source lineage and
  limitations;
- Cargo.lock, Cargo.toml, rust-toolchain.toml, LICENSE,
  THIRD_PARTY_NOTICES.md, and SECURITY.md.

Use repository-native Rust commands and the pinned toolchain. A release build
can be compared with the recorded Wasm hash only after accounting for toolchain,
features, build profile, and reproducibility instructions. A different local
digest does not justify changing the deployed identity.

No validator/session/sudo keys, node database, private endpoint, or production
host access is needed for source compilation or hash review.

## Wallet verification

~~~sh
git clone https://github.com/erablockchains/era-wallet.git
cd era-wallet
git checkout 76cc7b126233845e02a9dc69355baec7f4aa52a0
git rev-parse HEAD
git rev-parse HEAD^{tree}
git ls-tree -r --name-only HEAD
git show HEAD:lib/main.dart | sha256sum
flutter pub get
flutter analyze
flutter test
~~~

The committed-byte entrypoint digest is preferred to hashing a checked-out file
because Git line-ending conversion can alter working bytes. Review pubspec.yaml
and pubspec.lock, lib/config.dart, lib/era_v13_compatibility.dart, the canonical
entrypoint, generated runtime bindings, tests, README/provenance records, and
platform-specific build notes.

Build only on an appropriate host. iOS/macOS require macOS and Xcode. Do not add
production keys or distribution credentials. Outputs remain local review
artifacts unless separately signed and published through an authorized release
gate.

## Live identity comparison

Use a bounded read-only query against wss://eraprojects.org/ and anchor all
storage reads to one finalized block. Compare chain name, genesis, runtime and
transaction versions, system properties, total issuance, RemainingAllowance,
validator count, era/session state, MinValidatorBond, and the completed-era
ErasValidatorReward. Never send an extrinsic or use an account secret.

The Gate B3 anchor and results are in [the fact ledger](10_FACT_LEDGER.md).

## Documentation manifest

Before publication, sort the proposed tracked paths bytewise, calculate SHA-256
over each exact file, and create lines in this form:

~~~text
<lowercase-sha256><two spaces><repository-relative-path><LF>
~~~

The documentation manifest SHA-256 is the SHA-256 of that complete UTF-8/LF
line sequence. The evidence report preserves the manifest outside the
repository so the manifest does not become self-referential. After publication,
verify the remote tree and recompute from the committed blobs.

## Licence reproducibility boundary

The blockchain root licence text and its Cargo workspace licence declaration
are inconsistent, while the wallet has third-party notices but no top-level
first-party LICENSE. These facts do not establish a settled project licence.
LICENCE_STATUS is OWNER_DECISION_REQUIRED, and this repository intentionally
contains no LICENSE file.
