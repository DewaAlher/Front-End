const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./task.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXIST task (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, completed BOOLEAN');
});

module.exports = db;

