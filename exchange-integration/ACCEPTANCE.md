# Exchange acceptance checklist

Record tester, UTC time, software/source/metadata versions, synthetic chain genesis, request/transaction/event IDs, expected and actual results for each case. Perform signed tests on a disposable network with synthetic accounts; production checks in this delivery were read-only. Exchange production testing requires a separate controlled plan and authorization.

| Gate | Required result | Evidence in kit / remaining acceptance |
| --- | --- | --- |
| Identity | Reject wrong genesis, runtime, metadata, decimal/address format | Live identity snapshot and pinned metadata; wrong metadata/address tests pass |
| Deposit address | Recover same AccountId using approved custody derivation; reject bad checksum/wrong chain encoding | Synthetic vectors validate3 schemes; actual exchange HSM derivation still required |
| Integer amounts | Preserve18 decimals without float conversion/rounding | Exact unit and precision rejection test passes |
| Direct deposit | One finalized successful transfer credits exact mapped recipient once | Event fixture test passes; isolated node-to-exchange ledger test still required |
| Multiple events | Distinct event indices in one transaction remain distinct | Synthetic future-batch fixture passes |
| Failed call | No credit for a failed transfer; reconcile charged fees/nonce | Failed-call fixture passes; exact failed balance/ED cases on isolated runtime still required |
| Batching | Current spec16 rejects unavailable Utility calls; future upgrade handles partial/atomic/force batches correctly | No Utility pallet verified; future semantic fixtures pass, not live support |
| Duplicate/restart | Replayed block creates no duplicate credit; cursor and credits commit atomically | Reducer replay test passes; actual database crash/commit fault tests required |
| Backfill | Consecutive finalized hashes/events recovered after outage; missing archive data halts | Scanner supports one bounded block; exchange archive/cursor pipeline must be exercised |
| RPC interruption | No lost credit/duplicate withdrawal after timeout, disconnect or stale node | Model test passes; live isolated interruption/reconnect and alternate node required |
| Withdrawals | Correct chain/address/amount/nonce/fee/mortality; signature verified by exchange signer | Offline vectors pass; real synthetic isolated-node dispatch and HSM test required |
| Submission vs finality | Submitted/included/failed/finalized distinguished; matching final transfer required | Withdrawal-state tests pass |
| Uncertain submission | Persist hash/bytes; reconcile original before replacement | State model tests; durable queue fault injection required |
| Fee/ED boundaries | Below-ED recipient, keep-alive source, frozen funds, insufficient fee and successful transfer reconcile | ED/fee read observed; actual isolated runtime boundary dispatch tests required |
| Runtime upgrade | Pause on unknown version/hash; decode upgrade block using parent metadata; replay after reviewed update | Metadata guard test passes; coordinated isolated upgrade rehearsal required |
| Privileged controls | Engineering/risk review accepts current Sudo/Root and validator concentration | Public disclosure; exchange written acceptance pending |
| Full node/archive | Pinned build, correct genesis, peer admission, finality, disk growth, restart/restore | Retained build evidence only; fresh independent onboarding unverified |
| Security/operations | Custody controls, two-person withdrawal approval, incident contacts, maintenance notice and audit gap accepted | No independent audit; dedicated SLA/contact tree pending agreement |
| Reconciliation | Sum credits to exact finalized events; debit amount + actual fee; no ambiguous withdrawal | Exchange ledger acceptance pending |

Internal test results do not constitute independent audit, native-support approval, commercial acceptance or permission to enable customer deposits. Engineering acceptance should identify supported runtime versions, address/signing schemes, own-node/archive architecture, tested failure cases, operating limits, maintenance obligations and sign-off owners in writing.

Reference semantics: [Polkadot.js API](https://polkadot.js.org/docs/api/), [transaction API](https://polkadot.js.org/docs/api/start/api.tx/), [Polkadot batch behavior](https://wiki.polkadot.com/learn/learn-transactions/). ERA's pinned source and metadata govern chain-specific behavior; generic Polkadot support at an exchange does not establish ERA compatibility.
