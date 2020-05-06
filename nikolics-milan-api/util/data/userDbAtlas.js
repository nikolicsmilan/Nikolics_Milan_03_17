const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

/*
----- Ez az adatbazis kapcsolathoz szukseges elsodleges logikai reteg -----
      Ez egy util reteg, ez inicializalja az adott adatbazis kapcsolatot
 */

//kornyezeti valtozobol olvassa be az adatbazis connection stringjet
const dbConnectionUrl = process.env.DB_CONNECTION;
//ez fogja tartalmazni a beolvasott adatbazist
var _db;

//inicializalja az adatbazis kapcsolatot - mongo atlas
function initialize(callback) {
    MongoClient.connect(dbConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
        _db = client.db('userDb');
        return callback(err);
    });
}

//ha meghivjak, visszaadja az adatbazis instance-t
function getDb() {
    return _db;
}

//ezzel tesszuk elerhetove az itt meghatarozott fuggvenyeket a kulvilag szamara
module.exports = {
    initialize,
    getDb
};