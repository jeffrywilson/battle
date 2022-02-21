import { BeastAttributes } from '../types/BeastAttributes';
import modifyBeastStats from './modifyBeastStats';

describe('modifyBeastStats', () => {
  const stat = BeastAttributes.grace;

  it('should return a number', () => {
    expect(typeof modifyBeastStats(12345, stat, 5)).toEqual('number');
  });

  it('should increase the attribute by the modifier amount', () => {
    const modified = modifyBeastStats(12345, stat, 2);

    expect(modified).toEqual(12545);
  });
});
