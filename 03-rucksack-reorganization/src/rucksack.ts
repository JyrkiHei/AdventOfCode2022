export const rucksack = (input: string[], part: number): number => {

  class Rucksack {
    public comp1: string[]
    public comp2: string[]

    public constructor(comp1: string[], comp2: string[]) {
      this.comp1 = comp1;
      this.comp2 = comp2;
    }

    public GetSameItemsInComps = (): string[] => {
      let sameItems: string[] = [];
      this.comp1.forEach(item => {
        if (this.comp2.includes(item)) {
          sameItems.push(item);
        }
      })

      const uniques = [...new Set(sameItems)];

      return uniques;
    };
  };

  let rucksacks: Rucksack[] = [];

  // print all lines
  input.forEach(line => {
    const rucksack = new Rucksack([], []);

    if (line.length % 2 === 0) {
      rucksack.comp1 = line.substring(0, line.length / 2).split('');
      rucksack.comp2 = line.substring(line.length / 2).split('');

      rucksacks.push(rucksack);

      // console.log(`${rucksack.comp1} <-> ${rucksack.comp2}`);
    } else {
      console.log(`Line ${line} cannot be evenly divided!`);
    }
  });

  if (part === 1) {

    let sameStuff: string[] = [];

    rucksacks.forEach(sack => {
      sameStuff = [...sameStuff, ...sack.GetSameItemsInComps()];
    })

    const numberValues: number[] = convertStringToNumbers(sameStuff);
    const sum = numberValues.reduce<number>((accumulator, current) => {
      return accumulator + current;
    }, 0);

    return sum;
  }

  if (part === 2) {
    let sameStuff: string[] = [];

    if (input.length % 3 === 0) {
      for (let i = 0; i < input.length - 1; i = i + 3) {
        const groupBadge: string = getGroupBadge(input[i], input[i + 1], input[i + 2]);
        sameStuff.push(groupBadge);
      }
    } else {
      console.log("Input length is not divisible by 3? Length: " + input.length);
    }

    const numberValues: number[] = convertStringToNumbers(sameStuff);
    const sum = numberValues.reduce<number>((accumulator, current) => {
      return accumulator + current;
    }, 0);

    return sum;
  };

  return 0;
};

const getGroupBadge = (r1: string, r2: string, r3: string): string => {
  for (const char of r1.split('')) {
    if (r2.includes(char) && r3.includes(char)) {
      return char;
    }
  };

  return '';
}

const convertStringToNumbers = (sameStuff: string[]): number[] => {
  let numbers: number[] = [];

  sameStuff.forEach(item => {
    const number = item.charCodeAt(0);

    if (number > 63 && number < 91) {

      // console.log(`${item} - ${number} - ${number - 64 + 26}`);
      numbers.push(number - 64 + 26);
    }
    else {
      // console.log(`${item} - ${number} - ${number - 96}`);
      numbers.push(number - 96);
    }
  });

  return numbers;
}

