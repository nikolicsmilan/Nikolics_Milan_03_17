var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
/*var userDbAtlas = require('./util/data/userDbAtlas');*/
var app = express();

/*
        !!!!! EZ AZ EGESZ APP LEGFONTOSABB RESZE !!!!!
        Az app bovebb felepitesenek attekintesehez es a mukodesenek megertesehez 
        mindenkeppen javallot a dokumentacio es az ajanlott anyagok megismerese,
        valamint az alapok es a tovabbi lehetosegek megismerese es elsajatitasa

        !!!!! AZ APP HTTPS-T HASZNAL - Dev kornyezetben nyugodtan atallithato HTTP-re,
        igeny szerint pedig akar mindket modon hasznalhato a bin/www megfelelo reszeinek atirasaval
        ----- TOVABBI INFORMACIO DOKUMENTACIOBAN ES AZ AJANLOTT ANYAGOKBAN -----

        !!!!! AZ APP a megrendelo igenyei szerint Docker kornyezethez lett igazitva, ez azonban nem kotelezo,
        alapveto modon is futtathato, illetve integralhato a front end React appal - az erre vonatkozo reszletek
        viszont nem kepezik reszet jelen fejlesztesnek es dokumentacionak, ezek megismerese erdekeben az
        ajanlott anyagok egy jo kiindulopontot kepeznek
        ----- A Dockerfile ehhez a megkozeliteshez szukseges

        !!!!! A package.json/lock az APP konfiguracios fajljai
 */

//minden olyan belso reteget, ahol ugyanazt az adatbazist szeretnenk hasznalni,
//ezen belul inicializalunk - hogy mindig csak egy db instance legyen az adatbazisbol
//ezzel mar az app indulasakor letrejon a kapcsolat, es lehet hasznalni a tovabbiakban
//az util reteget hasznalja (userDbAtlas)
/*
userDbAtlas.initialize(function (err) {
  if (err) console.log(err);

   
  });
*/
   //app inicializalasa

  var indexRouter = require('./controllers/indexController');
   var emailRouter = require('./controllers/emailController');
  /* var dataRouter = require('./controllers/dataController');
   var exampleCrudRouter = require('./controllers/exampleCrudController');*/

   app.use(cors());
   app.use(logger('dev'));
   app.use(express.json());
   app.use(express.urlencoded({ extended: false }));
   app.use(cookieParser());
   app.use(express.static(path.join(__dirname, 'public')));
   app.use('/email', emailRouter);
   /*app.use('/data', dataRouter);
   app.use('/example', exampleCrudRouter);
   app.use('/gallery', indexRouter);
   app.use('/services', indexRouter);
   app.use('/example-crud', indexRouter);*/
   app.use(express.static('/nikolics-milan-website/build'));
   app.use(express.static('/nikolics-milan-website/build/static'));
   app.use(express.static('/nikolics-milan-website/public'));

   /*
           !!!!! Ez az alapveto navigacio, minden ide erkezik, kiveve amire masik router van beallitva !!!!!
           Mivel az aloldalakon torteno navigaciot a front end vegzi - a React Router - tulajdonkeppen minden
           megjelenitesre atpasszolja a frontendnek - minden ide erkezo keresre az index.html-t adja vissza

           ----- TOVABBI INFORMACIO DOKUMENTACIOBAN ES AZ AJANLOTT ANYAGOKBAN -----
    */
   app.get('/*', function (req, res) {
    console.log('app app.get');
     res.sendFile('/nikolics-milan-website/build/index.html');
   });

   //ezek alapvetoen letrejott error kezelesek, ezt is lehet modositani, kiegesziteni, teljesen atirni igeny szerint

   // catch 404 and forward to error handler
   app.use(function (req, res, next) {
       next(createError(404));
   });

   // error handler
   app.use(function (err, req, res, next) {
       // set locals, only providing error in development
       res.locals.message = err.message;
       res.locals.error = req.app.get('env') === 'development' ? err : {};

       // render the error page
       res.status(err.status || 500);
       res.render('error');
   });
module.exports = app;
