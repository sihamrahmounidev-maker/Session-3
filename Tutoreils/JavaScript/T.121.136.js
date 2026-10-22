let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let somme = 0;
let max = ventes[0];
let min = ventes[0];
let nbExceptionnelles = 0;
let sommeExceptionnelles = 0;

for (let index = 0; index < ventes.length; index++) {
  if (max < ventes[index]) {
    max = ventes[index];
  }

  if (min > ventes[index]) {
    min = ventes[index];
  }

  somme=somme+ventes[index];

  if(ventes[index]>=130){
    nbExceptionnelles++;
    sommeExceptionnelles=sommeExceptionnelles+ventes[index];
  }
}

console.log("Nombre de ventes :", ventes.length);
console.log("Chiffre d'affaires total :", somme);
console.log("Vente maximale :", max);
console.log("Vente minimale :", min);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("Somme des ventes exceptionnelles :", sommeExceptionnelles);