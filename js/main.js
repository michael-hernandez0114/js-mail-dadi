var inputEmail;
var validEmail = false;


var emails = ["primo@email.com","ciao@email.com","italia@email.com"];

inputEmail = prompt("Qual e il suo email?");

for (var i = 0; i < emails.length; i++) {
    if (emails[i] == inputEmail) {
        validEmail = true;
        console.log('valid email captured is:' + emails[i]);
    }

}

if (validEmail) {
    console.log('Upon checking the database, you can proceed');
    document.getElementById('mail-messaggio').innerHTML = 'La mail ' + inputEmail + ' e corretto. Welcome to the party!';
    document.getElementById('mail-messaggio').setAttribute("class", "verde text-center text-white");
}
else {
    console.log('Access denied.')
    document.getElementById('mail-messaggio').innerHTML = 'La mail ' + inputEmail + ' non e corretto. Access Denied!';
    document.getElementById('mail-messaggio').setAttribute("class", "rosso text-center font-bold");
}


/* Gioco dei dadi */
var primoDado;
var secondoDado;

primoDado = Math.floor(Math.random() * 10) + 1;
secondoDado = Math.floor(Math.random() * 10) + 1;

console.log('PrimoDado: ' + primoDado);
console.log('SecondoDado: ' + secondoDado);

if (primoDado > secondoDado) {
    console.log('PrimoDado a vinto');
}
else if (secondoDado > primoDado) {
    console.log('SecondDado a vinto');
}
else {
    console.log('Its a tie!');
}
