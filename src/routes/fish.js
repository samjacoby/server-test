import { getConnection, insertDocument, fetchDocuments } from './_database'; 

const collection = 'test';

export async function get(req, res, next) {
  const db = await getConnection()
  const docs = await fetchDocuments(db, collection);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(docs));
}

export async function post(req, res, next) {
  console.log(JSON.stringify(req.body, null, 2));
  const time = Date.now();
  const db = await getConnection()
  const doc = req.body;
  res.setHeader('Content-Type', 'application/json');
  let status = '';
  if (!doc) {
    status = 'No data found'; 
  } else { 
    const result = await insertDocument(db, collection, req.body); 
    status = 'OK;' 
  }

  res.end(JSON.stringify({status}));
}
