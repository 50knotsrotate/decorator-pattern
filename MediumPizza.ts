import { Pizza } from "./Pizza";

export class MediumPizza extends Pizza {
  description: string = "Medium Pizza";
  cost: number = 11.99;

  getCost(): number {
    return this.cost;
  }
  getDescription(): string {
      return this.description;
  }
}
