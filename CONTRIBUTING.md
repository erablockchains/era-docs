# Contributing during private review

Status: PRIVATE_REVIEW_SOURCE

This repository currently accepts corrections only through the private review
workflow available to authorized collaborators. It does not promise that
public contributions are already accepted.

## Before proposing a correction

1. Start from the exact identities listed in [README.md](README.md).
2. Classify every changed claim with one of the five status labels:
   LIVE_V13, PRIVATE_REVIEW_SOURCE, APPROVED_V14_DESIGN_NOT_LIVE,
   PLANNED_FUTURE, or OWNER_DECISION_REQUIRED.
3. Add or update the supporting row in
   [the fact ledger](docs/10_FACT_LEDGER.md).
4. Distinguish an anchored network observation from source evidence and from
   owner-approved policy.
5. Keep wording safe for later public review.

## Evidence rules

For a source claim, cite the repository, exact commit, and path. For a live
claim, record a finalized block number and hash and use read-only requests.
For an approved design claim, state that it is not live. If evidence is
ambiguous or licensing is unsettled, use OWNER_DECISION_REQUIRED.

Do not:

- copy source repositories or substantial code into this repository;
- add compiled wallet, runtime, or node artifacts;
- include credentials, private infrastructure, custody identities, personal
  data, internal evidence locations, or local paths;
- turn roadmap direction into a date or delivery promise;
- claim a current staking return, public wallet release, completed independent
  assessment, decentralized governance, or operational multisig custody without
  exact evidence;
- add a LICENSE file until the project owner resolves the recorded licence
  inconsistency.

## Review checklist

- Check internal links and heading anchors.
- Reconcile every monetary table and percentage split.
- Confirm exact commit, tree, Wasm, entrypoint, and manifest identifiers.
- Run offline formatting, UTF-8, trailing-whitespace, sensitive-data, and secret
  checks against the exact proposed files.
- Review the complete diff and deterministic file manifest.
- Require a fresh destination check before any authorized publication.

Keep changes scoped to documentation. Blockchain, wallet, website, releases,
repository visibility, and chain state are outside this repository's
contribution workflow.
