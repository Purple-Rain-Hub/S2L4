/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
let l1 = 4
let l2 = 3
area = (l1, l2) => {
    return l1*l2;
}

//console.log(area(l1,l2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

crazysum = (l1 , l2) => {
    if (l1 === l2)
        return (l1+l2)*3;
    else
    return l1+l2;
}

//console.log(crazysum(5,5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

crazyDiff = (l1) => {
    if (l1 >19)
        return Math.abs((l1-19)*3);
    else 
    return Math.abs(l1-19);
}

//console.log(crazyDiff(22))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

boundary = (l1) => {
    if(l1 <= 100 && l1 >= 20 || l1 === 400)
        return true;
    else 
    return "suca";
}

//console.log(boundary(10));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

epify = (l1) => {
    let l1Trimmed = l1.slice(0, 7);
    if(l1Trimmed === "EPICODE")
        return l1;
    else
    return "EPICODE "+l1;
}

//console.log(epify("EPICODE gay"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

check3and7 = (l1) => {
    if (l1 >0){
    if(l1 % 3 === 0 || l1% 7 === 0)
        return true;
    else 
    return false;
    }
    else
    return "numero negativo!"
}

//console.log(check3and7(-5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

reverseString = (l1) => {
    return l1.split("").reverse().join("");
}

//console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

upperFirst = (l1) => {
    let upperComplete = [];
    let splittato = l1.split(" ");
    for (let i = 0; i < splittato.length; i++) {
        let restoParola = splittato[i].slice(1);
        let upperWords = splittato[i].charAt(0).toUpperCase()+restoParola;
        upperComplete[i] = upperWords;
    }
    return upperComplete.join(" ")
}

//console.log(upperFirst("pollo congelato fritto"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

cutString = (l1) =>{
    return l1.slice(1,-1);
}

//console.log(cutString("salsicce bone"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero l1 e ritorna un'array contenente l1 numeri casuali inclusi tra 0 e 10.
*/
let random = [];

giveMeRandom = (l1) => {
    for (let i = 0; i < l1; i++) {
        random[i] = Math.floor(Math.random() * 11);
    }
    return random;
}

//console.log(giveMeRandom(4)) 