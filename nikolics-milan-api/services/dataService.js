var express = require("express");
var ObjectId = require('mongodb').ObjectId; 
const userDbAtlas = require("../util/data/userDbAtlas");

/*
----- Ez az adatokhoz hasznalatos logikai muveleteket elvegzo Service -----
      Ez egy logikai reteg, ezeket a megvalositasokat hasznalja fel a
      az adatokhoz es az e-mailhez tartozo Controller (emailController, dataController)
      Minimalis hibakezelest tartalmaz, ezt igeny szerint tobb modon is boviteni lehet
 */

//beolvassa az adatbazist
var userDb = userDbAtlas.getDb();
//beolvassa az adatbazis megfelelo collectionjet
var userCollection = userDb.collection("users");

//CREATE - letrehozza a beerkezo adatok alapjan az adatbazis rekordot
//         majd valaszkent visszakuldi az osszes adatbazisban levo rekordot
function create(user, callback) {
    try {
        userCollection.insertOne(user, (error) => {
            if (error) throw error;
            readAll(users => callback(users));
        });
    }
    catch (error) {
        console.log("Error creating user.");
    }
}

//READ ONE - beolvas egy adott ID-val rendelkezo rekordot
//           valaszkent visszakuldi a beolvasott rekordot
function readOne(userId, callback) {
    var o_id = new ObjectId(userId);
    try {
        userCollection.findOne({ _id: o_id }, (error, result) => {
            if (error) throw error;
            callback(result);
        });
    }
    catch (error) {
        console.log("Error reading user.");
    }
}

//READ ALL - beolvassa az osszes adatbazisban levo rekordot
//           majd valaszkent visszakuldi a beolvasott rekordokat
function readAll(callback) {
    try {
        userCollection.find().toArray((error, result) => {
            if (error) throw error;
            callback(result);
        });
    }
    catch (error) {
        console.log("Error reading users.");
    }
}

//UPDATE - modositja a beerkezett adatok alapjan az adott ID-val rendelkezo rekordot
//         majd valaszkent visszakuldi a modositott rekordot
function update(userId, item, callback) {
    var o_id = new ObjectId(userId);
    try {
        userCollection.updateOne({ _id: o_id }, { $set: item }, (error) => {
            if (error) throw error;
            readOne(userId, user => callback(user));
        });
    }
    catch (error) {
        console.log("Error updating user.");
    }
}

//DELETE - torli az adott ID-val rendelkezo rekordot
//         majd valaszkent visszakuldi az osszes adatbazisban levo rekordot
function deleteUser(userId, callback) {
    var o_id = new ObjectId(userId);
    try {
        userCollection.deleteOne({ _id: o_id }, function (error) {
            if (error) throw error;
            readAll(users => callback(users));
        });
    }
    catch (error) {
        console.log("Error deleting user.");
    }
}

//ezzel tesszuk elerhetove az itt meghatarozott fuggvenyeket a kulvilag szamara
module.exports = {
    create,
    readOne,
    readAll,
    update,
    deleteUser
};