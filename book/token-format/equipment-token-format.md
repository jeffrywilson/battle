# Equipment Token Format (20)

Equipment is the most flexible type as it will account for a growing list of tokens over time. There will be a number of token capabilities added to the BBU equipment token collection through crafting and minting new equipment based on game modes.

```
TOKEN_TYPE  EQUIPMENT_TYPE  EQUIPMENT_SLOT  INCREMENTED_ID
20          02              01              25

20: token_type
02: equipment_type
01: equipment_slot
25: incremented_id
```

## Equipment Type (01, 02, 03, 04)

_Example Equipment Token Id:_

```
02
equipment_type
```

The equipment type denotes the overall type of equipment:

- 01: Weapon
- 02: Armor
- 03: Consumable
- 04: Companion

## Equipment Slot

_Example Equipment Token Id:_

```
01
equipment_slot
```

The equipment slot is a secondary value of associated equipment type

- Weapon
  - 01: One-Handed
  - 02: Two-Handed
  - 03: Off-Hand
- Armor
  - 01: Body
  - 02: Head
  - 03: Hands
  - 04: Feet
- Consumable
  - 01: Basic (default)
- Companion
  - 01: Basic (default)
  - Yet to be implemented

## Incremented Id (1+)

_Example Equipment Token Id:_

```
25
incremented_id
```

As a new item is minted, the identifier will increment. The final 1+ digits of the numeric id will be the specific token identifier.
