var express = require("express");
var ObjectId = require('mongodb').ObjectId;
const userDbAtlas = require("../util/data/userDbAtlas");

/*
----- Ez a minta CRUD-ban hasznalatos logikai muveleteket elvegzo Service -----
      Ez egy logikai reteg, ezeket a megvalositasokat hasznalja fel a
      minta CRUD-hoz tartozo Controller (exampleCrudController)
      Minimalis hibakezelest tartalmaz, ezt igeny szerint tobb modon is boviteni lehet
 */

//beolvassa az adatbazist
var userDb = userDbAtlas.getDb();
//beolvassa az adatbazis megfelelo collectionjet
var exampleCollection = userDb.collection("example");

//CREATE - letrehozza a kapott adatok alapjan az adatbazis rekordot
//         majd valaszkent visszakuldi az osszes adatbazisban levo rekordot
function create(user, callback) {
    var user_Obj = JSON.parse(JSON.stringify(user));
    var sum = calculateSum(user).toString();
    user_Obj.sum = sum;
    try {
        exampleCollection.insertOne(user_Obj, (error) => {
            if (error) throw error;
            readAll(users => callback(users));
        });
    }
    catch (error) {
        console.log("Error creating data.");
    }
}

//READ ONE - beolvas egy adott ID-val rendelkezo rekordot
//           valaszkent visszakuldi a beolvasott rekordot
function readOne(userId, callback) {
    var o_id = new ObjectId(userId);
    try {
        exampleCollection.findOne({ _id: o_id }, (error, result) => {
            if (error) throw error;
            callback(result);
        });
    }
    catch (error) {
        console.log("Error reading data.");
    }
}

//READ ALL - beolvassa az osszes adatbazisban levo rekordot
//           majd valaszkent visszakuldi a beolvasott rekordokat
function readAll(callback) {
    try {
        exampleCollection.find().toArray((error, result) => {
            if (error) throw error;
            callback(result);
        });
    }
    catch (error) {
        console.log("Error reading data.");
    }
}

//UPDATE - modositja a beerkezett adatok alapjan az adott ID-val rendelkezo rekordot
//         majd valaszkent visszakuldi a modositott rekordot
function update(userId, item, callback) {
    var o_id = new ObjectId(userId);
    try {
        exampleCollection.updateOne({ _id: o_id }, { $set: item }, (error) => {
            if (error) throw error;
            readOne(userId, (user) => {
                updateSum(userId, user, item, user => callback(user));
            });
        });
    }
    catch (error) {
        console.log("Error updating data.");
    }
}

//DELETE - torli az adott ID-val rendelkezo rekordot
//         majd valaszkent visszakuldi az osszes adatbazisban levo rekordot
function deleteUser(userId, callback) {
    var o_id = new ObjectId(userId);
    try {
        exampleCollection.deleteOne({ _id: o_id }, function (error) {
            if (error) throw error;
            readAll(users => callback(users));
        });
    }
    catch (error) {
        console.log("Error deleting user.");
    }
}

//kiszamitja a megadott szamok osszeget es azt adja vissza
function calculateSum(user) {
    var sum = parseInt(user.firstNumber) + parseInt(user.secondNumber) + parseInt(user.thirdNumber);
    console.log("sum: " + sum);
    return sum;
}

//modositas eseten ujraszamitja es elmenti az uj szamok alapjan letrejott uj osszeget
function updateSum(userId, user, item, callback) {
    var item_Obj = JSON.parse(JSON.stringify(item));
    if ('firstNumber' in item_Obj || 'secondNumber' in item_Obj || 'thirdNumber' in item_Obj) {
        console.log("item hasprop");
        o_id = new ObjectId(userId);
        var user_Obj = JSON.parse(JSON.stringify(user));
        var sum = calculateSum(user).toString();
        user_Obj.sum = sum;
        item = { "sum": sum };

        try {
            exampleCollection.updateOne({ _id: o_id }, { $set: item }, (error) => {
                if (error) throw error;
                readOne(userId, user => callback(user));
            });
        }
        catch (error) {
            console.log("Error updating data.");
        }
    }
    else {
        console.log("nope");
        callback(user);
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