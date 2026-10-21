# T.112.133 — Construire les entités à partir des données

## 1. AUTEUR

AUTEUR
---------------
id_auteur
nom_auteur
prenom_auteur
email_auteur
mot_de_passe_auteur

## 2. CATEGORIE

CATEGORIE
---------------
id_categorie
nom_categorie
description_categorie

## 3. ARTICLE

ARTICLE
---------------
id_article
titre_article
contenu_article
date_publication
image_article
statut_article
id_auteur
id_categorie

## Remarque

- `id_auteur`, `id_categorie` et `id_article` sont des identifiants techniques proposés.
- `id_auteur` et `id_categorie` permettent de relier un article à son auteur et à sa catégorie.
- `duree_lecture` est exclue des attributs stockés, car il s'agit d'une donnée calculée.
- `email_auteur` est conservé comme attribut de l'entité AUTEUR et doit être unique.
- `mot_de_passe_auteur` est stocké sous forme de hash pour des raisons de sécurité.