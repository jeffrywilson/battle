# Trophies Token Format (30)

At the beginning of the BBU, trophies will fall under 1 of 3 categories: Calad, Esher, or Valorin.

_Example Trophy Token Id:_

```
300225
```

```
TOKEN_TYPE  FACTION INCREMENTED_ID
30          02      25

30: token_type
02: faction
25: incremented_id
```

## Faction (01, 02, 03)

_Example Trophy Token Id:_

```
02
faction
```

This denotes the faction that crafted the trophy:

- 01: Calad
- 02: Esher
- 03: Valorin

As a trophy given for the same event or achievement could vary in appearance depending on the faction awarding said trophy, denotation of the faction which crafted it will determine its appearance. Materials—in regard to crafting—however, will be the same regardless of the faction crafting the item.

## Incremented Id (1+)

_Example Trophy Token Id:_

```
25
incremented_id
```

As a new item is minted, the identifier will increment. The final 1+ digits of the numeric id will be the specific token identifier.
