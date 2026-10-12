# ERA V14 release and commissioning status

[Back to index](../README.md)

## Deployed and accepted

- The authenticated V14 node release is accepted on the nine-host fleet.
- The original spec15 upgrade finalized at block 118480. The qualified spec16 creation-control successor finalized at block 334621; its deployed compressed Wasm SHA-256 is `bc0085ce268f447760403a3049c9e9e64b0150bdd79c0ee20490f6fab36b2b85`. The nine-host supervisor repair and protected-state checks then passed.
- Restrictive AI onboarding configuration is finalized; AI remains inactive.
- The original-design multilingual website, build4 wallet downloads, validator guide and FAQ deployment are closed. A post-NFT status correction is being prepared separately.
- Windows wallet owner checks passed. Android account preservation, chain connectivity, QR and scanner checks passed; owner-reported build4 read-only reward inspection also passed. The Play-delivered build4 later installed and launched, but an in-place update from the website APK was not proven because the website app was uninstalled first. No reward claim occurred.
- Metadata Phase 5 persistence completed with the approved local check and renewal schedules, unchanged Kubo/gateway PIDs, exact four-object HTTPS and non-destructive recovery checks.
- The allocator was initialized at finalized block 335245 with separately proven asset and collection cursors. Founder custody funding, collection 1 creation, three mints and four metadata writes finalized. F2 bought item 1 from F1 for 1 ETKN at block 361351, then claimed the approved item-3-for-item-2 swap before expiry at block 361410, settling 0.1 ETKN from F1 to F2. Final owners are item 1 F2, item 2 F1 and item 3 F2. Exact four-object public metadata retrieval passed; the owner reported matching read-only native-wallet display. These are coordinator and owner checks, not independent qualification.

## Implemented with remaining production gates

The runtime and clients include native Assets, commissioned NFT/allocator workflows, SecurityBudget reward claims and the approved penalty policy surface. The NFT commissioning transactions and post-state above are finalized. One legitimate SecurityBudget reward payment and approved penalty activation remain unverified; they need fresh history, state, fee and signer review at action time.

The dedicated ERA Metadata Service serves the four approved NFT metadata objects and has passed coordinator HTTPS, certificate, exact-object, rejection and resolver checks. Its recorded renewal/persistence phase is complete. Independent qualification remains open; the single-host service is not automatic failover.

## Deferred or excluded

- AMM is inactive and deferred.
- AI predictive tokenization and model-service commissioning are inactive and deferred.
- Sentry/private metadata storage is outside V14.
- The authenticated blockchain source was published as `v14.0.0-rc.1`, explicitly a prerelease. It does not close production commissioning or independent qualification.

## Remaining acceptance gates

1. One legitimate SecurityBudget reward payment, including finalized events and post-state.
2. Approved penalty activation and post-state.
3. Independently controlled qualification of the defined network, metadata and application evidence.
4. Final owner acceptance of the V14 production programme. Public-source integration and any release/tag change follow protected repository review.

No public claim should describe the V14 programme as fully accepted until these gates close.
