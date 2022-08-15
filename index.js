Cards = (["Sam", "Brenda", "Ada" ,"Ali"]);
function wrapGifts(Cards) {
    for (let i = 0; i < Cards.length; i++) {
      console.log(`Thank you, ${Cards[i]}, for the wonderful birthday gift!`);
    }
    return Cards;
    
  }
  wrapGifts(Cards);// Code your solutions in this file
