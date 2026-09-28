# Network, runtime, and architecture

> **Historical V13 baseline (28 August 2026):** Retained for audit context. Current ERA V14 status and canonical repository identities are in [the repository index](../README.md) and documents 11–13. Historical repository links and LIVE_V13 labels below do not describe the current production chain.


[Back to index](../README.md)

## Evidence boundary

The component descriptions below are PRIVATE_REVIEW_SOURCE findings from
era-blockchain commit
8d4a0eff44c2ee341e0be0dbe4b9f77617ec4ce9, which records the deployed V13
source identity separately. LIVE_V13 identity and monetary values were checked
at finalized block 2,077,518. Components not included in the bounded snapshot
are not promoted here from source presence to observed operational use.

## Consensus and progression

- **BABE** provides slot-based block authoring in the active runtime
  configuration.
- **GRANDPA** provides block finality.
- **Session** rotates the validator/session keys used by consensus.
- **Historical** preserves session identification/exposure information needed
  by staking/offence interfaces.
- **Authorship** identifies the block author and forwards author events to
  Staking, which records era reward points.
- **Staking** provides validator selection, elections, bonding, nominations,
  exposure, eras, and reward-point accounting. Its configured EraPayout is the
  unit implementation; the observed completed-era reward was zero.
- The reviewed runtime target block time is approximately six seconds, with six
  sessions per era.

~~~mermaid
flowchart LR
    V[Selected validators] -->|session keys| S[Session and Historical]
    S -->|eligible authorities| B[BABE block authoring]
    B -->|authored block| A[Authorship]
    A -->|author event| ST[Staking reward points]
    B -->|block stream| G[GRANDPA finality]
    G -->|finalized blocks| C[ERA-MAINNET clients]
~~~

The diagram shows source-configured data flow. It does not establish that the
four observed validator identities are operated by independent parties.

## Runtime composition

The source-proven core includes:

| Area | V13 component | Reviewed role |
|---|---|---|
| Base execution | System, Timestamp | accounts/events/block context and time |
| Value | Balances, Vesting | native balances and vesting schedules |
| Fees | TransactionPayment | fee calculation and imbalance delivery |
| Consensus | BABE, GRANDPA | block authoring and finality |
| Validator lifecycle | Session, Historical, Authorship, Staking | keys, identification, authorship, elections, exposure, points |
| Privileged dispatch | Sudo | source-configured root dispatch surface; custodian identity is outside this review |
| Monetary invariant | IssuanceCap | persistent remaining gross-issuance allowance |
| Separate reserve logic | RewardReserve | activation-gated, transfer-based reward budgeting/claims and fee routing |
| Migration policy | V13 migration and upgrade13_policy | recorded cap/allocation migration policy and checks |
| Application surface | AiPredictions | custom prediction/model runtime functions |
| World registry surface | EraWorlds | source component whose privileged activation origins are fail-closed |

Generic Multisig, Proxy, Assets, and NFTs pallets are also constructed. Their
presence is not evidence of operational custody, a public asset/NFT product, or
application adoption.

~~~mermaid
flowchart TB
    RPC[Public client or wallet] -->|read or signed extrinsic| RT[V13 runtime]
    RT --> SYS[System and Timestamp]
    RT --> BAL[Balances and Vesting]
    RT --> PAY[TransactionPayment]
    RT --> CON[BABE, GRANDPA, Session]
    RT --> STK[Authorship and Staking]
    RT --> CAP[IssuanceCap]
    RT --> RR[RewardReserve]
    RT --> APP[AiPredictions and EraWorlds]
    RT --> PRIV[Sudo and generic Multisig/Proxy]
    CAP -->|bounds controlled gross minting| BAL
    PAY -->|fee imbalances under active V13 policy| RR
    RR -->|transfers existing reserve balances| BAL
    A2[Approved V14 design] -.->|not deployed| CAP
    A2 -.->|replacement routing required| RR
~~~

The dashed arrows identify design work, not live runtime behavior.

## Block, session, and era flow

~~~mermaid
sequenceDiagram
    participant T as Timestamp/transactions
    participant B as BABE author
    participant R as V13 runtime
    participant A as Authorship
    participant S as Session/Staking
    participant G as GRANDPA
    T->>B: candidate block inputs
    B->>R: execute block
    R->>A: note block author
    A->>S: record authored reward points
    R->>S: advance session/era state when due
    B->>G: distribute authored block
    G-->>R: finalize block
    Note over S: EraPayout is zero in LIVE_V13
~~~

## Monetary and reward separation

IssuanceCap tracks a remaining lifetime allowance independently of burns.
RewardReserve is a separate component: reviewed V13 source contains an
activation gate, per-era point/exposure calculations, commission handling, and
transfers from an existing reserve balance. That component is not the same as
Staking.ErasValidatorReward and does not make the latter nonzero.

The bounded snapshot observed RewardSystemActive and FeeRoutingActive as true,
but did not inspect reserve balances, claim history, recipients, or budget
availability. Therefore this baseline makes no current-return claim. The V13
source's 70%/30% normal-fee and 100%/0% tip routing also differs from the
approved V14 90%/10% policies, including the approved 50%/50%
missing/unreceivable-author tip fallback. Reconciliation is an
OWNER_DECISION_REQUIRED migration and disclosure item. The approved 10% target
staking APR, 6 million ETKN gross annual issuance ceiling, 20% maximum
validator commission, and keyless accumulation-only ERA_TREA treasury are also
not deployed V13 behavior.

## Functionality not established

The active V13 runtime construction does not provide source evidence for an EVM
or native ERC-20 execution environment, ERA World Engine compute execution, or
on-chain collective/democracy governance. Source presence also does not prove
DeFi services, production NFT applications, GPU validation, or custody through
Multisig/Proxy. Claims about those areas require separate exact source and live
evidence.
