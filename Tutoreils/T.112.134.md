# Modéliser une liaison complexe avec un identifiant composé

## 1. CLIENT

CLIENT
---------------
id_client
nom_client

## 2. COMMANDE

COMMANDE
---------------
id_commande
date_commande
id_client

## 3. PRODUIT

PRODUIT
---------------
id_produit
nom_produit

## 4. LIGNE_COMMANDE

LIGNE_COMMANDE
---------------
id_commande, id_produit
quantite_commandee

# Exercice MCD — Restaurant

CLIENT
-------------------------
# code_client
nom_client
prenom_client
telephone_client
email_client
          |
        (1,N)
          |
        PASSER
          |
        (1,1)
          |
COMMANDE
-------------------------
# code_commande
date_commande
heure_commande
statut_commande
          |
        (1,N)
          |
       CONTENIR
-------------------------
quantite_commandee
prix_unitaire_commande
          |
        (0,N)
          |
REPAS
-------------------------
# code_repas
nom_repas
description_repas
prix_repas
categorie_repas