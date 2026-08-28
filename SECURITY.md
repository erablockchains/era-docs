# Security policy for the private review phase

Status: PRIVATE_REVIEW_SOURCE

## Scope

Security reports may cover this documentation and source-grounded discrepancies
it identifies in the private ERA blockchain or ERA Wallet repositories. This
file does not create a bounty, response deadline, certification, or public
support commitment.

The review baseline covers:

- factual or provenance errors that could cause a reviewer to assess the wrong
  code or network;
- accidental disclosure of secrets, private infrastructure, custody identities,
  personal data, or internal evidence locations;
- security-relevant inconsistencies between documentation and the exact source
  identities in [README.md](README.md);
- privately reproducible vulnerabilities in the reviewed source.

Operational access requests, token recovery requests, investment questions,
and reports about systems outside the named repositories are out of scope.

## Responsible disclosure

If private vulnerability reporting is enabled for this repository, use
[GitHub's private advisory form](https://github.com/erablockchains/era-docs/security/advisories/new).
If that feature is unavailable, contact an existing repository owner through
an already established private channel and ask for a secure reporting path
without including exploit details in the initial message.

Do not open a public issue containing an unpatched vulnerability or sensitive
operational information. Do not test by sending a transaction, accessing an
account, probing private infrastructure, degrading a service, or attempting to
obtain credentials.

Include only the minimum reproducible material:

- affected repository, exact commit, and file or component;
- expected and observed behavior;
- safe local reproduction steps;
- likely impact and any known preconditions;
- whether the report concerns LIVE_V13, PRIVATE_REVIEW_SOURCE, or planned work.

## Data that must never be submitted

Never submit seed phrases, private/session/sudo keys, passwords, tokens,
credentials, environment files, node databases, backups, personal
account-to-owner mappings, private multisig identities, private hostnames or
addresses, SSH details, local filesystem paths, browser/session data, or
screenshots containing accounts or private UI state.

Redact personal data and use synthetic accounts in reproductions. Do not attach
wallet binaries, runtime Wasm, node binaries, build caches, or archives to this
documentation repository.

## Current limitations

- LIVE_V13 has a zero staking-era payout. Security reports must not assume a
  nonzero staking return.
- PRIVATE_REVIEW_SOURCE includes Sudo and generic Multisig/Proxy pallets, but
  this review does not identify custodians or assert that operational custody
  uses those generic pallets.
- APPROVED_V14_DESIGN_NOT_LIVE economic policy has not completed its
  implementation, migration, benchmark, testnet, and later-governance evidence
  gates.
- Independent security assessment and final project licensing remain open
  review items.
