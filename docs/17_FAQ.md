# ERA FAQ

[Back to index](../README.md) · [Public FAQ](https://www.eraprojects.io/en/faq/) · [Validator guide](16_BECOME_A_VALIDATOR.md)

ERA's nine-host fleet and spec15 runtime are deployed. Full V14 programme acceptance still requires NFT/allocator commissioning, one legitimate SecurityBudget reward payment, penalty activation and independent qualification. The source prerelease is not a full-production-acceptance claim.

## ERA, accounts and wallets

**What are ERA and ETKN?** ERA is the live blockchain network. ETKN is its native token for balances, fees and staking. `ERA-MAINNET` is the RPC chain-display name, not another token.

**Where are the Windows and Android wallets?** Use the [official downloads](https://www.eraprojects.io/en/downloads/). Windows 1.2.0 build4 is a complete x64 ZIP; Android 1.2.0 build4 is a signed universal prerelease APK. iOS and Linux source targets are not device-accepted releases.

**How should I verify and update?** Compare the downloaded file's SHA-256 to the site's `SHA256SUMS`. Install a compatible Android update over the existing app without uninstalling or clearing data. On Windows, preserve account data and use the full distribution rather than an isolated executable. The owner's Android build4 update retained accounts and settings within its tested scope; Windows owner checks also passed within their scope. Back up recovery material privately and never send it to support.

**What do the receiving QR code and scanner do?** The QR shows the selected account's public receiving address and updates when switching accounts. The scanner handles device permissions, cancellation and invalid input. It must not display or transmit secret material.

**Which network address should the wallet use?** Client RPC uses `wss://eraprojects.org/`; verify ERA genesis `0x0abc2c3d8db5815541050b73da4d81267ebf14d90dbee8d7258155b667ea112e` and runtime `era` specVersion 15. Node peer connections are separate from wallet WSS.

## Fees, staking and rewards

**Are transactions free?** Transactions may charge native ETKN fees. Review the exact call, recipient, amount, fee and finalized status before signing. An uncertain submission must be reconciled before any retry.

**Can I stake or nominate?** The deployed runtime has staking and nomination capabilities. Nominated stake does not satisfy a validator's own 10,000 ETKN self-bond. Review current chain state, eligibility, risk and fees; rewards are not guaranteed.

**How do I apply to validate?** Follow the [reviewed seven-step route](16_BECOME_A_VALIDATOR.md) and email `info@eraprojects.io` before buying stake. External admission needs independent qualification and election. Bonding does not guarantee selection.

**How do reward inspection and claims work?** The wallet can inspect finalized SecurityBudget eligibility read-only. An eligible display is not a completed payment. The first legitimate production payment remains unverified. Any claim needs fresh finalized inputs, fee review and explicit signing.

## Features, source and support

**Why might an NFT collection be absent?** NFT primitives and the dedicated metadata service are deployed. Allocator initialization and production NFT mint, sale and swap commissioning remain required V14 work. A missing production collection before commissioning is expected, not proof of a broken reader.

**Are AMM and AI prediction tokenization active?** No. Both remain inactive and deferred. Additional private/sentry metadata storage is outside V14; the public dedicated ERA Metadata Service is the current route.

**Where are the source and documentation?** Canonical repositories are [`erablockchains/era-blockchain`](https://github.com/erablockchains/era-blockchain), [`erablockchains/era-docs`](https://github.com/erablockchains/era-docs) and [`erablockchains/apps`](https://github.com/erablockchains/apps). The blockchain `v14.0.0-rc.1` source release is a prerelease, not full V14 programme acceptance.

**How do I contact support or report a security problem?** Use the [official support page](https://www.eraprojects.io/en/support/) or `support@eraprojects.io`. Report vulnerabilities privately through the repository's [security policy](../SECURITY.md) or request a secure contact route. Never send passwords, recovery phrases, private keys or server credentials.

The public FAQ is available in all nine supported languages; the operational status and cautions apply in every locale.
