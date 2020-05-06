var express = require('express');
var router = express.Router();
const emailService = require("../services/emailService");
/*const dataService = require("../services/dataService");*/

/*
----- Ez az e-mail kuldes Controllere -----
      Ez kezeli a beerkezo felhasznaloi uzenetkuldest
      Az e-mail es adat service megvalositasait hasznalja fel (emailService, dataService)
 */

//Fogadja a front enden levo form POST-jat, es a beerkezo adatok alapjan
//tovabbitja a felhasznalo uzenetet a weboldal tulajdonosanak e-mail formajaban,
//tovabba a felhasznalonak is kikuld egy automatikus uzenetet
//ezek utan pedig a felhasznalo altal megadott adatokat elmenti az adatbazisba
router.post('/inquiry', function (req, res, next) {
    console.log('1. emailController router post első sor');
    var name = req.body.lastName + " " + req.body.firstName;
    var email = req.body.email;
    var message = req.body.message;
    console.log('2. emailController router.post /inquiry ben van send email előtt');
    emailService.sendEmail(name, email, message);
    /*dataService.create(req.body, users => res.send("OK"));*/
    console.log('3. emailController router.post /inquiry ben van send email után name: '+name +' '+'email: '+email+' '+'message: '+message);       
});

module.exports = router;