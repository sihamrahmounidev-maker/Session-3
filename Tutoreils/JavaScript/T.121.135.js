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