import { rucksack } from './rucksack';

const lines = [
  'vJrwpWtwJgWrhcsFMMfFFhFp', // 'vJrwpWtwJgWr hcsFMMfFFhFp' -> p
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', // 'jqHRNqRjqzjGDLGL rsFMfFZSrLrFZsSL' -> L
  'PmmdzqPrVvPwwTWBwg', // 'PmmdzqPrV vPwwTWBwg' -> P
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', // 'wMqvLMZHhHMvwLH jbvcjnnSBnvTQFn' -> v
  'ttgJtRGJQctTZtZT', // 'ttgJtRGJ QctTZtZT' -> t
  'CrZsJsPPZsGzwwsLwLmpwMDw' // 'CrZsJsPPZsGz wwsLwLmpwMDw' -> s
];

describe('Tests', () => {
  test('Part 1', () => {
    const results = rucksack(lines, 1);
    expect(results).toEqual(157);
  });

  test('Part 2', () => {
    const results = rucksack(lines, 2);
    expect(results).toEqual(70);
  });
});
