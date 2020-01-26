import config from '../server.config';
import { MongoClient } from 'mongodb';

const client = new MongoClient(config.URL);

let db = null;
export async function getConnection() {
  if (!db) {
    db = await connect()
  }
  return db;
} 

export async function connect() {
  return new Promise(resolve => {
    client.connect(err => {
      if (err) throw err
      console.log("Connected successfully to server");
      const db = client.db(config.DB);
      resolve(db);
    });
  })
}

export async function insertDocument(db, collection, doc, ) {
  return new Promise(resolve => {
    const col = db.collection(collection);
    col.insertOne(doc, (err, result) => {
      console.log('Inserted document.')
      resolve(result);
    });
  });
}

export async function fetchDocuments(db, collection) {
  return new Promise(resolve => {
    const col = db.collection(collection);
    col.find({}).toArray(function(err, docs) {
      console.log(`Found ${docs.length} records.`);
      resolve(docs);
    });
  });
}

