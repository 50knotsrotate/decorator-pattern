import { Pizza } from "./Pizza";

export class SmallPizza extends Pizza {
  description: string = "Small Pizza ";
  cost: number = 9.99;

  getCost(): number {
    return this.cost;
  }
  getDescription(): string {
      return this.description;
  }
}
