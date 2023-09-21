/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const area = function(l1, l2) {
   return l1 * l2
}
console.log(area(2, 6))
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function (param1, param2) {
if (param1 !== param2) {
    return param1 + param2
} else {
    return (param1 + param2) * 3
}
}
console.log(crazySum(2, 2))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (param) {
   if (param <= 19) {
   return Math.abs(param - 19)
   } else {
    return Math.abs(param - 19) * 3
   }
}
console.log(crazyDiff(20))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/
const boundary = function(n) {
    if(n >= 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(80))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function (string) {
if(string.startsWith('EPICODE')) {
    return string
} else {
    return 'EPICODE ' + string
}
}
console.log(epify('EPICODE IS GREAT'))
console.log(epify('WOW'))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function (num) {
    if(num % 3 === 0 || num % 7 === 0) {
        return true
    } else {
        return false
    }
}
console.log(check3and7(6))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString (str) {
    const splitStr= str.split('')
   const reverseStr = splitStr.reverse()
   return reverseStr.join('')
}
console.log(reverseString('EPICODE'))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/*

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (stringN) {
    return stringN.slice(1, stringN.length -1)
}
console.log(cutString('EPICODE'))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro 
 un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom (n) {
    const arr = []
    for (let i = 0; i < n; i++) {
 arr.push(Math.floor(Math.random() * 10))
}
return arr
}

console.log(giveMeRandom(8))

/* SCRIVI QUI LA TUA RISPOSTA */

