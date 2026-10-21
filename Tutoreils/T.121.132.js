// Exercice 1
let nombres = [10, 20, 30, 40];

let somme = nombres[0] + nombres[nombres.length - 1];

console.log(somme);

// Exercice 2
let temperatures = [18, 20, 23, 19];

console.log("Avant :", temperatures);

temperatures[1] = 21;
temperatures[temperatures.length - 1] = 25;

console.log("Après :", temperatures);

// Exercice 3
let notes = [12, 8, 15, 9, 17];

notes[1] = 10;
notes[3] = 11;

// notes[2] permet de lire la valeur de l'élément.
// notes[2] = 10 permet de modifier sa valeur en 10.

console.log("Première note :", notes[0]);
console.log("Dernière note :", notes[notes.length - 1]);
console.log("Tableau final :", notes);
console.log("Nombre de notes :", notes.length);