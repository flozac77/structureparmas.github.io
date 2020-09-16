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

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJraWQiOiJ4RGYxTzBlQVwvb1FYa2k1eFNvcXdOSDU2VFwvbjlTSkpoOEZSd3VzVFBUK2s9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZWM1MnUzbzMyNDFjZHViNWd1bnQ0dnNjZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoic25vdy1wdXJlY2xvdWRcL3JlYWQiLCJhdXRoX3RpbWUiOjE2MDAyNDM3MTcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX2ZEaW9UQzMzYyIsImV4cCI6MTYwMDI0NzMxNywiaWF0IjoxNjAwMjQzNzE3LCJ2ZXJzaW9uIjoyLCJqdGkiOiJlN2RiYTJmYy1hYTkzLTQ2N2ItOWM0My0xNmVlZDlhNGMzNTAiLCJjbGllbnRfaWQiOiIyZWM1MnUzbzMyNDFjZHViNWd1bnQ0dnNjZCJ9.IqcE5WC3n3NNX2r33NUtNm-yOmi-GPERMefSs90OzQFa-cbi4AOcPCqPzmnk2qmMUQpy760fWyb44VqjzBjV5t61RYR1y-yIIinNKNFq-AxsC1EcoGfMRK4Ffetpig-w4t-7OuJfwvSt42v_W99v1VB9TGIc-JlfTH_vUp1hoSMEecpQiBxPfh8ijpneVxjf1uJE9YztA_q7gnPy4nims2RESE2hWeMLzkbPehp9XHCy5Ud6k4BAQsEBZMyPvfkmpL2AiAKSYCCd5bVBzpAmWGCe4sdmXtDYGKzRhHTkTCFegsAimRqiUduwLD4uf715bKH3yfOwtocKKz1ASzqBew");
myHeaders.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://rltq36v83k.execute-api.eu-central-1.amazonaws.com/Integration/incident-masse", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
















