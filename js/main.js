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
    document.getElementById('mail-messaggio').innerHTML = 'La mail:' + inputEmail + ' non e corretto. Access Denied';
    document.getElementById('mail-messaggio').setAttribute("class", "rosso");
}
