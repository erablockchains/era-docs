# ERA V14 release and commissioning status

[Back to index](../README.md)

## Deployed and accepted

- The authenticated V14 node release is accepted on the nine-host fleet.
- Runtime `era` specVersion 15, transactionVersion 1 finalized once at block 118480.
- Compressed runtime Wasm SHA-256 is `122af167022227c46b2b74d99f5d3a73f41f8d65bb4a8a1de7b88b6e986de2af`.
- Runtime metadata SHA-256 is `c188b00f3589677fe7ecfa833d92d884858ad642a6d231d52696298edbe91d40`.
- Restrictive AI onboarding configuration is finalized; AI remains inactive.
- The reviewed eraprojects.io R6 website deployment is closed.
- Windows wallet owner checks passed. Android update/data preservation, chain connectivity, QR and scanner checks passed on build3.

## Implemented but not commissioned

The runtime and clients include native Assets, NFT primitives, the V14 allocator, SecurityBudget reward claims and the approved penalty policy surface. The finalized chain history checked during preparation did not show allocator initialization, production NFT commissioning, a SecurityBudget claim or penalty activation. Those production actions remain required in their recorded order and need fresh history, state, fee and signer review at action time.

The dedicated ERA Metadata Service serves the four approved NFT metadata objects and has passed coordinator HTTPS, certificate, exact-object, rejection and resolver checks. Its recorded renewal/persistence phase and independent qualification remain open.

## Deferred or excluded

- AMM is inactive and deferred.
- AI predictive tokenization and model-service commissioning are inactive and deferred.
- Sentry/private metadata storage is outside V14.
- Public source publication and listings remain separately gated.

## Remaining acceptance gates

1. Owner retest of the Android build4 reward inspection.
2. Metadata renewal/persistence procedure.
3. NFT/allocator production commissioning and acceptance.
4. One legitimate SecurityBudget reward payment, including finalized inner result and post-state.
5. Approved penalty activation and post-state.
6. Defined independent qualification.
7. Final owner acceptance and separate GitHub publication approval.

No public claim should describe the V14 programme as fully accepted until these gates close.
