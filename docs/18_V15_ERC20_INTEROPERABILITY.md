# V15 ERC-20 interoperability and external-wallet access

[Back to index](../README.md)

**Status: planned V15 workstream.** Owner direction recorded on 17 October 2026.
Architecture selection, implementation, security qualification and production
activation remain future work. This planning entry is not evidence of a live
ERC-20 token, Ethereum-compatible endpoint or cross-chain bridge.

## Objectives

- Give users a supported route to hold and transfer an ETKN representation through
  compatible third-party wallets, reducing dependence on the ERA Wallet application.
- Assess exchange integration and access to compatible external applications.
- Preserve native ETKN, monetary policy, allocations and existing holder rights.
- Explain separately which native ERA features remain available through ERA-aware
  clients. External token support does not automatically provide native staking,
  reward claims, NFTs or other ERA runtime calls.

## Architecture decision

Evaluate the following distinct routes before choosing an implementation:

| Route | Evaluation scope |
| --- | --- |
| External wrapped ETKN | A one-to-one ERC-20 representation on one selected existing network, with controlled native backing, verified deposits and a working redemption route |
| ERA-local Ethereum compatibility | Compare pallet-revive and Frontier/EVM against ERA's exact supported SDK/runtime, including account mapping, signing, transactions, RPC, fees and wallet behavior |
| Wasm/PSP22 alternative | Compare where useful for the application architecture, while identifying PSP22 accurately as a separate standard |

An ERA-local wrapper or Ethereum-style RPC does not itself connect ERA to another
network. An exchange still needs to support the actual network used for deposits
and withdrawals. A destination network, bridge operator and execution environment
have not been selected by this planning decision.

## Required evidence

- Document the selected architecture, supported networks, trust assumptions,
  operational ownership, costs and implementation milestones.
- For a wrapped route, ensure every outstanding wrapped token is backed by
  unavailable native ETKN. Prove deposit finality, duplicate/replay protection,
  mint/burn accounting, redemption, interruption recovery and upgrade behavior.
- Reconcile native issuance, locked backing and external circulation without
  double-counting or independently duplicating ETKN supply.
- Review native custody and privileged runtime powers together with external
  minting, administration, pause and upgrade powers.
- Demonstrate transfers, balances, approvals, events, decimals and signing through
  independently implemented third-party wallet clients on the chosen network.
- Complete isolated integration tests and independent security review before
  public bridge use or funded production rollout.
- Verify actual exchange/network acceptance and publish clear address, network,
  fee and redemption instructions before describing access as available.

## Documentation and session continuity

Track this workstream as **V15-INTEROP-01**. Reuse this identifier in the V15 backlog
and handovers rather than creating duplicate tasks.

| Surface | Required treatment |
| --- | --- |
| Official documentation | This page is the interoperability scope reference, linked from the index, roadmap and FAQ |
| Whitepaper and website roadmap | Include the planned scope and link to this reference; update every maintained language/version consistently |
| V15 backlog | Record architecture, wallet integration, supply accounting, security and operations tasks with their evidence state |
| Coordination handovers | Carry the item ID, canonical link, last completed action, open dependencies and exact next action into each new session |
| Completion reporting | Record repository commits and verified website/document publication separately from implementation or activation |

Website, whitepaper, backlog and private handover synchronization must be recorded
as complete only after their respective updates have been verified. A chat note or
a documentation commit alone does not establish those updates.

## Public wording

> Planned for V15: ERC-20 interoperability and broader third-party wallet and
> exchange access, including assessment of a fully backed wrapped ETKN
> representation on an external network. Native ETKN remains ERA's native asset.
> The architecture and supported networks are subject to selection, testing and
> independent security review.

Existing V14 release and qualification evidence remains governed by
[the release status](11_V14_RELEASE_STATUS.md) and
[acceptance requirements](13_V14_ACCEPTANCE_AND_QUALIFICATION.md).
