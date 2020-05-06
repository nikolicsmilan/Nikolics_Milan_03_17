var express = require("express");
var router = express.Router();
const exampleCrudService = require("../services/exampleCrudService");

/*
----- Ez a minta CRUD Controllere -----
      Ez kezeli az osszes a minta CRUD front endrol erkezo kerest
      A minta CRUD service megvalositasait hasznalja fel (exampleCrudService)
 */

//CREATE - letrehozza a beerkezo adatok alapjan az adatbazis rekordot
//         majd valaszkent visszakuldi az osszes adatbazisban levo rekordot JSON-kent
router.post('/create', function (req, res) {
    exampleCrudService.create(req.body, users => res.json(users));
});

//READ ONE - beolvas egy adott ID-val rendelkezo rekordot
//           valaszkent visszakuldi a beolvasott rekordot JSON-kent
router.get('/read-one/:id', function (req, res) {
    let userId = req.params.id;
    exampleCrudService.readOne(userId, user => res.json(user));
});

//READ ALL - beolvassa az osszes adatbazisban levo rekordot
//           majd valaszkent visszakuldi a beolvasott rekordokat JSON-kent
router.get('/read-all', function (req, res) {
    exampleCrudService.readAll(users => res.json(users));
});

//UPDATE - modositja a beerkezett adatok alapjan az adott ID-val rendelkezo rekordot
//         majd valaszkent visszakuldi a modositott rekordot JSON-kent
router.put('/update/:id', function (req, res) {
    let userId = req.params.id;
    let item = req.body;
    exampleCrudService.update(userId, item, user => res.json(user));
});

//DELETE - torli az adott ID-val rendelkezo rekordot
//         majd valaszkent visszakuldi az osszes adatbazisban levo rekordot JSON-kent
router.delete('/delete/:id', function (req, res) {
    let userId = req.params.id;
    exampleCrudService.deleteUser(userId, users => res.json(users));
});

module.exports = router;