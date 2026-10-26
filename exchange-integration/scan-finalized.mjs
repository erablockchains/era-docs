// Read-only, one-block example. No signer, submission, crediting or persistent cursor.
import {ApiPromise,WsProvider} from '@polkadot/api';
import {GENESIS,registryFor,extractTransfers} from './lib.mjs';
const endpoint=process.env.ERA_RPC??'wss://eraprojects.org';
const provider=new WsProvider(endpoint,false);await provider.connect();
const api=await ApiPromise.create({provider,noInitWarn:true});
try{
 if(api.genesisHash.toHex()!==GENESIS)throw Error('Wrong genesis');
 const finalizedHash=(await api.rpc.chain.getFinalizedHead()).toHex();
 const finalizedHeader=await api.rpc.chain.getHeader(finalizedHash);
 const height=process.argv[2]===undefined?finalizedHeader.number.toNumber():Number(process.argv[2]);
 if(!Number.isSafeInteger(height)||height<1||height>finalizedHeader.number.toNumber())throw Error('Invalid finalized height');
 const hash=(await api.rpc.chain.getBlockHash(height)).toHex();
 const raw=await provider.send('chain_getBlock',[hash]);
 // Block N was executed using runtime state at N-1, including an upgrade block.
 const parent=raw.block.header.parentHash;
 const version=await provider.send('state_getRuntimeVersion',[parent]);
 if(version.specName!=='era'||version.specVersion!==16||version.transactionVersion!==1)throw Error('Historical runtime requires a separately reviewed metadata manifest');
 const metadata=await provider.send('state_getMetadata',[parent]);
 const registry=registryFor(metadata);
 const atParent=await api.at(parent);
 const eventKey=atParent.query.system.events.key();
 const rawEvents=await provider.send('state_getStorage',[eventKey,hash]);
 if(rawEvents===null)throw Error('Events unavailable: archive/backfill provider required');
 const events=registry.createType('Vec<EventRecord>',rawEvents).map(({phase,event})=>({extrinsicIndex:phase.isApplyExtrinsic?phase.asApplyExtrinsic.toNumber():null,section:event.section,method:event.method,data:event.data.map(v=>v.toString())}));
 const txHashes=raw.block.extrinsics.map(hex=>registry.createType('Extrinsic',hex).hash.toHex());
 const transfers=extractTransfers({genesis:GENESIS,hash,height,finalizedHeight:finalizedHeader.number.toNumber(),events,txHashes});
 console.log(JSON.stringify({genesis:GENESIS,height,hash,parentHash:parent,finalizedHash,runtime:version.specVersion,transfers},null,2));
}finally{await api.disconnect()}
