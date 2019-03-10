const keys = require('./keys');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = `mongodb://${keys.MONGOHOST}`;

const dbName = `${keys.MDATABASE}`;

let _db;


function initDb(callback) {
  if (_db) {
      console.warn("Trying to init DB again!");
      return callback(null, _db);
  }

  MongoClient.connect(url, function (err, db) {
    if (err) {
      return callback(err,null);
    }
    else { 
      // _db = db.db(dbName);
    // console.log(db)
    return callback(null, db.db());
    }
    
  })
}

function getDb() {
  assert.ok(_db, "Db has not been initialized. Please called init first.");
  return _db;
}

module.exports = {
  getDb,
  initDb
};
