# Règles de calcul budgétaire — V35

## Principe central

Le budget global est l’enveloppe mère du mois. Les budgets par catégorie sont une ventilation interne de cette enveloppe. Ils ne doivent jamais être additionnés au budget global pour calculer la cagnotte.

## Budget global

Le budget global correspond à la dépense prévue globale du mois.

## Budgets par catégorie

Les budgets par catégorie servent à contrôler les dépassements par catégorie. Ils ne créent pas une enveloppe supplémentaire.

## Dépenses réelles

Les dépenses réelles viennent uniquement des lignes de l’historique du mois actif.

## Cagnotte non dépensée

Formule officielle :

```text
Cagnotte = max(0, budget global du mois - dépenses réelles du mois)
```

Exemple :

```text
Budget global : 200 €
Dépenses réelles : 100 €
Cagnotte : 100 €
```

La cagnotte ne doit jamais être calculée avec :

```text
budget global + total des budgets par catégorie - dépenses réelles
```

Elle ne doit pas non plus être calculée uniquement avec :

```text
total des budgets par catégorie - dépenses réelles
```

## Dépassement par catégorie

Formule officielle :

```text
Dépassement = max(0, dépenses réelles de la catégorie - budget prévu de la catégorie)
```

## Alerte de cohérence

Si le total des budgets par catégorie dépasse le budget global, l’application affiche une alerte. Cette alerte ne modifie pas la cagnotte.

## Report de cagnotte

Le report de cagnotte est une réserve transférée au mois suivant. Il augmente l’enveloppe disponible du mois suivant, mais il ne doit pas être recalculé comme une nouvelle économie.

Un même mois ne peut être reporté qu’une seule fois vers le mois suivant.


## V36 — KPI, seuil 80 % et notifications

- Le KPI d’accueil utilise l’enveloppe disponible du mois : budget global + report de cagnotte reçu.
- Couleur du KPI et du camembert : vert avant 80 %, orange de 80 % à 100 %, rouge au-delà de 100 %.
- Si le budget global est à 0 €, la cagnotte reste à 0 €, mais les dépenses et les dépassements par catégorie continuent d’être calculés.
- Les dépassements par catégorie sont indépendants du budget global : ils dépendent uniquement du budget de la catégorie et des dépenses réelles de cette catégorie.
- Les alertes visuelles respectent les réglages Notifications : alerte 80 %, alerte dépassement et rappel quotidien.
