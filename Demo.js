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
myHeaders.append("Authorization", "Bearer eyJraWQiOiJ4RGYxTzBlQVwvb1FYa2k1eFNvcXdOSDU2VFwvbjlTSkpoOEZSd3VzVFBUK2s9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZWM1MnUzbzMyNDFjZHViNWd1bnQ0dnNjZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoic25vdy1wdXJlY2xvdWRcL3JlYWQiLCJhdXRoX3RpbWUiOjE2MDA2NzYzMjEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX2ZEaW9UQzMzYyIsImV4cCI6MTYwMDY3OTkyMSwiaWF0IjoxNjAwNjc2MzIxLCJ2ZXJzaW9uIjoyLCJqdGkiOiI5NWMzYTU5OS03MjIzLTQxMWItYTUyMi0yZGQ1NjcwMGIzYTUiLCJjbGllbnRfaWQiOiIyZWM1MnUzbzMyNDFjZHViNWd1bnQ0dnNjZCJ9.dE0yiK7xwu6DxXRirXucD-tvDTNZ6e3nyg303yq_yGip6eHjWdocNO26C8-wItKr0v_zCitJPotolRaGr8ei-ymSWoYxIQlf2H9bIKOjuJpqcH-ApfedVQGyn2WNB44dLe7cSebad7fmTlHbXWz4TxK5yWb7Hjt4AKwtapHqR5ESNuyeW2PntXaNlnYBH4UF3MjXyEjG3ywnEcHXs-ExNngTwPnI8kgEJvaS5_PTPc-7ZMBjG9_rbBVIJ1S-i-fY5rtGYoefBMkiMq_afClC98vA88sLAVEFuWxdMG5RbEwlNROv5hMfpiPVHkqK8bjjPCdDD56n2FW6OA3-yTFF_g");
myHeaders.append("Content-Type", "application/json;charset=UTF-8");




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
