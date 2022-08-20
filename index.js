//const names = [];
//onst suprise = 'suprise';



function writeCards(names,suprise){
    let thankYouCards = [];
    for(const name of names){
        let msg=  `Thank you, ${name}, for the wonderful ${suprise} gift!`;
        thankYouCards.push(msg);
    }
//console.log(thankYouCards);
return thankYouCards;
}
console.log(writeCards([" Guadalupe","Ollie", "Aki"], "surprise"));


function countDown(number){
    let countDown=10;
    while(countDown>=-0){
        console.log(countDown--);
    }
}

module.exports={writeCards , countDown}