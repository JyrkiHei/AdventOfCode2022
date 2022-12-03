enum Points {
  WIN = 6,
  DRAW = 3,
  LOSS = 0,
}

class Hand {
  private opponent: string;
  private self: string;
  private outcomePoints: number;
  private handPoints: number;
  private wantedOutcome: string;

  public constructor(opponent: string, self: string, wantedOutcome = '') {
    this.opponent = opponent;
    this.self = self;
    this.handPoints = 0;
    this.outcomePoints = 0;
    this.wantedOutcome = wantedOutcome;

    if (wantedOutcome !== '') {
      this.setSelfSelectedHand();
    }

    this.setHandpoints();
    this.setOutcomePoints();
  }

  // Part 02
  // X means you need to lose
  // Y means you need to end the round in a draw, and
  // Z means you need to win
  private setSelfSelectedHand(): void {
    switch (this.wantedOutcome) {
      case 'X': // LOSE
        if (this.opponent === 'A') this.self = 'Z';
        else if (this.opponent === 'B') this.self = 'X';
        else this.self = 'Y';
        break;
      case 'Y': // DRAW
        if (this.opponent === 'A') this.self = 'X';
        else if (this.opponent === 'B') this.self = 'Y';
        else this.self = 'Z';
        break;
      case 'Z': // WIN
        if (this.opponent === 'A') this.self = 'Y';
        else if (this.opponent === 'B') this.self = 'Z';
        else this.self = 'X';
        break;
    }
  }

  private setHandpoints(): void {
    switch (this.self) {
      case 'X':
        this.handPoints = 1; // Rock
        break;

      case 'Y':
        this.handPoints = 2; // Paper
        break;

      case 'Z':
        this.handPoints = 3; // Scissors
        break;
    }
  }

  // A, X = Rock
  // B, Y = Paper
  // C, Z = Scissors
  private setOutcomePoints(): void {
    this.outcomePoints = this.handPoints; // Minimum number of Points, includes LOSS

    // Handle DRAW
    if (
      (this.opponent === 'A' && this.self === 'X') ||
      (this.opponent === 'B' && this.self === 'Y') ||
      (this.opponent === 'C' && this.self === 'Z')
    ) {
      this.outcomePoints += Points.DRAW;
      return;
    }

    if (
      (this.opponent === 'A' && this.self === 'Y') ||
      (this.opponent === 'B' && this.self === 'Z') ||
      (this.opponent === 'C' && this.self === 'X')
    ) {
      this.outcomePoints += Points.WIN;
    }
  }

  public getPoints(): number {
    return this.outcomePoints;
  }
}

export const rps = (input: string[], byWantedOutcome: boolean) => {
  const values: Hand[] = [];

  // print all lines
  input.forEach(line => {
    const data = line.split(' ');

    if (!byWantedOutcome) {
      values.push(new Hand(data[0], data[1]));
    } else {
      values.push(new Hand(data[0], '', data[1]));
    }
  });

  let sumOfPoints = 0;

  values.map(fight => (sumOfPoints += fight.getPoints()));

  return sumOfPoints;
};
