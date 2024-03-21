//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 14;
let num2 = 22;

if (num1 > num2) {
  document.getElementById("algoritmo").innerHTML = num1 + " è più grande di " + num2;
  console.log(`${num2} e' piu' grande di ${num1}`);
} else {
  console.log(`${num2} e' piu' grande di ${num1}`);
  document.getElementById("algoritmo").innerHTML = num2 + " è più grande di " + num1;
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
const num = 2;
if (num < 5) {
  document.getElementById("blocco").innerHTML = `Tiny`;
  console.log("Tiny");
} else if (num < 10) {
  document.getElementById("blocco").innerHTML = `Small`;
  console.log("Small");
} else if (num < 15) {
  document.getElementById("blocco").innerHTML = `Medium`;
  console.log("Medium");
} else if (num < 20) {
  document.getElementById("blocco").innerHTML = `Large`;
  console.log("Large");
} else if (num >= 20) {
  document.getElementById("blocco").innerHTML = `Huge`;
  console.log("Huge");
}

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    document.getElementById("ascendente").innerHTML =
      "3 e 8 non sono stati stampati in console perchè c'è il metodo continue";
    continue;
  } else console.log(i);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, "pari");
  } else console.log(i, "dispari");
  document.getElementById("ciclo").innerHTML = "il tutto è stato stampato in console";
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numA = 6;
let numB = 2;
if (numA === 8 || numB === 8 || numA + numB === 8 || numA - numB === 8) {
  console.log("uno dei casi si e' verificato");
  document.getElementById("extra1").innerHTML = "il caso che si è verificato è numA + numB";
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 90;
let totaleConSpedizione = 0;
let spedizione = 10;
if (totalShoppingCart > 50) {
  totaleConSpedizione = totalShoppingCart;
  console.log("il costo è " + totaleConSpedizione + " con spedizione gratuita");
} else {
  totaleConSpedizione = totalShoppingCart + spedizione;
  console.log("il costo è " + totaleConSpedizione + " compresa la spedizione");
}
let totalShoppingCard = 30;
let totaleConSpedizioneCard = 0;
let spedizioneCard = 10;
if (totalShoppingCard > 50) {
  totaleConSpedizioneCard = totalShoppingCard;
  console.log("il costo è " + totaleConSpedizioneCard + " con spedizione gratuita");
} else {
  totaleConSpedizioneCard = totalShoppingCard + spedizione;
  console.log("il costo è " + totaleConSpedizioneCard + " compresa la spedizione");
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingBf = 45;
let totaleConSpedizioneBf = 0;
let spedizioneBf = 10;
let totaleConSconto = totalShoppingBf - (totalShoppingBf * 20) / 100;
//console.log(totaleConSconto); //
//proporzione per il calcolo della percentuale:
// 20:100 = x: totalShoppingCart
if (totaleConSconto > 50) {
  totaleConSpedizioneBf = totaleConSconto;
  console.log("il costo è " + totaleConSpedizioneBf + " con spedizione gratuita");
} else {
  totaleConSpedizioneBf = totaleConSconto + spedizioneBf;
  console.log("il costo è " + totaleConSpedizioneBf + " con spedizione compresa");
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let gender;
let isMale = true;
if (isMale) {
  //equivalente di isMale === true
  gender = "male";
  console.log(gender);
} else {
  gender = "female";
  console.log(gender);
}

let gender1;
let isMale1 = false;
if (isMale1) {
  //equivalente di isMale === true
  gender1 = "male";
  console.log(gender1);
} else {
  gender1 = "female";
  console.log(gender1);
}
//con operatore ternario
isMale ? (gender = "male" && console.log(gender)) : (gender = "female" && console.log(gender));

//con operatore ternario
isMale1 ? (gender1 = "male" && console.log(gender1)) : (gender1 = "female" && console.log(gender1));

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {
  let risultatoDaStampare = i;
  let divisoreDiTre = i % 3 === 0;
  let divisoreDiCinque = i % 5 === 0;
  if (divisoreDiCinque && divisoreDiTre) {
    risultatoDaStampare = "FizzBuzz";
  } else if (divisoreDiTre) {
    risultatoDaStampare = "Fizz";
  } else if (divisoreDiCinque) {
    risultatoDaStampare = "Buzz";
  }
  console.log(risultatoDaStampare);
}
