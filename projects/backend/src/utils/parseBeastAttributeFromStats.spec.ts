import { BeastAttributes } from '../types/BeastAttributes';
import parseBeastAttributeFromStats from './parseBeastAttributeFromStats';

describe('parseBeastAttributeFromStats', () => {
  const attr = BeastAttributes.grace;

  it('should return a number', () => {
    expect(typeof parseBeastAttributeFromStats(12345, attr)).toEqual('number');
  });

  it('should return the expected attribute', () => {
    expect(parseBeastAttributeFromStats(12345, attr)).toEqual(3);
  });
});
