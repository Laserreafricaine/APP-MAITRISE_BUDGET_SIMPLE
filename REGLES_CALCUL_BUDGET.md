# Règles de calcul budgétaire — V37

## 1. Budget global
Le budget global est l’enveloppe principale du mois.

Il sert à calculer :
- le KPI global de l’accueil ;
- la cagnotte non dépensée ;
- la cohérence entre enveloppe globale et budgets par catégorie.

## 2. Budgets par catégorie
Les budgets par catégorie sont une ventilation interne du budget global.

Ils servent à calculer les dépassements par catégorie.

Important : les budgets par catégorie ne doivent jamais être additionnés au budget global pour calculer la cagnotte.

## 3. Dépenses réelles
Les dépenses réelles viennent uniquement de l’historique du mois actif.

## 4. Cagnotte non dépensée
La formule officielle est :

```text
Cagnotte = max(0, budget global du mois - dépenses réelles du mois)
```

Si le budget global est à 0 €, la cagnotte vaut 0 €.

## 5. Dépassement par catégorie
La formule officielle est :

```text
Dépassement catégorie = max(0, dépenses réelles de la catégorie - budget prévu de la catégorie)
```

Les dépassements par catégorie sont indépendants du budget global. Le budget global ne doit pas bloquer les dépassements.

## 6. Alerte de cohérence budgétaire
Si la somme des budgets par catégorie dépasse le budget global, l’application doit afficher une alerte.

Cette alerte ne modifie pas les calculs de cagnotte ni les calculs de dépassements par catégorie.

## 7. KPI accueil et seuil 80 %
Le KPI d’accueil et le camembert suivent cette règle :

```text
< 80 % : vert
80 % à 100 % : orange
> 100 % : rouge
```

Si le budget est dépassé, l’accueil doit afficher “Dépassement” plutôt qu’un reste négatif.

## 8. Notifications et rappels
Les alertes doivent respecter les boutons ON/OFF :

- Alerte à 80 % ;
- Alerte dépassement ;
- Rappel quotidien.

Le seuil affiché dans l’interface doit être le seuil utilisé dans les calculs.

## 9. Report de cagnotte
Le report de cagnotte ajoute uniquement la cagnotte disponible du mois vers le mois suivant.

Le report :
- n’est pas une dépense ;
- n’est pas une nouvelle économie ;
- ne doit pas être reporté deux fois pour le même mois.

## 10. Sauvegarde import / export JSON
L’export JSON est la sauvegarde complète de l’application locale.

Il doit contenir :
- les dépenses ;
- les catégories ;
- les budgets ;
- les couleurs ;
- les paramètres ;
- les notifications ;
- les reports de cagnotte ;
- les catégories archivées.

L’import JSON remplace les données actuelles uniquement après confirmation.

Avant l’import, l’application crée une copie de secours dans le stockage local du navigateur.

