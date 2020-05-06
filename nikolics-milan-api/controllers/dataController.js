var express = require("express");
var router = express.Router();
const dataService = require("../services/dataService");

/*
----- Ez az alapveto (jelenleg csak a formban hasznalt) adat kezelo Controllere -----
      Az erre erkezo keresekkel teljes CRUD vegezheto a felhasznalokra
      Az adat service megvalositasait hasznalja fel (dataService)
      ----- Teszt erdekeben minden fuggveny tartalmaz egy minta curl-t -----
 */

//CREATE - letrehozza a beerkezo adatok alapjan az adatbazis rekordot
//         majd valaszkent visszakuldi az osszes adatbazisban levo rekordot JSON-kent
router.post('/create', function (req, res) {

    //FOR TESTING USE
    //curl -X POST -H "Content-Type: application/json" --data "{\"lastName\": \"TestCreate\", \"firstName\": \"TestCreate\", \"email\": \"doraduszin@gmail.com\", \"phone\": \"+36209876543\", \"message\": \"TestCreateMsg\"}" http://localhost:9000/data/create
    //CHAR ESCAPING (\) FOR WINDOWS - IDK IF ITS NEEDED ON LINUX

    dataService.create(req.body, users => res.json(users));
});

//READ ONE - beolvas egy adott ID-val rendelkezo rekordot
//           valaszkent visszakuldi a beolvasott rekordot JSON-kent
router.get('/read-one/:id', function (req, res) {

    //FOR TESTING USE
    //curl http://localhost:9000/data/read-one/5e19cbf503658b23441bcee5
    //CHANGE ID ACCORDINGLY IN THE URL

    let userId = req.params.id;
    dataService.readOne(userId, user => res.json(user));
});

//READ ALL - beolvassa az osszes adatbazisban levo rekordot
//           majd valaszkent visszakuldi a beolvasott rekordokat JSON-kent
router.get('/read-all', function (req, res) {

    //FOR TESTING USE
    //curl http://localhost:9000/data/read-all

    dataService.readAll(users => res.json(users));
});

//UPDATE - modositja a beerkezett adatok alapjan az adott ID-val rendelkezo rekordot
//         majd valaszkent visszakuldi a modositott rekordot JSON-kent
router.put('/update/:id', function (req, res) {

    //FOR TESTING USE
    //curl -X PUT -H "Content-Type: application/json" --data "{\"lastName\": \"TestUpdate\"}" http://localhost:9000/data/update/5e19cbf503658b23441bcee5
    //CHANGE ID ACCORDINGLY IN THE URL
    //CHAR ESCAPING (\) FOR WINDOWS - IDK IF ITS NEEDED ON LINUX

    let userId = req.params.id;
    let item = req.body;
    dataService.update(userId, item, user => res.json(user));
});

//DELETE - torli az adott ID-val rendelkezo rekordot
//         majd valaszkent visszakuldi az osszes adatbazisban levo rekordot JSON-kent
router.delete('/delete/:id', function (req, res) {

    //FOR TESTING USE
    //curl -X DELETE http://localhost:9000/data/delete/5e19ccc26229ce0104831bdd
    //CHANGE ID ACCORDINGLY IN THE URL

    let userId = req.params.id;
    dataService.deleteUser(userId, users => res.json(users));
});

module.exports = router;