# V14 acceptance and independent qualification

[Back to index](../README.md)

## Evidence classes

- **Authenticated deployment evidence** binds source, package, host, checkpoint and post-state for the accepted node fleet and runtime.
- **Automated application evidence** covers deterministic tests, analysis, builds and artifact checks.
- **Owner-performed evidence** records checks performed on owner hardware and must be labelled as such.
- **Independent qualification** must be performed by an operator who did not produce the coordinator evidence and must return its own tools, times, network vantage, raw outputs and hashes.

## Required independent package

The independent operator must provide:

1. TLS chain, hostname and validity checks for `metadata.eraprojects.org`;
2. exact GET and HEAD retrieval for all four approved metadata objects, with size and SHA-256 comparison;
3. rejection of an unapproved object and recovery to an approved object;
4. native resolver acceptance of approved content and rejection/recovery behavior for invalid content;
5. ERA genesis, runtime specVersion 15 and advancing finalized-head evidence from the public endpoint;
6. a separately operated non-validator full node synchronized to current finalized state;
7. operator identity, UTC timestamps, tool versions, network vantage, raw outputs, result summary and a SHA-256 manifest.

This is the defined remaining independent qualification. A coordinator rerun, owner device check or validator-host observation does not substitute for it.

## Separate source-publication gate

Public source may be delivered as a clearly labelled V14 source prerelease before production commissioning and independent qualification finish. Its documentation must keep those requirements open and avoid a full-acceptance claim. Before GitHub publication, reconcile the final three repository commits, confirm the proposed blockchain `v14.0.0-rc.1` tag target, verify source/artifact hashes and licences, review reachable private history and workflow effects, and present the exact branches, commits, visibility changes, tag and assets for owner approval. No prepared branch has been pushed. The independent package above remains necessary for independent qualification, not for accurately labelled source publication.
