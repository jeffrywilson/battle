// @dev Will return a mutated array unless immutable is passed
const shuffleArr = <T>(array: T[], immutable = false): T[] => {
  let index = array.length;
  let randomIndex: number;

  const temp: T[] = immutable ? [...array] : array;

  while (index !== 0) {
    randomIndex = Math.floor(Math.random() * index);

    index--;

    [temp[index], temp[randomIndex]] = [temp[randomIndex], temp[index]];
  }

  return temp;
};

export default shuffleArr;
