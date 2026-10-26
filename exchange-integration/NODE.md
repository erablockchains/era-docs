# Build and operate an exchange full node

Use a dedicated unprivileged Linux host and a new data directory. Do not copy a validator keystore or use `--validator`. The public source includes raw genesis; startup replays upgrades from that genesis. Building spec16 source does not mean rewriting genesis to embed spec16.

## Reproducible inputs and build recipe

Pinned public commit: `edb10d7c2916283242356d172301091b94c08401`. Rust1.87.0; Polkadot SDK tag `polkadot-v1.19.1`, commit `f3969c7ddd34985e6e709ed458bcc519f651682a`; retain Cargo.lock and repository security-backport vendor directories. Source [build record](https://github.com/erablockchains/era-blockchain/blob/edb10d7c2916283242356d172301091b94c08401/docs/BUILD.md) distinguishes older optimization settings from the final optimized build. A fresh build is not guaranteed bit-identical merely by following commands.

Ubuntu prerequisites: git, C/C++ build tools, clang/LLVM18 and libclang, cmake, pkg-config, OpenSSL development headers, protobuf compiler, Python3, and Rust installed from the official Rust distribution. Use a distribution providing those versions; package names can vary. Ensure `clang --version`, `protoc --version` and `rustc +1.87.0 --version` are recorded with the build.

```sh
git clone https://github.com/erablockchains/era-blockchain.git
cd era-blockchain
git checkout --detach edb10d7c2916283242356d172301091b94c08401
rustup toolchain install 1.87.0 --profile minimal
rustup component add rust-src rustfmt clippy --toolchain 1.87.0
rustup target add wasm32-unknown-unknown --toolchain 1.87.0
python3 scripts/check-publication.py
export CARGO_BUILD_JOBS=2 CARGO_INCREMENTAL=0
export CC=clang CXX=clang++ AR=ar LIBCLANG_PATH=/usr/lib/llvm-18/lib
export PROTOC=/usr/bin/protoc WASM_BUILD_STD=1
export WASM_BUILD_WORKSPACE_HINT="$PWD"
unset CARGO_PROFILE_RELEASE_OPT_LEVEL CARGO_PROFILE_RELEASE_CODEGEN_UNITS CARGO_PROFILE_RELEASE_LTO
export SKIP_FRAME_STORAGE_ACCESS_TEST_RUNTIME_WASM_BUILD=1
cargo +1.87.0 build --locked --release -p era-node --bin era-node --jobs 2
sha256sum target/release/era-node network/era-v14.raw.json
./target/release/era-node --help
```

The skip setting concerns the SDK's unrelated auxiliary storage-test runtime; ERA's runtime Wasm must remain enabled. Do not silently update Cargo.lock or disable the ERA runtime build. Copy the resulting binary to an operator-controlled installation directory, preserve its source/lock/compiler/build log/checksum, and run as a non-root service only after local qualification. No prebuilt binary is shipped in this documentation package.

Raw chain specification: [network/era-v14.raw.json](https://github.com/erablockchains/era-blockchain/blob/edb10d7c2916283242356d172301091b94c08401/network/era-v14.raw.json), SHA-256 **`0c5bf71c53e9b15391245fc072db517a414904798449b7710f12cd0109d041f5`**. Do not modify its storage/genesis or replace it with `--dev`. It intentionally has empty bootNodes; public sentries are supplied separately. Verify the resulting genesis by RPC before trusting balances or scanning.

## Resources and synchronization

Retained builds used two CPU jobs and16GiB memory limits; the public build guide allows at least30GiB free scratch. These are build planning figures, not a minimum production-node or archive SLA. For an exchange-node evaluation, allocate dedicated SSD/NVMe storage with room for database growth, compaction and backups, reliable connectivity, monitored memory/CPU and a separately measured retention budget. A suggested initial evaluation host is4vCPU/16GiB RAM with expandable SSD; it is a planning recommendation, not a benchmark-certified capacity. No measured public archive-size/growth or guaranteed initial-sync duration is established in this kit. Measure live disk growth and set capacity alerts before acceptance; do not label an arbitrary fixed disk size sufficient forever.

Example archive-oriented non-authority startup, adapted from [public operator material](https://github.com/erablockchains/era-blockchain/blob/edb10d7c2916283242356d172301091b94c08401/docs/OPERATORS.md):

```sh
test ! -e "$PWD/era-exchange-data"
./target/release/era-node \
  --chain ./network/era-v14.raw.json \
  --base-path "$PWD/era-exchange-data" \
  --name era-exchange-full-node \
  --listen-addr /ip4/0.0.0.0/tcp/30333 \
  --bootnodes /ip4/46.62.184.123/tcp/31333/p2p/12D3KooWK57ku2nXVZrAC7NKouRaMr9ud2zmeiLcemuZh5tHKaG4 \
  --bootnodes /ip4/46.62.184.124/tcp/31333/p2p/12D3KooWGtChkkYktjHoVzH4XKTP6mzNvvwesE5VQud8BTGC68P9 \
  --rpc-port 19944 --rpc-methods Safe \
  --state-pruning archive --blocks-pruning archive \
  --no-mdns --no-telemetry --no-prometheus --offchain-worker Never
```

Check the exact built binary's `--help` for pruning support before startup. The two addresses are already published sentries; independent admission/reachability from a new exchange host is not newly verified here. Escalate connection failure to engineering rather than substituting private peer addresses. Do not combine `--port` with `--listen-addr`. RPC stays loopback; expose it only through a separately secured exchange network gateway. Never expose administrative methods or import production consensus keys into an exchange full node.

Monitor peer count, syncing state, finalized progression/lag, header continuity and runtime/code/metadata identities. An apparently nonsyncing node with zero peers may be stale. Compare genesis and a common finalized hash with the public endpoint. Retain block bodies **and historical state** if the exchange must backfill events/metadata across long outages; keeping bodies alone does not guarantee `state_getStorage` availability. A pruned node can serve recent balances but cannot guarantee old event retrieval. Switching a previously pruned database to archive does not recreate missing past state; plan a fresh archive sync or verified recovery source. Do not interpret unavailable state as zero balance or no deposits.

Test shutdown/restart, catch-up and backup restoration on disposable copies before operational acceptance. Preserve cursor and metadata manifests outside node databases. The source contains later offline command improvements; historical deployed binaries may not support all export/import/revert dispatchers. Do not assume command support from an older README, and never use a destructive purge/revert against retained production data. Finalized runtime upgrades cannot be undone by simply replacing a node binary.

This kit reuses retained source/build evidence. A new clean build, independent full synchronization, archival-history coverage and load qualification remain exchange acceptance activities; none was fabricated or run against production for this documentation release.
