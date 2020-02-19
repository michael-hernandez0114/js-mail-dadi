var inputEmail;
var validEmail = false;


var emails = ["primo@email.com","ciao@email.com","italia@email.com"];

inputEmail = prompt('Qual \xE8 il suo email?');

for (var i = 0; i < emails.length; i++) {
    if (emails[i] == inputEmail) {
        validEmail = true;
        console.log('valid email captured is:' + emails[i]);
    }

}

if (validEmail) {
    console.log('Upon checking the database, you can proceed');
    document.getElementById('mail-messaggio').innerHTML = 'La mail ' + inputEmail + ' \xE8 corretto. Welcome to the party!';
    document.getElementById('mail-messaggio').setAttribute("class", "bg-verde text-center text-white");
}
else {
    console.log('Access denied.')
    document.getElementById('mail-messaggio').innerHTML = 'La mail ' + inputEmail + ' non \xE8 corretto. Access Denied!';
    document.getElementById('mail-messaggio').setAttribute("class", "bg-rosso text-center font-bold");
}


/* Gioco dei dadi */
var primoDado;
var secondoDado;

primoDado = Math.floor(Math.random() * 10) + 1;
secondoDado = Math.floor(Math.random() * 10) + 1;

console.log('PrimoDado: ' + primoDado);
console.log('SecondoDado: ' + secondoDado);

document.getElementById('primo-dado').innerHTML = 'Primo dado ha --> ' + primoDado;
document.getElementById('secondo-dado').innerHTML = 'Secondo dado ha --> ' + secondoDado;

if (primoDado > secondoDado) {
    console.log('PrimoDado a vinto');
    //document.getElementById('primo-dado').setAttribute("class","bg-verde");
    document.getElementById('primo-dado').classList.add("bg-verde");
    document.getElementById('primo-dado').classList.add("border-top");
    document.getElementById('primo-dado').classList.add("border-right");

}
else if (secondoDado > primoDado) {
    console.log('SecondDado a vinto');
    //document.getElementById('secondo-dado').setAttribute("class","bg-verde");
    document.getElementById('secondo-dado').classList.add("bg-verde");
    document.getElementById('secondo-dado').classList.add("border-top");
    document.getElementById('secondo-dado').classList.add("border-left");
}
else {
    console.log('Its a tie!');
    //document.getElementById('primo-dado').setAttribute("class","bg-grigio");
    //document.getElementById('secondo-dado').setAttribute("class","bg-grigio");
    //document.getElementById('secondo-dado').classList.add("text-center");
    document.getElementById('primo-dado').classList.add("bg-grigio");
    document.getElementById('primo-dado').classList.add("border-top");
    document.getElementById('primo-dado').classList.add("border-right");
    document.getElementById('secondo-dado').classList.add("bg-grigio");
    document.getElementById('secondo-dado').classList.add("border-top");
    document.getElementById('secondo-dado').classList.add("border-left");
    alert('Its a tie!');
}
