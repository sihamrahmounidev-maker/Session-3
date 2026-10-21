//Exercice 1
let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];
let recherche = "Nadia";
let position = -1;

for (let index = 0; index < prenoms.length; index++) {
   if (prenoms[index] === recherche){
        position = index;
    }
    
}
if (position !== -1) {
    console.log(recherche + " se trouve à l'index " + position);
} else {
    console.log("Prénom introuvable");
}

//Exercice 2
let notes = [12, 17, 9, 14, 18, 11];
let maximum = notes[0];

for (let i = 0; i < notes.length; i++) {
    if(maximum<notes[i]){
        maximum = notes[i];
    }
    
}
console.log("Le maximum est : "+maximum);

//Exercice 3
let note = [12, 17, 9, 14, 18, 11];
let minimum = note[0];

for (let i = 0; i < notes.length; i++) {
    if(minimum>notes[i]){
        minimum = notes[i];
    }
    
}
console.log("Le minimum est : "+minimum);