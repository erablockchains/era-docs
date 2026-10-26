import {TypeRegistry,Metadata} from '@polkadot/types';
import {decodeAddress,encodeAddress} from '@polkadot/util-crypto';
import {createHash} from 'node:crypto';
export const GENESIS='0x0abc2c3d8db5815541050b73da4d81267ebf14d90dbee8d7258155b667ea112e';
export const METADATA_SHA256='574931f693241cb62e1ad2990eda55e2250c36c9c0de852b0380eac480c8496a';
export const sha256=hex=>createHash('sha256').update(Buffer.from(hex.replace(/^0x/,''),'hex')).digest('hex');
export function registryFor(hex){
 if(sha256(hex)!==METADATA_SHA256)throw Error('Unapproved metadata: stop and review runtime');
 const registry=new TypeRegistry();registry.setMetadata(new Metadata(registry,hex));registry.setChainProperties(registry.createType('ChainProperties',{ss58Format:42,tokenDecimals:18,tokenSymbol:'ETKN'}));return registry;
}
export function validateAddress(address){
 // Require the chain's canonical SS58 encoding, checksum and 32-byte account ID.
 const bytes=decodeAddress(address,false,42);
 if(bytes.length!==32||encodeAddress(bytes,42)!==address)throw Error('Not a canonical ERA AccountId32 address');
 return Buffer.from(bytes).toString('hex');
}
export function units(value){
 if(!/^(0|[1-9][0-9]*)(\.[0-9]{1,18})?$/.test(value))throw Error('Use a positive decimal string with at most 18 decimal places');
 const [whole,part='']=value.split('.');return BigInt(whole)*10n**18n+BigInt(part.padEnd(18,'0'));
}
export function extractTransfers({genesis,hash,height,finalizedHeight,events,txHashes}){
 if(genesis!==GENESIS||height>finalizedHeight)throw Error('Wrong chain or unfinalized block');
 return events.flatMap((record,eventIndex)=>{
  if(record.section!=='balances'||record.method!=='Transfer')return [];
  if(!Number.isInteger(record.extrinsicIndex)||!txHashes[record.extrinsicIndex])throw Error('Unattributed transfer: manual reconciliation');
  const outcomes=events.filter(e=>e.extrinsicIndex===record.extrinsicIndex&&e.section==='system'&&['ExtrinsicSuccess','ExtrinsicFailed'].includes(e.method));
  if(outcomes.length!==1||outcomes[0].method!=='ExtrinsicSuccess')throw Error('Unexpected transfer/dispatch outcome: quarantine block');
  const [from,to,amount]=record.data;
  if(!/^[0-9]+$/.test(amount)||BigInt(amount)<=0n)throw Error('Invalid transfer amount');
  return [{id:`${genesis}:${hash}:${eventIndex}`,height,blockHash:hash,eventIndex,extrinsicIndex:record.extrinsicIndex,txHash:txHashes[record.extrinsicIndex],from,to,amount}];
 });
}
// Reference journal reducer. Production credits + unique event ID + cursor MUST commit
// together in a durable database transaction; this pure function never credits money.
export function applyBlock(journal,block,transfers){
 if(block.height===journal.height&&block.hash===journal.hash)return journal;
 if(block.height!==journal.height+1||block.parentHash!==journal.hash)throw Error('Gap or conflicting finalized history');
 const entries={...journal.entries};for(const t of transfers){if(entries[t.id]&&JSON.stringify(entries[t.id])!==JSON.stringify(t))throw Error('Conflicting duplicate');entries[t.id]=t}
 return {height:block.height,hash:block.hash,entries};
}
export function reconcileWithdrawal({included,finalized,dispatchSuccess,expectedTransfer,failed,expired,unknown}){
 if(failed)return 'FAILED_RECONCILE_FEES';
 if(unknown||expired)return 'RECONCILE_BEFORE_RETRY';
 if(!included)return 'SUBMITTED_UNCONFIRMED';
 if(!finalized)return 'INCLUDED_UNFINALIZED';
 if(!dispatchSuccess||!expectedTransfer)return 'QUARANTINE';
 return 'FINALIZED_SUCCESS';
}
