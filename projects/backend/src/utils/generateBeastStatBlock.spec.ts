import { BeastAttributes } from '../types/BeastAttributes';

import generateBeastStatBlock from './generateBeastStatBlock';

describe('generateBeastStatBlock', () => {
  it('should return an object', () => {
    expect(typeof generateBeastStatBlock(12345)).toEqual('object');
  });

  it('should return five properties', () => {
    const block = generateBeastStatBlock(12345);

    expect(Object.keys(block).length).toEqual(5);
  });

  it('should return attributes as keys', () => {
    const block = generateBeastStatBlock(12345);

    expect(Object.keys(block)).toEqual([
      'might',
      'brawn',
      'grace',
      'wit',
      'will',
    ]);
  });

  it('should return the expected values', () => {
    const block = generateBeastStatBlock(12345);

    expect(Object.values(block)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should set appropriate attributes per baseStats', () => {
    const block = generateBeastStatBlock(12345);

    expect(block[BeastAttributes.might]).toEqual(1);
    expect(block[BeastAttributes.brawn]).toEqual(2);
    expect(block[BeastAttributes.grace]).toEqual(3);
    expect(block[BeastAttributes.wit]).toEqual(4);
    expect(block[BeastAttributes.will]).toEqual(5);
  });
});
