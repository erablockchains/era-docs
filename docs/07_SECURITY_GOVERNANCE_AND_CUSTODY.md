# Security, governance, and custody

> **Historical V13 baseline (28 August 2026):** Retained for audit context. Current ERA V14 status and canonical repository identities are in [the repository index](../README.md) and documents 11–13. Historical repository links and LIVE_V13 labels below do not describe the current production chain.


[Back to index](../README.md)

## Review posture

This page records source-visible trust surfaces and evidence gaps. It does not
identify private key holders, custody accounts, private infrastructure, or
internal operating procedures. It does not make a certification or
decentralization claim.

## Sudo and privileged control

PRIVATE_REVIEW_SOURCE configures the Sudo pallet in the deployed V13 runtime
publication. The source's issuance call filter recursively examines Sudo-wrapped
calls and rejects call paths capable of bypassing the shared ETKN issuance
allowance. Raw storage protections also cover native account, Balances, and
issuance-cap state.

The bounded live snapshot did not query the Sudo key or privileged-call
history. This review therefore says only that the privileged dispatch surface
is configured in the deployed-source publication; it does not name a holder or
assert how current custody is organized.

PLANNED_FUTURE direction is to move privileged responsibilities toward
foundation/governance controls backed by documented authorization, recovery,
separation-of-duty, and public verification. The exact handover mechanism,
participants, thresholds, and acceptance evidence are OWNER_DECISION_REQUIRED.

## Multisig and proxy distinction

The V13 source constructs generic Multisig and Proxy pallets. Proxy types and
call filters are code-level capabilities. They do not demonstrate that:

- current treasury, Sudo, validator, or allocation custody uses them;
- any particular identities or thresholds have been approved;
- an operational recovery procedure has been tested;
- a foundation handover has occurred.

Custody disclosure must cite public, account-level evidence approved for
publication without mapping people to private accounts. Until then,
Multisig/Proxy should be described as source capability only.

## Governance boundary

The active V13 runtime construction does not configure an on-chain
collective/democracy governance system. Sudo is the source-visible privileged
dispatch mechanism. Generic voting-like application logic or validator
elections should not be confused with protocol governance.

Treasury routing in reviewed source does not by itself prove treasury spending
controls, signatory separation, budgeting, reporting, or legal ownership.

APPROVED_V14_DESIGN_NOT_LIVE selects the keyless **ERA_TREA** account as an
accumulation-only protocol treasury. Its spending origin is EnsureNever and V14
has no treasury withdrawal dispatchable. This deliberately prevents treasury
outflow in V14; it does not create live governance or operational custody.
A later governance-enabled replacement is PLANNED_FUTURE and requires a
separately reviewed runtime upgrade, authorization, recovery, reporting, and
public verification.

## Monetary safety surfaces

IssuanceCap provides a persistent burn-independent RemainingAllowance and
filters uncontrolled native issuance paths in the reviewed source. Security
review should still cover:

- every mint/imbalance and migration path;
- atomic behavior at low or exhausted allowance;
- Sudo, utility/batch, proxy, and nested-call filtering;
- storage migration ordering and replay/idempotence;
- interaction between new issuance, reserve transfers, fees, tips, and burns;
- monitoring and reconciliation of total issuance plus consumed allowance.

The source-visible RewardReserve activation and older fee/tip percentages must
be reconciled with the APPROVED_V14_DESIGN_NOT_LIVE 90/10 policy and 50/50
missing/unreceivable-author tip fallback. The approved 10% target staking APR,
6 million ETKN gross annual issuance ceiling, and 20% maximum validator
commission require exact implementation, benchmark, and migration evidence.
No current return is inferred from activation flags or approved targets.

## Application and wallet boundaries

AiPredictions, EraWorlds, Assets, and NFTs source surfaces require their own
economic, origin, storage-migration, and application security review. EraWorlds
privileged activation origins are fail-closed in the reviewed source, so source
presence does not establish a live ERA World Engine integration.

The wallet source contains endpoint/runtime guards, local signing paths,
secure-storage dependencies, and platform code. Safe distribution additionally
requires controlled dependency resolution, reproducible provenance, platform
hardening, device testing, and release signing. There is no approved public
wallet release at this gate.

## Licensing and disclosure

OWNER_DECISION_REQUIRED:

- era-blockchain has an Unlicense root text while its Cargo workspace declares
  Apache-2.0;
- era-wallet has third-party notices but no top-level first-party LICENSE;
- era-docs cannot select or copy a licence on the owner's behalf.

Resolve licensing before a public-source transition. Until then, access to a
private repository should not be interpreted as a public licence grant.

Use [SECURITY.md](../SECURITY.md) for responsible private reporting. Never
submit keys, custody identities, private hosts, account-owner mappings, or
production data.
