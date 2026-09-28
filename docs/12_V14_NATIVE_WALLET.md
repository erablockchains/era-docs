# ERA Wallet V14 platforms and artifacts

[Back to index](../README.md)

The canonical wallet source is prepared in the `era-wallet/` subtree of [`erablockchains/apps`](https://github.com/erablockchains/apps), whose default branch remains `master`. It is a distinct Flutter application added beside the existing Polkadot.js applications.

## Platforms

| Platform | Source target | Current evidence |
| --- | --- | --- |
| Android | Included | build3 owner checks 1–5 passed; build4 read-only reward inspection owner-reported PASS; no claim |
| Windows | Included | automated build checks and requested owner validation passed |
| iOS | Included | unverified source target; no build, package signing or device claim; not a V14 acceptance gate |
| Linux | Included | unverified source target; no build or package claim; not a V14 acceptance gate |

## Runtime and artifact binding

- ERA genesis: `0x0abc2c3d8db5815541050b73da4d81267ebf14d90dbee8d7258155b667ea112e`
- Runtime: `era` specVersion 15, transactionVersion 1
- Wallet source input commit: `0f4f415966a0225739f8ec9fb66b2fd9b9c15db8`
- Apps integration commit: `6fc0b720e961412198f06a20cee1bdb5bb95a8b5`
- Published Android build3 SHA-256: `d4e1a0bb9e57813508954cc59e994ee4274d629868a7a62353947d9a71bc1cb5`
- Corrected Android build4 SHA-256: `b0bd46a8a02a0eb5bd04f3eb1a09aca403a837b899d49b3e2133d255638e16cc`
- Android package: `com.eraprojects.era_wallet`; build4 versionCode 4
- Android signer-certificate SHA-256: `19292f4dda5e588c389dcc03697e600481a0b20318d1092deaf66eec17c49e14`

Build4 fixes WebSocket readiness and stale-provider replacement after build3 stopped with `Bad state: No element` before showing reward eligibility. It does not change reward calculation or transaction construction. The owner reports that the targeted build4 read-only inspection passed with era 277, the approved validator, page 0, eligible true, points 3320, page count 1, liability 1.825271356245051407 ETKN, claimed false and expired false. No claim occurred. Build4 is not yet the website-published APK.

No wallet acceptance result proves an NFT, reward or penalty transaction. Wallet testing must not import owner keys merely for routine validation.
