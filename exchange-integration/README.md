# ERA native ETKN exchange integration kit

Version **1.0.0 — 2026-10-26**. Engineering assessment package, not exchange approval, a commercial agreement, or authorization to move funds. ETKN is the native asset of ERA's independent Polkadot SDK chain. Contract address: **Not applicable—native asset.** ERC-20 interoperability remains planned V15 work.

Start with [integration specification](INTEGRATION.md), [node operation](NODE.md), [acceptance checklist](ACCEPTANCE.md), and [dated evidence](fixtures/production-snapshot.json). The package contains public metadata and synthetic test material only. The separate private due-diligence worksheet and correspondence are not part of this repository or download.

## Run the examples

Validated with Node.js 24.14.1 and the exact npm lockfile. Install from the well-known npm registry; do not use arbitrary dependency upgrades during integration.

```sh
npm ci --ignore-scripts
npm test
node synthetic-signing.mjs
# Optional read-only production observation; no signing or submission:
node scan-finalized.mjs
# An explicit finalized height; unavailable/pruned or unapproved historical state fails closed:
node scan-finalized.mjs 576743
```

`synthetic-signing.mjs` runs offline and uses a deliberately fictitious genesis plus public test seeds. It verifies sr25519, ed25519 and ECDSA signatures and writes `local-output/synthetic-vectors.json`. Never fund these accounts. sr25519 signatures may differ between runs; public keys, addresses, payload interpretation and successful verification are the invariants. Saved [vectors](fixtures/synthetic-vectors.json) are examples, not production transactions.

`scan-finalized.mjs` emits candidate transfer records from one finalized block. It never credits an exchange ledger. Production integrations must implement the transactional journal, backfill, account mapping, custody controls and operational acceptance in the specification. There is no public testnet or production fund movement included in this kit.

Download [ZIP v1.0.0](../downloads/era-native-etkn-exchange-kit-v1.0.0.zip) and [SHA256SUMS](../downloads/SHA256SUMS). Verify the ZIP checksum before extraction, then verify `MANIFEST.sha256` inside it. These repository-relative download links refer to the published repository; an extracted ZIP is already the package root. Repository history identifies the publication commit; the runtime source has a separate identity below.

## Evidence and limitations

The kit's 13 offline acceptance-model tests pass; offline signing verifies all three runtime signature variants. A read-only finalized scanner check returned valid spec16 data and no transfers in its sampled block. These are internal tests, not an independent audit or end-to-end exchange custody certification. Earlier source/runtime tests are separately dated in [the public validation record](https://github.com/erablockchains/era-blockchain/blob/edb10d7c2916283242356d172301091b94c08401/docs/VALIDATION.md). No fresh node compilation, full resynchronization or independent archive onboarding is claimed by this release.

Contact: **info@eraprojects.io**, ERA Projects Development LLC (New Mexico, United States). Engineering and incident messages should include chain genesis, UTC time, finalized height/hash, runtime and metadata identities, affected transaction hash and sanitized errors. Never send keys, seeds, credentials or private customer data.

Google Play Production Submission 7 is **under review** as last verified on 26 October 2026; this is not approval or public availability. It is separate from native-node exchange compatibility.
