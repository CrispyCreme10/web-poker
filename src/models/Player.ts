import { Card } from "./Card";

interface PlayerMetaData {
  id: number;
  name: string;
}

interface PlayerGameData {
  tableSpotIndex: number;
  chips: number;
  positionFromDealer: number;
  hand: [Card, Card] | undefined;
}

export class Player implements PlayerMetaData, PlayerGameData {
  constructor(
    public id: number = -1,
    public name: string = "",
    public tableSpotIndex: number = -1,
    public chips: number = 0,
    public positionFromDealer: number = -1,
    public hand: [Card, Card] | undefined = undefined
  ) {}
}
