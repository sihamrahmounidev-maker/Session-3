# Découvrir une entité à partir d'un identifiant ou d'une répétition

## Tableau de synthèse

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance fonctionnelle        |
| --------------- | -------------- | ------------------- | ------------------- | ------------------------------- |
| `nom_auteur`    | Madani         | Auteur              | `email_auteur`      | `email_auteur -> nom_auteur`    |
| `nom_ville`     | Tanger, Rabat  | Ville               | `id_ville`          | `id_ville -> nom_ville`         |
| `nom_categorie` | Développement  | Catégorie           | `id_categorie`      | `id_categorie -> nom_categorie` |

## Explication

* **Auteur :** L'adresse email permet d'identifier un auteur de manière unique dans les données fournies.
* **Ville :** Les valeurs « Tanger » et « Rabat » se répètent. Elles représentent des villes, qui peuvent être modélisées comme une entité indépendante.
* **Catégorie :** La valeur « Développement » se répète dans plusieurs articles. Elle représente une catégorie, qui peut être modélisée comme une entité indépendante.

## Conclusion

L'observation des répétitions permet de découvrir des réalités distinctes : **Auteur**, **Ville** et **Catégorie**.

Chaque entité possède un identifiant proposé et une dépendance fonctionnelle correspondante.

