import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI is not configured.');
}

declare global {
  // eslint-disable-next-line no-var
  var __mongoClientPromise__: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri);

export const mongoClientPromise =
  global.__mongoClientPromise__ ?? (global.__mongoClientPromise__ = client.connect());

export async function getDatabase() {
  const mongoClient = await mongoClientPromise;
  return mongoClient.db();
}
