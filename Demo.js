﻿let TabParam = ["MsgBibli", "MsgDyn", "Msgbiblicolor"];
let TabGroupe1 = ["1", "2", "3"];
var aff = TabParam;
var infos = {
    Donnee1: 3,
    Donnee2: 4,
    Donnee3: 1,
    Donnee4: 0
}


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
        creerTable1();
    }
    else {
        creerTable2();
    }

}

function msgapply() {
    var message = document.getElementById('msg');
    message.innerHTML ="Modifications applied with success !";
    
}


postRequest('https://rltq36v83k.execute-api.eu-central-1.amazonaws.com/Integration/incident-masse', {})
  .then(data => console.log(data)) // Result from the `response.json()` call
  .catch(error => console.error(error))

function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  });
  .then(response => response.json())
}
