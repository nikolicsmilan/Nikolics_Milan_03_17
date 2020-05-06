var express = require("express");
require('dotenv').config();
const nodemailer = require('nodemailer');

/*
----- Ez az e-mail kuldesben hasznalatos logikai muveleteket elvegzo Service -----
      Ez egy logikai reteg, ezeket a megvalositasokat hasznalja fel az
      e-mail kuldeshez tartozo Controller (emailController)
 */

//autentikaciohoz szukseges adatok
//kornyezeti valtozokbol olvassa be a secreteket
var auth = {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    accessToken: process.env.EMAIL_ACCESS_TOKEN,
};

var from = 'Nikolics Milan Weboldal';
var toPartner = 'mteszt77@gmail.com';
var partnerSubject = 'Felhasználói üzenet továbbítása';
var userSubject = 'Automatikus üzenet';

//tovabbitja a formrol erkezo felhasznaloi uzenetet a weboldal tulajdonosanak
function sendEmail(name, email, message) {
    console.log('4. emailService sendEmail első sora');
    console.log('5. emailService sendEmail auth.type: '+auth.type);
    console.log('6. emailService sendEmail auth.user: '+auth.user);
    console.log('7. emailService sendEmail auth.clientId: '+auth.clientId);
    console.log('8. emailService sendEmail auth.clientSecret: '+auth.clientSecret);
    console.log('9. emailService sendEmail auth.refreshToken: '+auth.refreshToken);
    console.log('10. emailService sendEmail auth.accessToken: '+auth.accessToken);
    
    var mailOptions = {
        from: from,
        to: toPartner,
        subject: partnerSubject,
        text: name + ' üzenetet küldött Önnek. Az üzenet a következő:\n' + message + '\nA felhasználó e-mail címe: ' + email + '\nEz egy automatikus üzenet, kérjük vegye fel a kapcsolatot a felhasználóval.'
    };
    
    console.log('11. emailService sendEmail mailOptions után');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: auth
    });

    console.log('12. emailService transporter.sendMail után');

    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log('13. emailService transporter.Sendmail error ága');
            return console.log(err);
        } else {
            //ha ez sikerult, automatikus uzenetet kuld a felhasznalonak is
            console.log('14. emailService transporter sendMail ITT SIKERÜLT ELKÜLDENI AZ ÜZENETET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n');

            console.log('15. mailOptions.from: '+mailOptions.from+'\n '+
            '16. mailOptions.to: '+ mailOptions.to+'\n '+
            '17. mailOptions.subject: '+ mailOptions.subject+'\n '+
            '18. mailOptions.text: '+mailOptions.text);
            return sendEmailToUser(name, email);
        }
    });
   
}

//automatikus uzenetet kuld a felhasznalonak
function sendEmailToUser(name, email) {
    console.log('19. emailService sendEmailToUser ben első sor\n');
    console.log('20. name: '+name+'\n '+'21. email: '+email);
    var mailOptions = {
        from: from,
        to: email,
        subject: userSubject,
        text: 'Kedves ' + name + '! \nKöszönjük érdeklődését, üzenetét fogadtuk, munkatársunk nemsokára felveszi Önnel a kapcsolatot! \nEz egy automatikus üzenet, kérjük ne válaszoljon.'
    };
    console.log('22. emailService sendEmailToUser transporter változó előtt\n');
    console.log('23. mailOptions.from: '+mailOptions.from+'\n '+'24. mailOptions.to: '+mailOptions.to+'\n '+'mailOptions.subject: '+mailOptions.subject+' '+
    '25. mailOptions.text: '+mailOptions.text);
  

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: auth
    });

    transporter.sendMail(mailOptions, (err, res) => {
        console.log('26.  emailService sendEmailToUser-ben transporter.sendMail\n')
        if (err) {
            console.log('27. emailService  sendEmailToUser error ág\n')
            return console.log(err);
        } else {
            console.log('28. emailService  sendEmailToUser response ág\n')
            return res;
        }
    });
}

//ezzel tesszuk elerhetove az itt meghatarozott fuggvenyeket a kulvilag szamara
module.exports = {
    sendEmail,
    sendEmailToUser
};