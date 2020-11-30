import { Pizza } from "./Pizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class ExtraCheeseDecorator extends ToppingDecorator {
  description: string = ", extra cheese";
  cost: number = 0.99;

  constructor(pizza: Pizza) {
    super(pizza);
  }

  getCost(): number {
    return this.pizza.getCost() + this.cost;
  }
  getDescription(): string {
    return this.pizza.getDescription() + this.description;
  }
}
