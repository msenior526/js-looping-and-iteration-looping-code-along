// Code your solutions in this file
function writeCards(names, eventType) {
    let thankYouMessage = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${eventType} gift!`);
    }
    return thankYouMessage;
}

function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer -= 1;
    }
    console.log(integer)
}