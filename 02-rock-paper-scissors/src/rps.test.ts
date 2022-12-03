import { rps } from './rps';

const lines = ['A Y', 'B X', 'C Z'];

describe('Test some inputs', () => {
  test('By selected hands', () => {
    const results = rps(lines, false);
    expect(results).toEqual(15);
  });

  test('By wanted outcomes', () => {
    const results = rps(lines, true);
    expect(results).toEqual(12);
  });
});
