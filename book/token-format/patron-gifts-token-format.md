# Trophies Token Format (40)

Patron Gifts are consumable items purchased by Patrons to use within the context of a specific event.

At time of writing, the Patron Gifts are WIP and there are no additional parameters supplied to the gift tokens as they are not limited by faction and usage is determined within the context of the event in which they are being used.

**The effects are based on the logic within the event in which they are consumed, using the token id of the token as object lookup.**

_Example Patron Gift Token Id:_

```
4025
```

```
TOKEN_TYPE  INCREMENTED_ID
40          25

40: token_type
25: incremented_id
```

## Incremented Id (1+)

_Example Patron Gift Token Id:_

```
25
incremented_id
```

As a new item is minted, the identifier will increment. The final 1+ digits of the numeric id will be the specific token identifier.
