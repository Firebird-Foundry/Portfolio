import PocketBase from 'pocketbase';

const PocketBaseClient = new PocketBase();
PocketBaseClient.admins.authWithPassword();

export { PocketBaseClient }