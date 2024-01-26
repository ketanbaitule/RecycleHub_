import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65b3050c82ad2e52a686');

export default client;

export const account = new Account(client);
