let TabParam = ["MsgBibli", "MsgDyn", "Msgbiblicolor"];
let TabGroupe1 = ["1", "2", "3"];
var aff = TabParam;
var infos = {
    Donnee1: 3,
    Donnee2: 4,
    Donnee3: 1,
    Donnee4: 0
}

var ztext;
var att;

var list = [
    { "Flow": "TestFlo", "Division": "UDJ", "Valeur": "serveur HS", "TypeInfo": "chaine", "Nom ": "MsgBiblio", "DisplayName": "message Bibliotech", "Commentaire": "test commentaire" },
    { "Flow": "TestLiesse", "Division": "UDJ", "Valeur": "serveur HS2", "TypeInfo": "chaine", "Nom": "MsgBiblio2", "DisplayName": "message2 Bibliotech2", "Commentaire": "test2 commentaire2" },
];


function efftable() {

    document.getElementById('tab').innerHTML = "";

}

function creerTable1() {
    efftable();
    let div = document.getElementById('tab');
    var table = document.createElement("table");
    var ligne = table.insertRow(0);
    var cellule1 = ligne.insertCell(0);
    var cellule2 = ligne.insertCell(1);
    cellule1.innerHTML = infos.Donnee1;
    cellule2.innerHTML = infos.Donnee2;
    div.append(table);
}

function creerTable2() {
    efftable();
    let div = document.getElementById('tab');
    var table = document.createElement("table");
    var ligne = table.insertRow(0);
    var cellule1 = ligne.insertCell(0);
    var cellule2 = ligne.insertCell(1);
    cellule1.innerHTML = infos.Donnee3;
    cellule2.innerHTML = infos.Donnee4;
    div.append(table);
}

function choixTab() {
    let choix = document.getElementById('menugroup').value;
    console.log("c'est le " + choix);
    if (choix == "G1") {
        ztext = list[0].DisplayName;
        att = list[0].Division;
        console.log(ztext);
        console.log(att);
    }
    else {
        ztext = list[1].DisplayName;
        att = list[1].Division;
        console.log(ztext);
        console.log(att);
    }

    afflist();

}

function msgapply() {
    var message = document.getElementById('msg');
    message.innerHTML ="Modifications applied with success !";
    
}


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJraWQiOiJ4RGYxTzBlQVwvb1FYa2k1eFNvcXdOSDU2VFwvbjlTSkpoOEZSd3VzVFBUK2s9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZWM1MnUzbzMyNDFjZHViNWd1bnQ0dnNjZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoic25vdy1wdXJlY2xvdWRcL3JlYWQiLCJhdXRoX3RpbWUiOjE2MDA0Mzk2MzMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX2ZEaW9UQzMzYyIsImV4cCI6MTYwMDQ0MzIzMywiaWF0IjoxNjAwNDM5NjMzLCJ2ZXJzaW9uIjoyLCJqdGkiOiIyNjE0OGM1Ny0wNjBmLTQwZDEtYjUwNC05ZGZmZWI1NTgwMTUiLCJjbGllbnRfaWQiOiIyZWM1MnUzbzMyNDFjZHViNWd1bnQ0dnNjZCJ9.cBvh4RnKvWQGVTFxh3VZsAbWc38Ss7AAIntk0HgqHwzeRxA58YFTMIr9tCe_Ysri7xw1neUWMxN1H3KSnyuCG_vnzvCvNrEtxyEw00tH3QRVpK7nzgcTu7HcFcKtgn-BqNV3prHedKayDiGI68KYTC7qonKp3i56JSio3LBH7i_3Q5rUWMbmVM9P0Wzxh4zBEwjm4SNBhEdMU1873u-h9lK1Cr6caw4V7l2lUyrfREGsTehWq6KWCSLCCZKxcqg0jV29P3ceUhhf97j1sLc6w1-5k-jXXiiaN0CI0VBC_yUGdujbm9AIWafWTnnxO9VKtbeFBK4wiHAgLyY4nQ1I0g");
myHeaders.append("Content-Type", "application/json;charset=UTF-8");
myHeaders.append("Origin", "rltq36v83k.execute-api.eu-central-1.amazonaws.com");

myHeaders.append("Access-Control-Request-Method", "*");



var raw = "";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://rltq36v83k.execute-api.eu-central-1.amazonaws.com/Integration/incident-masse", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



function afflist() {
    document.getElementById('msgtexte').value = ztext;
    document.getElementById('debor').value = att;
}
