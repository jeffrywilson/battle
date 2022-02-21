const setWeightedRoll = (): number => {
  const weight = Math.ceil(Math.random() * 100);

  if (weight >= 1 && weight <= 5) {
    console.log('you rolled %s, thats a 5!!', weight);
    return 5;
  } else if (weight >= 6 && weight <= 30) {
    console.log('you rolled %s, thats a 4!!', weight);
    return 4;
  } else if (weight >= 31 && weight <= 90) {
    console.log('you rolled %s, thats a 3!!', weight);
    return 3;
  } else if (weight >= 91 && weight <= 100) {
    console.log('you rolled %s, thats a 2!!', weight);
    return 2;
  } else return 0;
};

const setBalancedRoll = (): number => {
  const weight = Math.ceil(Math.random() * 100);

  if (weight >= 1 && weight <= 5) {
    console.log('you rolled %s, thats a 5!!', weight);
    return 5;
  } else if (weight >= 6 && weight <= 30) {
    console.log('you rolled %s, thats a 4!!', weight);
    return 4;
  } else if (weight >= 31 && weight <= 95) {
    console.log('you rolled %s, thats a 3!!', weight);
    return 3;
  } else if (weight >= 96 && weight <= 100) {
    console.log('you rolled %s, thats a 2!!', weight);
    return 2;
  } else return 0;
};

type Beast =
  | 'Crocodile'
  | 'Hippopotamus'
  | 'Elephant'
  | 'Boar'
  | 'Leopard'
  | 'Tiger'
  | 'Deer'
  | 'Rabbit'
  | 'Wild Goat'
  | 'Bear'
  | 'Lion'
  | 'Dog';

type Attribute = 'might' | 'brawn' | 'grace' | 'wit' | 'will' | 'balanced';

const generateAttributes = (beast: Beast): number => {
  const dieRoll = (attribute: Attribute): number => {
    const attributeArr: Attribute[] = [
      'might',
      'brawn',
      'grace',
      'wit',
      'will',
    ];

    const attributeMap: { [key: string]: number } = {
      might: 0,
      brawn: 0,
      grace: 0,
      wit: 0,
      will: 0,
    };

    const getAttributeThatsZero = (firstRoll: number): string => {
      const randomAttr = attributeArr[Math.floor(Math.random() * 5)];

      if (attributeMap[randomAttr] >= firstRoll) {
        console.log(`!! %s was already assigned, re-rolling !!`, randomAttr);
        return getAttributeThatsZero(firstRoll);
      } else {
        console.log(`rolling for %s `, randomAttr);
        return randomAttr;
      }
    };

    if (attribute === 'balanced') {
      const randomAttr = attributeArr[Math.floor(Math.random() * 5)];

      console.log(
        'You chose the ' +
          beast +
          ', their a balanced beast, your randomly selected attribute is ' +
          randomAttr +
          '. Lets roll for it...',
      );

      attributeMap[randomAttr] = setBalancedRoll();
    } else {
      console.log(
        'You chose the ' +
          beast +
          ', their attribute is ' +
          attribute +
          '. Lets roll for it...',
      );

      attributeMap[attribute] = setWeightedRoll();
    }

    if (Object.values(attributeMap).reduce((a, c) => a + c) === 5) {
      attributeMap[getAttributeThatsZero(5)] = 2;

      for (const [key, value] of Object.entries(attributeMap)) {
        if (!value) attributeMap[key] = 1;
      }
    }

    if (Object.values(attributeMap).reduce((a, c) => a + c) === 4) {
      if (Math.random() > 0.5) {
        attributeMap[getAttributeThatsZero(4)] = 3;

        for (const [key, value] of Object.entries(attributeMap)) {
          if (!value) attributeMap[key] = 1;
        }
      } else {
        attributeMap[getAttributeThatsZero(4)] = 2;
        attributeMap[getAttributeThatsZero(2)] = 2;

        for (const [key, value] of Object.entries(attributeMap)) {
          if (!value) attributeMap[key] = 1;
        }
      }
    }

    if (Object.values(attributeMap).reduce((a, c) => a + c) === 3) {
      if (Math.random() > 0.5) {
        attributeMap[getAttributeThatsZero(3)] = 3;
        attributeMap[getAttributeThatsZero(3)] = 2;

        for (const [key, value] of Object.entries(attributeMap)) {
          if (!value) attributeMap[key] = 1;
        }
      } else {
        attributeMap[getAttributeThatsZero(3)] = 2;
        attributeMap[getAttributeThatsZero(2)] = 2;
        attributeMap[getAttributeThatsZero(2)] = 2;

        for (const [key, value] of Object.entries(attributeMap)) {
          if (!value) attributeMap[key] = 1;
        }
      }
    }

    if (Object.values(attributeMap).reduce((a, c) => a + c) === 2) {
      for (const [key, value] of Object.entries(attributeMap)) {
        if (!value) attributeMap[key] = 2;
      }
    }

    console.log(`attributeMap==========`, attributeMap);
    console.log(
      `accumulated attribute value =======`,
      Object.values(attributeMap).reduce((a, c) => a + c),
    );

    const beastAttributeInt: number = parseInt(
      Object.values(attributeMap).join(''),
      10,
    );

    return beastAttributeInt;
  };

  if (beast === 'Crocodile' || beast === 'Hippopotamus') {
    return dieRoll('might');
  }

  if (beast === 'Elephant' || beast === 'Boar') {
    return dieRoll('brawn');
  }

  if (beast === 'Leopard' || beast === 'Tiger') {
    return dieRoll('grace');
  }

  if (beast === 'Deer' || beast === 'Rabbit') {
    return dieRoll('wit');
  }

  if (beast === 'Wild Goat' || beast === 'Bear') {
    return dieRoll('will');
  }

  if (beast === 'Lion' || beast === 'Dog') {
    return dieRoll('balanced');
  }

  return;
};

console.log('Attribute integer is....', generateAttributes('Boar'));

export default generateAttributes;
