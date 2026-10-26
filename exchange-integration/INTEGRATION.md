# Native-chain integration specification

## Identity and source binding

Observed **2026-10-26T18:57:53.686Z**, finalized block **576743**, hash **`0x7c6b5f4f76a602a80a2089f9e9f43bca6dc72c3e6a6379f3462720010f367fd8`**. Finality advanced during the bounded read-only observation. Full public response fields are in [snapshot](fixtures/production-snapshot.json).

| Field | Verified value |
| --- | --- |
| Chain / asset | ERA / native ETKN |
| Genesis | `0x0abc2c3d8db5815541050b73da4d81267ebf14d90dbee8d7258155b667ea112e` |
| Precision | 18 decimals; 1 ETKN = 10^18 integer base units |
| Address | SS58 prefix 42, AccountId32; prefix 42 is shared with other chains and is not chain identity |
| Runtime | specName `era`, specVersion 16, transactionVersion 1, stateVersion 1 |
| Consensus | BABE block production, GRANDPA finality; nominal 6-second slot, 100-slot epoch |
| Validator set | 4 observed; founder-controlled, not demonstrated independent decentralization |
| Metadata SHA-256 | `574931f693241cb62e1ad2990eda55e2250c36c9c0de852b0380eac480c8496a` |
| Deployed compressed runtime SHA-256 | `bc0085ce268f447760403a3049c9e9e64b0150bdd79c0ee20490f6fab36b2b85` |
| Public runtime source | `erablockchains/era-blockchain` commit `edb10d7c2916283242356d172301091b94c08401` |
| Runtime source tree | `ab9fff713183b98ba40f3ebe68d554a2ccc39a18`, identical to retained build source commit `c88fe90707a694329283933c17993350ab432aa6` |
| Public wallet base source | `erablockchains/apps` commit `9595db6bf0610a0dcacf8b7306ea200527caac9c` |

