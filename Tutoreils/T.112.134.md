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