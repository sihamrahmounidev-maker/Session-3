//Exercice 1
let mots = ["chat", "ordinateur", "table", "programmation", "js" , "tv"];

let motsLongs = 0;

for (let i = 0; i < mots.length; i++) {
  if (mots[i].length > 5) {
    motsLongs++;
  }

  if(mots[i][0]==="t")
    console.log(mots[i]);
}
console.log(motsLongs);

//Exercice 2
let nombres = [4, 7, 2, 9, 5, 8];
let sommePairs = 0;

for(let index = 0; index < nombres.length ; index++){
    if (nombres[index] % 2 === 0){
        sommePairs=sommePairs+nombres[index];
    }
}
console.log(sommePairs);

//Exercice 3
let panier = [15, 42, 5, 89, 12, 50, 8];
let sommeTotale = 0;
let nombreChers = 0;
let sommeChers = 0;

for (let i = 0; i < panier.length; i++) {
    sommeTotale=sommeTotale+panier[i];

    if(panier[i]>=20){
        nombreChers++;
        sommeChers=sommeChers+panier[i]
    }
}
console.log(sommeTotale);
console.log(nombreChers);
console.log(sommeChers);