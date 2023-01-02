import PocketBase from 'pocketbase';
import { PB, PB_USER, PB_PWD } from '$env/static/private'

console.log(PB)
console.log(PB_USER)
console.log(PB_PWD)
const PocketBaseClient = new PocketBase(PB);
PocketBaseClient.admins.authWithPassword('rentonmcintyre@yahoo.com', 'eXq!qdA$4UekAv');

export { PocketBaseClient }