[Source provenance](https://github.com/erablockchains/era-blockchain/blob/edb10d7c2916283242356d172301091b94c08401/docs/PROVENANCE.md) binds the retained build to the observed Wasm. Runtime source-tree equality is verified, not a new independent bit-for-bit build. The older `v14.0.0-rc.1` source prerelease predates spec16; do not substitute its artifact identities.

## Endpoints and access

| Interface | Address | Observation |
| --- | --- | --- |
| HTTPS JSON-RPC | `https://eraprojects.org` | POST returned HTTP 200 and the expected genesis |
| WebSocket JSON-RPC | `wss://eraprojects.org` | Genesis/runtime/metadata/storage/finality queries passed |
| Explorer entry | `https://www.eraprojects.io/en/explorer/` | Links to the generic Polkadot.js interface; no independently indexed transaction explorer is claimed |
| Direct explorer | `https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feraprojects.org#/explorer` | ERA endpoint selected explicitly |

HTTP and WSS use the same public hostname/gateway. The operator gateway configuration names multiple backends, but that does **not** establish a second independently reachable public endpoint or independent fault domain. No working public backup URL is certified. DNS/gateway failure can affect both protocols. Operate your own synchronized node and agree a separate backup route with engineering before launch.

A later same-day backfill attempt for block576743 failed with RPC4003, `State already discarded` for its parent hash. The public endpoint therefore must **not** be represented as an archive service. Latest finalized scanning passed; older-state retention is limited and the exact uniform retention window is not established across gateway backends.

No published contractual request quota, SLA or dedicated exchange capacity is established. The inspected virtual-host configuration has no local rate-limit directive; this does not prove unlimited capacity or absence of upstream/global limits. The snapshot probe used one sequential request per second. Use bounded concurrency, exponential backoff with jitter, request deadlines and backfill; agree sustainable limits and maintenance contacts in writing. Do not load-test production without separate authorization.

Observed method advertisement is retained in the snapshot. Required read methods include `chain_getBlockHash`, `chain_getHeader`, `chain_getBlock`, `chain_getFinalizedHead`, `state_getRuntimeVersion`, `state_getMetadata`, `state_getStorage`, `state_call`, `system_accountNextIndex`, `payment_queryInfo`, `payment_queryFeeDetails`; subscriptions include finalized heads and runtime versions. Submission methods are `author_submitExtrinsic` / `author_submitAndWatchExtrinsic`. Their advertisement is not proof that every unsafe method is authorized or usable. This kit never tests key insertion, administrative RPC or production submission. Keep private node RPC on loopback and safe methods.

```sh
curl --fail https://eraprojects.org -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","id":1,"method":"chain_getBlockHash","params":[0]}'
```

## Addresses, derivation and signatures

Generate secrets in the exchange's approved HSM/custody system. The runtime uses `MultiSignature` (sr25519, ed25519, ECDSA) and `MultiAddress<AccountId32, ()>`. sr25519/ed25519 AccountId32 is the 32-byte public key; Substrate ECDSA AccountId32 is Blake2-256 of the compressed public key, not an Ethereum 20-byte address. Use SS58 encoding with prefix42 and checksum validation. A syntactically valid address does not prove the recipient selected ERA: bind deposit instructions to this genesis and asset.

`lib.mjs` validates canonical SS58 and exact integer units. Reject wrong prefix/checksum/length; never use floating-point token arithmetic. Some clients accept equivalent raw AccountId32 or differently prefixed addresses, but this kit's input policy intentionally requires canonical ERA display addresses. No mandatory memo/tag is present in a Balances transfer; use separate customer deposit addresses or an independently designed attribution system. Never assume an arbitrary remark is a deposit memo.

Record scheme, derivation algorithm/path, account public key and genesis in the custody inventory. Substrate secret URIs distinguish hard `//junction`, soft `/junction` and optional `///password`; scheme support differs. sr25519 supports soft/hard Substrate derivation, ed25519 does not support soft derivation. Do not substitute BIP44/Ethereum derivation or assume identical mnemonic/path text gives identical keys across libraries. Validate the exact exchange/HSM derivation against synthetic vectors before provisioning. The supplied vectors use explicit public seed bytes rather than an undocumented mnemonic conversion. No production mnemonic is required or supplied.

## Balances, fees and signing

At a pinned finalized hash, read `system.account(account)` and retain nonce, free, reserved, frozen and reference counters. `free` is not necessarily spendable: vesting, locks, holds/reserves and fees can constrain withdrawal. Observed existential deposit is **100000000000000 base units = 0.0001 ETKN**. `balances.transferKeepAlive` avoids killing the source account; recipient creation also needs applicable deposit rules. `transferAllowDeath` can reap the source; use only under explicitly approved sweep policy. Reaping/dust effects must reconcile separately from transfers.

The spec16 `transferKeepAlive` call index is `0x0203`, `transferAllowDeath` is `0x0200`; indices are an observation, not permanent API constants. Build calls from approved metadata. Signed version4 extrinsics use these ordered extensions:

`CheckNonZeroSender`, `CheckSpecVersion`, `CheckTxVersion`, `CheckGenesis`, `CheckMortality`, `CheckNonce`, `CheckWeight`, `ChargeTransactionPayment`.

Bind method bytes, nonce, tip, mortality era/checkpoint block hash, genesis, specVersion and transactionVersion into the payload. SCALE payloads over256 bytes are Blake2-256 hashed for signing by the standard Substrate payload implementation; do not hand-code an Ethereum signature convention. The offline example uses an immortal synthetic transaction solely for reproducibility. Operational withdrawals should use a bounded mortal era and record its birth/death/checkpoint.

Use `payment_queryInfo` and `payment_queryFeeDetails` on the exact encoded extrinsic, or `tx.paymentInfo(sender)` for an estimate. A read-only example estimated108157000 base units for a synthetic1ETKN transfer; it is **not a fixed fee promise**. Nonce, tip, encoded length, weight, fee multiplier and execution can change the charge. Capture actual `transactionPayment.TransactionFeePaid` and relevant balance events. Failed dispatched calls can still consume nonce and fees. The runtime routes fee accounting through its configured reward/treasury mechanisms; do not infer fee burn from nominal balances.

Serialize withdrawal allocation per signing account using a durable nonce reservation. Compare finalized account nonce and pool-aware `system_accountNextIndex`; local pending records are authoritative for your own commitments, not an RPC pool cache alone. Persist requestID, destination, amount, nonce, signed bytes/hash, validity interval and approval before broadcasting. A retry of the same bytes has the same hash; never allocate a replacement withdrawal merely because an RPC timed out.

## Deposits, nested calls and history

Scan every canonical **finalized** block from a durable cursor. Obtain its hash/header/body and `System.Events`. Decode blockN with the runtime/metadata active at its parent, since an upgrade can change post-state metadata in blockN. Retain historical metadata by hash and runtime identity. `scan-finalized.mjs` explicitly uses parent metadata and refuses anything outside the approved spec16 metadata hash. Backfill before spec16 requires separately reviewed historical metadata; a missing/pruned state is a halt condition, never an empty event list.

Credit only positive `balances.Transfer` events to a mapped exchange deposit AccountId, associated with a successful finalized extrinsic. Check the actual event recipient/amount, not the outer call name or transaction's claimed purpose. Native ETKN transfer events differ from Assets/NFT events. Record genesis, block number/hash, transaction hash/index, event index, from/to and integer amount. Unique database key: **genesis + block hash + event index**. Multiple transfer events from one transaction are distinct; transaction-hash-only deduplication is insufficient.

Current spec16 metadata contains **no Utility pallet**: `batch`, `batchAll` and `forceBatch` are not available on this deployment. Do not manufacture a batching call index. The event-oriented design is ready for a reviewed future runtime: `batch` may retain earlier successful transfers before `BatchInterrupted`; `batchAll` rollback must leave no creditable transfer; `forceBatch` may emit both failed item and successful transfer events. A successful outer extrinsic alone never proves every nested operation succeeded. Synthetic future-batch fixtures exercise these cases and are not claims of production support. Unexpected transfer/failed-outer combinations are quarantined for reconciliation rather than silently credited or discarded. Privileged/nested calls such as Sudo require their inner result events to be considered for withdrawal status.

Commit deposit records, ledger credits and the completed-block cursor in **one durable database transaction** with a unique event constraint. On reconnect/restart, reread the last committed finalized hash, verify continuity, replay safely and backfill to the current finalized head. Subscribe only as a wake-up hint: subscriptions can drop events during interruptions. Handle empty blocks too. If a recorded finalized hash conflicts, halt deposits/withdrawals and escalate; do not automatically roll back credited finalized history. Require an archive node when the gap exceeds retained state. The supplied pure reducer is a test model, not a durable ledger implementation.

## Withdrawals and reconciliation

Use an external approved signer and durable withdrawal queue. Sequence: validate address/chain and integer amount; check spendable balance/ED/fee; reserve nonce; construct approved metadata-bound mortal call; sign; persist immutable intent+bytes+hash; submit; observe inclusion; inspect dispatch and exact transfer event; verify that block is canonical and finalized; then mark successful. An RPC-returned hash proves **submission only**. `InBlock` proves inclusion only. `ExtrinsicSuccess` is execution success, not finality; `Finalized` does not transform `ExtrinsicFailed` into success.

For a lost subscription, locate the exact transaction in finalized block bodies using the durable hash/nonce and compare the transfer event. Pool absence is not proof of non-execution. `Dropped`, `Invalid`, `Usurped`, `Retracted`, timeout and expired mortality require reconciliation. Decode module errors through the block's historical registry (`registry.findMetaError`), preserve raw errors and distinguish pool validity rejection from included dispatch failure. Never retry with a new nonce until the original intent is conclusively reconciled; bound retries and surface unresolved withdrawals for operators.

Submission shape (engineering reference, not executed by this kit): `api.tx.balances.transferKeepAlive(destination, amount).signAsync(address, { signer, nonce, era, blockHash, genesisHash, runtimeVersion, tip })`, then persist `.toHex()`/`.hash` before `.send(callback)`. The signer must verify every field and chain identity. No production signing/submission command is run or required to review this package.

## Runtime changes and incidents

Monitor finalized runtime version, metadata hash and `:code` hash, plus finality age and genesis. Pause withdrawal construction and quarantine undecoded deposits on any unapproved identity change; retain raw blocks/events, then validate new metadata, signed extensions, calls, fee semantics, storage and fixtures before resuming. Do not assume an unchanged transactionVersion means no integration change. At upgrade boundaries retain both parent/execution and post-state metadata. Preserve nonce/journal state during maintenance.

Engineering contact is info@eraprojects.io. Dedicated24/7 escalation, exchange maintenance notice lead time, SLA and emergency contact tree are **to be agreed**, not promised. For an incident: pause affected processing, preserve hashes/timestamps/errors and last committed cursor, compare your own node with the public endpoint, report sanitized evidence, agree recovery checkpoint, replay idempotently, and reconcile every uncertain withdrawal before reopening. Distinguish DNS/TLS, RPC availability, stale nodes, finality stalls, runtime mismatch and account/nonce issues. Never send custody keys to ERA support.

## Supply, vesting and control risk

Issued supply at the pinned snapshot: **100,000,000 ETKN**. Remaining controlled gross issuance allowance: **900,000,000 ETKN**. Current policy's lifetime gross ceiling: **1,000,000,000 ETKN**; burns do not replenish allowance. This is current runtime policy, not an immutable guarantee against a privileged code change.

Allocation design of the100M baseline:20M founders (8M/5M/3M/2M/2M);20M presale custody;30M airdrop/validator programme (20M reward principal,10M onboarding);20M ecosystem;10M liquidity reserve. Pool labels and custody balances do not prove sales or public circulation. Founder vesting uses block-based schedules over5,256,000 release intervals with a residual-release construction; nominal six-second blocks imply approximately one year, not a guaranteed calendar unlock date. Query actual Vesting schedules and locks at the observation hash for account-specific availability; stale free balances do not replace that calculation.

**Circulating supply is not independently reconciled. Public distribution is not established by this kit. Market capitalization, trading volume, market price, funds raised and exact commercial launch date are not verified and must not be invented.** Proposed presale or exchange prices are proposals unless separately approved. The public “ETKN Presale — Coming Soon” notice is preparation only, with no approved sale terms or public-distribution proof. Native mainnet observations and wallet review dates are not token-sale dates.

Sudo key remains present in the observed state. Root can install new runtime code; Sudo `sudo_as` can dispatch as another signed account. Ordinary FounderCustody withdrawal policy requires all three distinct founders on the same request; this does not constrain the Sudo/Root override path. Root `balances.forceTransfer` remains relevant; treasury/custody restrictions must not be marketed as absolute or irreversible. The current recursive issuance filter rejects force-set-balance, issuance-increase and protected raw-storage changes including nested Sudo wrappers, but code-upgrade authority can change these safeguards. Exchanges must explicitly accept privileged-control and concentrated-validator risks. [Runtime implementation](https://github.com/erablockchains/era-blockchain/blob/edb10d7c2916283242356d172301091b94c08401/runtime/src/lib.rs) and [policy constants](https://github.com/erablockchains/era-blockchain/blob/edb10d7c2916283242356d172301091b94c08401/runtime/src/upgrade13_policy.rs) are the source of these claims.

No independent security audit is established. Internal runtime/Wasm/consensus/wallet and metadata tests are useful evidence with the limits recorded in the README and source validation history. Exchange custody/HSM compatibility, external node admission, archival completeness, load capacity, corporate eligibility and production exchange acceptance remain separate gates.
