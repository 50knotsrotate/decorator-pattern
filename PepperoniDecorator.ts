import { Pizza } from './Pizza';
import { ToppingDecorator } from './ToppingDecorator';

export class PepperoniDecorator extends ToppingDecorator {
    description: string = ', Pepperoni';
    cost: number = .99;

    constructor(pizza: Pizza) {
        super(pizza);
     }

    getCost(): number {
        return this.pizza.getCost() + this.cost;
    }
    getDescription(): string {
        return this.pizza.getDescription() + this.description
    } 
    
}