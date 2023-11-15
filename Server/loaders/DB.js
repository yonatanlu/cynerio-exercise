const sqllite3= require('sqlite3');

const DB_NAME = 'users.db';
let dbConnection;

dbConnection = new sqllite3.Database(DB_NAME);
dbConnection.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, Date DATE DEFAULT CURRENT_DATE, Name TEXT, Address TEXT)');

module.exports = dbConnection;