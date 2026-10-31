# V15 roadmap: DeFi, dApps and interoperability

[Back to index](../README.md)

**Status: planned; not evidence of deployed V15 functionality.**
Scope reconciliation: 31 October 2026.

ERA's direction includes DeFi and dApp readiness. The V14 programme included
AMM/liquidity/DeFi/dApps and smart-contract/ERC-20 evaluation; AMM commissioning
was deferred to V15. That deferral does not cancel the DeFi or dApp objective.
The dedicated ERC-20 plan is one interoperability workstream, not a replacement
for the broader application-platform work.

This page consolidates that direction and defines proposed delivery milestones.
It does not approve a production activation, sale, liquidity allocation, spending,
delivery date or specific execution environment.

## Baseline and boundaries

The [V14 release status](11_V14_RELEASE_STATUS.md) records native Assets and NFT
capabilities, while AMM remains inactive and deferred. These primitives alone do
not establish a usable DEX, general-purpose smart-contract platform or supported
third-party dApp ecosystem. Retained V14 acceptance and independent qualification
gates remain applicable; isolated V15 development can proceed separately.

A dApp can use native ERA runtime calls without an EVM. General-purpose contract
deployment requires a separately selected and qualified execution environment.
An ERC-20 representation on another chain does not give ERA its own EVM, AMM or
native DeFi service.

## Workstreams

The following IDs provide continuity for the consolidated backlog. Existing
private tasks should be mapped to them, not duplicated or silently discarded.

| ID | Scope | Completion evidence |
| --- | --- | --- |
| V15-DEFI-01 | Carry forward AMM commissioning; define native/asset pairs, pools, liquidity provision/removal, swaps, fees, slippage and minimum-output protections | Reviewed specification, isolated implementation inventory, economic/invariant tests, end-to-end testnet demonstrations and security findings resolved before funded activation |
| V15-DAPP-01 | Supported developer path for native ERA applications: versioned SDK/examples, metadata compatibility, wallet connection/signing, RPC/indexing access and development/test networks | A developer outside the implementation team can build and run a documented sample dApp, display finalized state and submit a controlled test transaction using test accounts |
| V15-EXEC-01 | Evaluate the execution route for applications that need deployable contracts, including supported Wasm and Ethereum-compatible options against ERA's exact SDK/runtime | Architecture decision documenting compatibility, account mapping, signing, fees/gas, resource limits, RPC, upgrades and maintenance; demonstrate deployment and invocation on an isolated network before any production claim |
| V15-INTEROP-01 | Preserve the existing ERC-20 and external-wallet/exchange access plan | Evidence and accounting requirements in [the interoperability scope](18_V15_ERC20_INTEROPERABILITY.md); no duplicate token supply or unsupported bridge claim |
| V15-APP-SEC-01 | Application-platform security and operations: RPC resilience, monitoring, upgrade/recovery procedures, privileges, published security reporting and independent review | Tested failure/recovery behavior, reviewed administrative controls, reproducible release evidence and an independently scoped security assessment before funded DeFi/bridge use |

A first-party pool/swap interface and an independently implemented sample dApp
are proposed reference deliverables. Hosting, maintenance and signing integrations
must be assigned before they are described as supported. Additional financial
products, such as lending or stablecoins, are not approved by this roadmap.

## Delivery sequence

1. **Reconcile and specify.** Inventory existing code, tests and deferred work.
   Record what is implemented, what is inactive and what is missing. Map private
   backlog items and identify dependencies without changing production.
2. **Qualify developer access.** Provide a reproducible local development network
   and a supported test-network route, SDK examples, metadata bindings and
   wallet-signing instructions. Define RPC/indexing availability and limits.
3. **Select execution and interoperability architectures.** Complete the decision
   records; preserve the distinction between native calls, deployable contracts
   and an external wrapped token.
4. **Demonstrate AMM and dApps on test networks.** Exercise pool creation,
   liquidity addition/removal, quoting/swapping, balances/events and failed
   transactions. Test rounding, fee accounting, slippage, replay and interruption
   behavior. Use valueless test assets and test accounts.
5. **Qualify for production.** Complete economic review, runtime benchmarks,
   dependency/security review, independent assessment and remediation, wallet
   compatibility, operational recovery and the applicable service-role review.
6. **Activate only after a separate recorded decision.** Define actual liquidity
   sources, custody/signers, pool parameters, supported markets and rollout
   limits. Do not move treasury/presale assets or enable production pools merely
   because the roadmap or testnet exists.

Milestones require named implementation/operations ownership and estimates after
the inventory. No dates, returns, token prices or exchange acceptance are promised.

## Publication and handover continuity

The V15 backlog, whitepaper, website roadmap and maintained translations should
carry DeFi/dApp readiness explicitly and link to this page. Preserve
V15-INTEROP-01 in the [existing interoperability plan](18_V15_ERC20_INTEROPERABILITY.md).

Private handovers should record each item, latest source/evidence, dependencies,
next action and implementation owner. Synchronization to a website, whitepaper,
private backlog or RPC1 must be verified separately; adding this document does
not establish that any of those surfaces has been updated.

Suggested public wording:

> Planned for V15: DeFi and dApp readiness, including AMM/liquidity commissioning,
> developer SDK and wallet integrations, application execution evaluation and
> ERC-20 interoperability. These capabilities remain subject to architecture
> decisions, test-network validation, security qualification and separately
> approved production activation.
