export type CardSuit = "hearts" | "diamonds" | "clubs" | "spades";
export type CardSuitNotation = "H" | "D" | "C" | "S";
export type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
export type CardValueNotation =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";
export class Card {
  constructor(public suit: CardSuit, public value: CardValue) {}

  static getSuitNotation(suit: CardSuit): CardSuitNotation {
    switch (suit) {
      case "hearts":
        return "H";
      case "diamonds":
        return "D";
      case "clubs":
        return "C";
      case "spades":
        return "S";
    }
  }

  static getValueNotation(value: CardValue): CardValueNotation {
    switch (value) {
      case 2:
        return "2";
      case 3:
        return "3";
      case 4:
        return "4";
      case 5:
        return "5";
      case 6:
        return "6";
      case 7:
        return "7";
      case 8:
        return "8";
      case 9:
        return "9";
      case 10:
        return "10";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      case 14:
        return "A";
    }
  }
}
