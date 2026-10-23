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

//Exercice


let produits = ["Clavier", "Souris", "Écran", "Casque"];
let prix = [150, 80, 1200, 250];
let stocks = [10, 0, 5, 3];

let totalStock = 0;
let prixMax = prix[0];
let produitPlusCher = produits[0];

for (let i = 0; i < produits.length; i++) {
    console.log(produits[i], "=>", prix[i], "dhs =>", stocks[i], "en stock");

    // Produits sans stockd
    if (stocks[i] === 0) {
        console.log("Produit en rupture de stock :", produits[i]);
    }

    // Valeur de chaque produit
    let valeurProduit = prix[i] * stocks[i];
    console.log("La valeur du produit", produits[i], "est :", valeurProduit, "dhs");

    // Calcul de la valeur totale
    totalStock = totalStock + valeurProduit;

    // Recherche du produit le plus cher
    if (prixMax < prix[i]) {
        prixMax = prix[i];
        produitPlusCher = produits[i];
    }

    // Produits dont le stock est inférieur à 5
    if (stocks[i] < 5) {
        console.log("Stock inférieur à 5 :", produits[i]);
    }
}

console.log("Valeur totale du stock :", totalStock, "dhs");
console.log("Le produit le plus cher est :", produitPlusCher);
console.log("Son prix est :", prixMax, "dhs");
