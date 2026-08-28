# ERA Wallet status and review

[Back to index](../README.md)

## Canonical source identity

The reviewed GitHub publication is PRIVATE_REVIEW_SOURCE:

| Item | Identity |
|---|---|
| Repository | [erablockchains/era-wallet](https://github.com/erablockchains/era-wallet/tree/76cc7b126233845e02a9dc69355baec7f4aa52a0) |
| Main commit | 76cc7b126233845e02a9dc69355baec7f4aa52a0 |
| Main tree | e2d91e43e76d6e23f9f385e367a2ccc66ca67250 |
| Tracked files | 540 |
| Accepted source commit | a22e2c5e0ae0f1fdb48e0a813dffd380a1abb505 |
| Accepted source tree | 37ebac418786ce5b3b616758e6edf5e14fc2c0a0 |
| Accepted source-manifest SHA-256 | df2374a3a4c79f04954013a8bf05543cbdcd116845780eeba4e9997a6c8cbafb |
| Canonical entrypoint | lib/main.dart |
| Entrypoint committed-byte SHA-256 | 70837410ee5139ee9bd5ba2dc3059a5a6ac0febe9c02c2471a4e477123208ba1 |

The accepted-source identity and GitHub publication identity are related
provenance records, not interchangeable commit hashes. The entrypoint digest
must be calculated from committed bytes; checkout line-ending conversion can
otherwise change a working-file digest.

## Network compatibility

The wallet pins and checks:

- official endpoint wss://eraprojects.org/
- ERA-MAINNET genesis
  0xba96ed0fe6c37790ee7da7ed9e83e9630b29fc8ba66e6753dc2e5c5704aa94e7
- spec name era, spec version 13, transaction version 1
- ETKN, 18 decimals, SS58 prefix 42
- metadata V14 and reviewed metadata/Wasm digests
- required Balances, Staking, System, Session, TransactionPayment, and selected
  AiPredictions metadata surfaces

Production configuration accepts the official secure endpoint by default and
requires an explicit development opt-in for another secure endpoint. Insecure
WebSocket endpoints are rejected. These are PRIVATE_REVIEW_SOURCE controls,
not a general guarantee about every build or host environment.

The wallet notice correctly states that staking, nomination, and validator
selection are active while the current validator-era payout is zero. The
planned 10,000 ETKN validator threshold is separately labelled as not enforced
in V13.

## Platform and test status

The publication contains Flutter source scaffolding for Android, iOS, Linux,
macOS, web, and Windows. This means those targets are present in source; it does
not mean that every target has completed device qualification or has a signed
distribution.

Repository provenance records 165 passing tests for the accepted review state.
This Gate B3 documentation review did not rerun Flutter tests or install
dependencies, so the number is a recorded PRIVATE_REVIEW_SOURCE result rather
than a new execution claim.

iOS and macOS builds require a macOS host with Xcode and appropriate signing
configuration. Native Linux builds require a compatible Linux host/toolchain.
Platform-specific store, signing, privacy, and device validation remain
separate release gates.

## Release and signing status

- GitHub public releases: **none**
- Android signing for an approved distribution: **no**
- Current recorded Android, web, and Windows outputs: unsigned local validation
  artifacts only

No binary is copied or linked here. Historical release-planning documents in
the wallet repository contain older direct-download or signing language; those
records do not override the Gate B3 canonical no-release/no-signing status.

## Security posture from source

The source uses local key/signing libraries, secure-storage APIs, biometric
support, endpoint/runtime identity guards, and explicit transaction signing
payload construction. These controls still depend on correct platform storage,
build integrity, dependency review, user-device security, and release signing.
They are not a completed independent security assessment.

Users and reviewers must never provide seed phrases or private keys to a build
service, repository issue, support channel, or reviewer. A reviewer can inspect
and build from source without production secrets.

## Independent build outline

After obtaining authorized access:

~~~sh
git clone https://github.com/erablockchains/era-wallet.git
cd era-wallet
git checkout 76cc7b126233845e02a9dc69355baec7f4aa52a0
git rev-parse HEAD
git rev-parse HEAD^{tree}
flutter pub get
flutter analyze
flutter test
~~~

Choose only a platform supported by the build host, follow the repository's
release/build documentation, and treat outputs as local review artifacts unless
a later signed-release gate explicitly approves distribution. Do not weaken
endpoint/runtime guards or introduce signing secrets merely to make a build
complete.

## Remaining wallet gates

PLANNED_FUTURE or OWNER_DECISION_REQUIRED:

- settle the first-party project licence;
- reconcile historical release records with current release policy;
- complete platform/device qualification;
- configure controlled signing and provenance for approved releases;
- publish checksums/signatures only with an authorized release;
- complete independent security review and a public-source transition decision.
