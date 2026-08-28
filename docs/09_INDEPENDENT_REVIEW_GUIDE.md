# Independent review guide

[Back to index](../README.md)

Status: PRIVATE_REVIEW_SOURCE

This guide is read-only and source-focused. It contains no production access
procedure and requires no account secret.

## Exact review inputs

| Input | Identity |
|---|---|
| Blockchain publication | 8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9 |
| Blockchain deployed source | 77eb28b519d2f83796e65d402a62671a8c777c83 |
| Blockchain deployed source tree | 1b0d6a42f1c6dbe091391474fd4b72445a5b2fdb |
| Runtime Wasm | 997,122 bytes; SHA-256 ecca5baddc60d4e8522c8ea6206fec0c29175d59ddf2359e6d43201f1faa44a2 |
| Wallet publication | 76cc7b126233845e02a9dc69355baec7f4aa52a0 |
| Wallet publication tree | e2d91e43e76d6e23f9f385e367a2ccc66ca67250 |
| Wallet accepted source | a22e2c5e0ae0f1fdb48e0a813dffd380a1abb505 |
| Wallet accepted source tree | 37ebac418786ce5b3b616758e6edf5e14fc2c0a0 |
| Wallet source manifest | df2374a3a4c79f04954013a8bf05543cbdcd116845780eeba4e9997a6c8cbafb |
| Wallet entrypoint digest | 70837410ee5139ee9bd5ba2dc3059a5a6ac0febe9c02c2471a4e477123208ba1 |

## 1. Identity and provenance

- [ ] Verify the GitHub owner is erablockchains and the repositories are in the
  expected visibility state.
- [ ] Fetch without merging and require the exact main commits/trees.
- [ ] Read the blockchain provenance and V13 baseline records completely.
- [ ] Keep deployed-source, publication, compiled Wasm, accepted wallet source,
  and documentation publication identities separate.
- [ ] Verify the wallet file count, source manifest record, and committed-byte
  entrypoint digest.

Stop on an identity mismatch.

## 2. Monetary invariants

- [ ] Trace every native issuance path through IssuanceCap and the runtime call
  filter.
- [ ] Confirm 100 million current issuance + 900 million remaining allowance =
  one billion lifetime cap.
- [ ] Confirm burns do not restore allowance.
- [ ] Reconcile the five existing allocation categories to 100 million ETKN.
- [ ] Keep the separate existing 20 million validator/nominator allocation out
  of V14 gross-issuance funding unless a later decision changes it.
- [ ] Separate issuance from fee/tip redistribution.
- [ ] Treat the V13 70/30 normal-fee and 100/0 tip source configuration as
  distinct from approved V14 90/10 policies.
- [ ] Verify the 50/50 complete-tip fallback when the block author is missing or
  cannot receive the tip.
- [ ] Verify the 10% target staking APR is before commission, performance, and
  additive normal-fee income and that gross annual issuance never exceeds
  6,000,000 ETKN or RemainingAllowance.
- [ ] Verify ERA_TREA is keyless and accumulation-only in V14, with EnsureNever
  spending origin and no withdrawal dispatchable.

## 3. Staking and rewards

- [ ] Verify Session, Historical, Authorship, Staking, elections, exposure,
  bonding/nomination/unbonding/withdrawal, and reward-point flow.
- [ ] Confirm EraPayout configuration and a completed-era
  Staking.ErasValidatorReward at one finalized anchor.
- [ ] Review RewardReserve independently from the staking-era payout.
- [ ] Inspect activation, budgeting, balance source, claims, commission,
  eligibility, rounding, and replay protection before making any payout claim.
- [ ] Treat 10,000 ETKN and the 4→7 bootstrap as future policy, not current
  enforcement.
- [ ] After the bootstrap, require one-at-a-time qualification with no permanent
  policy cap, while every runtime enforces a finite benchmark-proven technical
  safety bound.
- [ ] Enforce validator commission from 0% through the approved 20% maximum.

## 4. Migrations and versioning

- [ ] Review V13 migration storage-version gates, idempotence, pre/post checks,
  and issuance/allocation inputs.
- [ ] For V14, require exact migration ordering, cap-aware failure behavior,
  annual target/ceiling and fallback behavior, weight/benchmark evidence,
  rollback assumptions, and try-runtime/testnet proof.
- [ ] Confirm runtime and transaction version changes match metadata and wallet
  compatibility changes.

## 5. Tests and builds

- [ ] Use the pinned Rust toolchain, Cargo.lock, workspace features, and
  repository-native build/test commands.
- [ ] Compare a reproduced Wasm only under recorded reproducibility conditions.
- [ ] Treat wallet's recorded 165-test result as provenance until independently
  rerun.
- [ ] Build iOS/macOS only on macOS/Xcode and each native target on an
  appropriate host.
- [ ] Keep all outputs unsigned/local unless a later release gate approves
  signing and publication.

## 6. Wallet constants and transaction safety

- [ ] Check official WSS, genesis, runtime/transaction versions, token
  properties, metadata version/hash, and Wasm hash.
- [ ] Check required call/storage surface guards and fail-closed mismatch
  behavior.
- [ ] Review signing payload construction, fee queries, nonce/mortality, secure
  storage, secret lifecycle, and transaction-result handling.
- [ ] Do not supply a real seed phrase to a review build or service.

## 7. Security, governance, and publication gaps

- [ ] Review Sudo and nested-call issuance filtering without identifying private
  custodians.
- [ ] Do not infer custody from generic Multisig/Proxy availability.
- [ ] For any later treasury spending design, require explicit authorization,
  spending, reporting, and recovery evidence.
- [ ] Distinguish V14's accumulation-only ERA_TREA from a later
  governance-enabled spending design.
- [ ] Resolve first-party licensing before public-source publication.
- [ ] Require controlled release signing, device qualification, provenance,
  checksums, and private vulnerability reporting.
- [ ] Use [the fact ledger](10_FACT_LEDGER.md) to trace every external website
  or paper claim to its evidence and status.

## Bounded public check

Use wss://eraprojects.org/ once, anchor reads to a finalized block, and query
only public identity/health/monetary/staking status. Do not send a transaction,
use account secrets, or contact private infrastructure. A transient endpoint
failure should be reported as unavailable rather than worked around with
unapproved endpoints.
