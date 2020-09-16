let TabParam = ["MsgBibli", "MsgDyn", "Msgbiblicolor"];
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


postRequest('https://rltq36v83k.execute-api.eu-central-1.amazonaws.com/Integration/incident-masse', {user: 'Krunal'})
  .then(data => console.log(data)) // Result from the `response.json()` call
  .catch(error => console.error(error))

function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJraWQiOiJ4RGYxTzBlQVwvb1FYa2k1eFNvcXdOSDU2VFwvbjlTSkpoOEZSd3VzVFBUK2s9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZWM1MnUzbzMyNDFjZHViNWd1bnQ0dnNjZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoic25vdy1wdXJlY2xvdWRcL3JlYWQiLCJhdXRoX3RpbWUiOjE2MDAyNjA4MTQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX2ZEaW9UQzMzYyIsImV4cCI6MTYwMDI2NDQxNCwiaWF0IjoxNjAwMjYwODE0LCJ2ZXJzaW9uIjoyLCJqdGkiOiI5MTEyNWNjMS0zYzYxLTQ0NWItOTI2ZC1jNDZmY2I2ZDMzMzAiLCJjbGllbnRfaWQiOiIyZWM1MnUzbzMyNDFjZHViNWd1bnQ0dnNjZCJ9.LZztVSc1-3jlsyWUlDGOxEJEyVanrWbP6a8Q8TzS089e87_tjSBTAyourx4HdknAAa4iP_cKNnwZQzIYOEBVxAzPJl85s8roJG1BR5KnIfsX_ab0DOUZvC0pCekhefne_VVZrM6F47i2ue7fcoFH69ohKieNxvVkKKWAX0bpUPSsUW4dqS87B6EiVQ_CMDtZD8JPyazwqJRBKoaOddfmPuxMFnxV8Mz2l534XWx1C8596qRSWHPnydK0RXNPyuOnRG--iW5RdVKETxCGruhDYzukrnPAzOI2R5fAaGG5j_e-9jCAD9awxHz6zTCj630GkQnnqkgjgU8g2BWUxdbv2A'
    }),
  }).then(response => response.json())
}
