
let ventes = [120, 85, 200, 150, 75, 200, 130, 95, 180, 110];

let somme = 0;
let taille = ventes.length;
let max = ventes[0];
let min = ventes[0];
let nbExceptionnelles = 0;
let sommeExceptionnelles = 0;
let recherche = 130;
let position = -1;
let more = 0;

for (let i = 0; i < ventes.length; i++) {
    somme = somme + ventes[i];

    if (max < ventes[i]) {
        max = ventes[i];
    }

    if (min > ventes[i]) {
        min = ventes[i];
    }

    if (ventes[i] >= 150) {
        nbExceptionnelles++;
        sommeExceptionnelles = sommeExceptionnelles + ventes[i];
    }

    if (ventes[i] === recherche) {
        position = i;
    }

    if (ventes[i] > 100) {
        more++;
    }
}

console.log("Nombre de ventes :", taille);
console.log("Chiffre d'affaires total :", somme);
console.log("Vente maximale :", max);
console.log("Vente minimale :", min);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("Somme des ventes exceptionnelles :", sommeExceptionnelles);
console.log("Moyenne :", somme / taille);

if (position !== -1) {
    console.log("Vente trouvée à l'index :", position);
} else {
    console.log("Vente non trouvée");
}

console.log("Nombre de ventes supérieures à 100 :", more);

ventes[4] = 140;
console.log("Nouveau tableau :", ventes);
