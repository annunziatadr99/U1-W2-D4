/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function(l1,l2) {
  return l1 * l2;
  
}
const rettangolo = area(3,5)
console.log (rettangolo)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }

}
const molt = crazySum (7,7)
console.log (molt)
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff= function (num3) {
  if (num3 > 19) {
    return (num3 - 19) * 3;
  } else {
    return 19 - num3;
  }
}

const diff = crazyDiff(12)
console.log(diff)


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (n > 20 && n <= 100 || n === 400 ) {
    return true
  }else{
    return false ;
  }
  
}
console.log (boundary(77))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = (string) => {
  if (string.startsWith("EPICODE")) {    // 
    return string;
  } else {
    return "EPICODE" + " " + string;
  }
}
console.log(epify("Ciao sono Dario"))
console.log(epify("EPICODE,Ciao sono Dario"))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = (num) => {
 if (num % 3 === 0 && num >= 0 || num % 7 === 0 && num >= 0) {
  return true
 }else{
    return false
 }
}
console.log(check3and7(7));
console.log(check3and7(3));
console.log(check3and7(20));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString =(string) => {
  let splitString = string.split("")
  let reverseString = splitString.reverse()
  let finalString = reverseString.join("")
  return finalString;
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = (string) => {
  let words = string.split(" ")
  let finalString = []
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0);
    let upperCaseChar = firstChar.toUpperCase();
    let cutString = words[i].slice(1);
    let finalWord = upperCaseChar + cutString;
    finalString.push(finalWord);
    
  }
  console.log(finalString.join(" "))
}
upperFirst("ciao mi chiamo dario")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
