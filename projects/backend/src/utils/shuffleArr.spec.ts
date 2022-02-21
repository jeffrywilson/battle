import shuffleArr from './shuffleArr';

describe('shuffleArr', () => {
  it('should do return an array the same length as the one provided', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(shuffleArr(arr).length).toEqual(arr.length);
  });

  it('should contain all original elements', () => {
    const arr = [1, 2, 3, 4, 5];

    const snapshot = [...arr];

    shuffleArr(arr);

    expect(arr).toEqual(expect.arrayContaining(snapshot));
  });

  it('should shuffle in place, mutating the original array', () => {
    const arr = [1, 2, 3, 4, 5];

    const snapshot = arr.map((val) => val);

    shuffleArr(arr);

    const snapshotPostShuffle = arr.map((val) => val);

    expect(snapshotPostShuffle.join('')).not.toEqual(snapshot.join(''));
  });

  it('should not mutate original array if passing true as second arg', () => {
    const arr = [1, 2, 3, 4, 5];

    const shuffled = shuffleArr(arr, true);

    expect(arr.map((val) => val)).toEqual([1, 2, 3, 4, 5]);
  });
});
