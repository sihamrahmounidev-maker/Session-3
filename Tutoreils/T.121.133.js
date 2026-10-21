//Exircice 1
let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

for (let i = 0; i < jours.length; i++) {
    console.log("Jour de la semaine :"+ jours[i]);
}

//Exercice 2
let couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];

for (let i = couleurs.length-1; i >= 0;i--){
    console.log("la couleur est :" + couleurs[i]);
}

for (let j = 0; j < couleurs.length; j=j+2){
    console.log("la couleur est :" + couleurs[j]);
}

//Exercice 3
let sequence = ["Ignition", 1, 2, 3, 4, 5, "Préparation"];

  // On utilise sequence.length - 1 car l'index commence à 0

for (let index = sequence.length-1; index >= 0; index--) {
    console.log(sequence[index]);
}
console.log("Décollage !")