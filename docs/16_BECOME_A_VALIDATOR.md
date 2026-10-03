# Become an ERA validator

[Back to index](../README.md) · [Public validator guide](https://www.eraprojects.io/en/become-a-validator/) · [FAQ](17_FAQ.md)

ERA currently has four founder-controlled validators. External admission requires a reviewed independent qualification route. A technical bond or declaration of intent does **not** guarantee selection, activation, rewards or a place in the controlled set. Contact [info@eraprojects.io](mailto:info@eraprojects.io?subject=ERA%20validator%20interest) before buying stake or submitting a validator transaction. There is no application fee, automatic admission, guaranteed return or approved airdrop in this process.

## Seven-step process

1. **Express interest.** Email `info@eraprojects.io` through the existing ERA contact route and request the current reviewed intake and qualification procedure.
2. **Describe your operation.** Provide operator experience, contact details, proposed hosting city/region and provider, infrastructure, maintenance, monitoring and incident arrangements. Never send credentials or account secrets.
3. **Review requirements before staking.** Discuss the deployed spec15 runtime's 10,000 ETKN minimum validator **self-bond**, 20% maximum commission, fees, election rules and independent qualification with ERA before acquiring stake or signing. The runtime source binds `SecurityBudgetMinimumValidatorBond` and `SecurityBudgetMaxValidatorCommission`; [source provenance](06_SOURCE_PROVENANCE_AND_REPRODUCIBILITY.md) binds this source to the deployed spec15 Wasm.
4. **Build a separate non-validator node.** Use the [canonical blockchain source](https://github.com/erablockchains/era-blockchain), pinned toolchain and lockfile, reviewed [build instructions](https://github.com/erablockchains/era-blockchain/blob/main/docs/BUILD.md) and [operator guide](https://github.com/erablockchains/era-blockchain/blob/main/docs/OPERATORS.md). Verify source and build checksums, unchanged raw chain spec and genesis. Synchronize with a separate database and no authority keys.
5. **Demonstrate reliable operation.** Verify genesis `0x0abc2c3d8db5815541050b73da4d81267ebf14d90dbee8d7258155b667ea112e`, peer connectivity, current runtime and an advancing finalized head. Retain uptime, resource and incident evidence. Public sentry reachability from a new independent host remains to be qualified.
6. **Create independent keys and declare intent only after review.** Generate session keys locally under your custody. Follow the reviewed self-bond, session-key registration and validator-intent procedure with fresh state and fee checks. Never transmit private keys, recovery phrases or server credentials. Do not copy a founder keystore or production validator database.
7. **Verify election and monitor.** Check the active validator set, session transition and finality before claiming activation. Monitor peers, disk space, keys, rewards and incidents continuously; report incidents promptly to ERA.

## Roles and connections

| Role | Meaning |
| --- | --- |
| Validator | An elected authority with independent session keys that participates in block production and finality. |
| Full node | A synchronized node without validator intent or authority keys; the recommended first milestone. |
| RPC node | A node serving client queries under reviewed exposure limits. |
| Nominator | An account backing validators in staking elections. Nominated backing cannot replace the validator's own 10,000 ETKN self-bond. |

Wallets connect to `wss://eraprojects.org/` for client RPC. Nodes use reviewed peer/bootnode addresses over the peer protocol. The wallet WSS endpoint is **not** a peer bootnode; keep local administrative RPC private.

**Technical checks:** authenticate the canonical source/tag, build checksum, raw chain spec and genesis, peers and advancing finality. The published operator command is a reviewed candidate, not proof that independent onboarding has succeeded end to end.

## Hardware & Availability

These are **starting recommendations for the current ERA workload**, not admission rules or proven universal minima. The four accepted validator result bundles from 24 September 2026 reported 14-core 13th Gen Intel i5-13500 hosts with 64,081 MB memory. Retained service-switch logs recorded 2.9–4.7 GB memory peaks. They showed approximately 377–384 GiB filesystem space remaining after a net decline of 1.8–3.0 GiB over about eight days. The free-space change includes all host writes and deletions; it does **not** measure chain-database growth or forecast archive capacity.

| Role | Current-workload planning guidance |
| --- | --- |
| Validator | Start with a dedicated modern x86-64 machine in the current hosts' performance class, roughly 12–16 capable CPU cores, 64 GiB RAM and at least 1 TiB reliable NVMe SSD. Keep at least 250 GiB free as a planning buffer and resize using measured database and filesystem growth. These values are deliberately conservative, not a universal minimum. |
| Separate non-validator full node | Provisionally allow a modern 8-core CPU, 32 GiB RAM and at least 1 TiB SSD. It validates and retains current chain state without authority keys. Independent complete-sync and peer-connectivity qualification is still needed; this is not a proven lower bound. |
| Archive node | Historical-state retention and intensive indexing need substantially more storage and sustained I/O. No authenticated ERA archive-node growth series establishes a numerical minimum. Size multi-terabyte SSD capacity only after a measured retention test; a pruned full node is not an archive substitute. |

Use reliable low-latency networking and reviewed peer/sentry routes, redundant connectivity where practical, and UPS or equivalent power continuity. Monitor CPU, RAM, SSD free bytes and inodes, peers, synchronization lag, finalized head, process restarts and session-key status. Plan upgrades and backups with recovery tests, keep encrypted offline key backups, and report incidents promptly. Wallet WSS is for clients, not node peer connections; do not expose administrative RPC.

**Proposed service target for owner review:** 99.9% monthly validator-service availability, equivalent to no more than 0.1% unavailable time or approximately 43.2 minutes in a 30-day month. Measure UTC one-minute intervals from independent monitoring. Count an interval unavailable when the validator/consensus process is down, reviewed peer connectivity is lost, or its finalized head fails to follow an advancing reference chain for more than two minutes. Planned maintenance and connectivity loss count as downtime; record chain-wide incidents separately. This is a proposed operator target, **not** an existing admission rule, on-chain slashing threshold or ERA uptime guarantee.

## Rewards, commission and penalties

The deployed spec15 runtime enforces a 10,000 ETKN minimum validator self-bond and caps commission at 20%. Neither setting guarantees election or income. Performance and eligibility feed the custom SecurityBudget reward route. Standard staking-era payout is zero in this runtime. Read-only eligibility has been verified, but the first legitimate production reward payment remains unverified; a displayed estimate does not establish a payable claim. The approved penalty policy is implemented but is not yet active in production; activation follows the recorded reward-payment gate. Review current policy and incident procedures before candidacy.

## Copyable expression-of-interest template

Copy this into your own email to [info@eraprojects.io](mailto:info@eraprojects.io?subject=ERA%20validator%20interest). Omit private keys, recovery phrases, passwords and server credentials.

```text
Subject: ERA validator interest
Operator / organization:
Contact name and reply address:
Validator and node operating experience:
Proposed hosting city/region and provider:
CPU, RAM, SSD capacity and network plan:
Monitoring, maintenance and incident coverage:
Key custody, backup and recovery approach (no secrets):
Proposed timeline and questions:
```

The website offers this guide in all nine supported languages. The English text here and the published localized pages describe the same admission and commissioning boundaries.
