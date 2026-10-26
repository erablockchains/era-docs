// Offline ONLY. Public development accounts and deliberately non-production genesis.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {Keyring} from '@polkadot/keyring';
import {cryptoWaitReady,signatureVerify} from '@polkadot/util-crypto';
import {compactToU8a,u8aConcat,u8aToHex} from '@polkadot/util';
import {registryFor} from './lib.mjs';
await cryptoWaitReady();
const registry=registryFor(readFileSync(new URL('./fixtures/metadata.scale.hex',import.meta.url),'utf8').trim());
const genesis='0x'+'11'.repeat(32);
const results=[];
for(const type of ['sr25519','ed25519','ecdsa']){
 const keyring=new Keyring({type,ss58Format:42});
 // Hex seed is public fixture material. Never use it for custody or production.
 const pair=keyring.addFromSeed(new Uint8Array(32).fill(7));
 const recipient=new Keyring({type:'sr25519',ss58Format:42}).addFromUri('//Bob');
 const method=u8aToHex(u8aConcat(new Uint8Array([2,3,0]),recipient.publicKey,compactToU8a(10n**18n)));
 const options={genesisHash:genesis,blockHash:genesis,nonce:0,era:0,tip:0,runtimeVersion:{specVersion:16,transactionVersion:1}};
 const extrinsic=registry.createType('Extrinsic',{method:registry.createType('Call',method)},{version:4});extrinsic.sign(pair,options);
 const payload=registry.createType('ExtrinsicPayload',{method,genesisHash:genesis,blockHash:genesis,nonce:0,era:0,tip:0,specVersion:16,transactionVersion:1},{version:4});
 const verified=signatureVerify(payload.toU8a({method:true}),extrinsic.signature.toU8a(),pair.publicKey).isValid;
 if(!verified)throw Error(type+' signature verification failed');
 results.push({scheme:type,address:pair.address,publicKey:u8aToHex(pair.publicKey),recipient:recipient.address,genesis,method,extrinsic:extrinsic.toHex(),hash:extrinsic.hash.toHex(),verified});
}
mkdirSync('local-output',{recursive:true});writeFileSync('local-output/synthetic-vectors.json',JSON.stringify(results,null,2)+'\n');console.log(JSON.stringify(results,null,2));
