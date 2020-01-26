
const db = [] 

export async function get(req, res, next) {

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(db));
}

export async function post(req, res, next) {
  const time = Date.now();
  db.push(time);
  const status = { status: 'OK' }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(status));
}
