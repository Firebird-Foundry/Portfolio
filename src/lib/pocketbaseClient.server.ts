import PocketBase from 'pocketbase';
import { PB, PB_USER, PB_PWD } from '$env/static/private';
const PocketBaseClient = new PocketBase(PB);
PocketBaseClient.admins.authWithPassword(PB_USER, PB_PWD);

export { PocketBaseClient }
