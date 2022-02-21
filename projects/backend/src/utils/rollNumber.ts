const rollNumber = (min: number, max: number): number =>
  min - 1 + Math.ceil(Math.random() * (max - min + 1));

export default rollNumber;
