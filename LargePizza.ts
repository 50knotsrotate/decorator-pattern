import { Pizza } from "./Pizza";

export class LargePizza extends Pizza {
  description: string = "Large Pizza";
  cost: number = 14.99;

  getCost(): number {
    return this.cost;
  }
  getDescription(): string {
      return this.description;
  }
}
