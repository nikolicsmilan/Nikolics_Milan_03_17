var express = require('express');
var router = express.Router();

/*
----- Ez az alapveto navigacio Controllere -----
      Minden keresre ugyanazt csinalja, mivel a front end navigaciot
      a React Router vegzi
 */

//Minden ra erkezo keresre az index.html-t adja vissza
//Ez a megfelelo adott aloldalt fogja megjeleniteni
//Mivel a React Router kezeli magaban
router.get('/*', function (req, res) {
    console.log('ez az indexcontroolerben van get/');
    res.sendFile('/nikolics-milan-website/build/index.html');
});

module.exports = router;