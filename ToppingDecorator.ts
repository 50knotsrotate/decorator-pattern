import { Pizza } from './Pizza';

export abstract class ToppingDecorator extends Pizza { 
    pizza: Pizza;
    constructor(pizza: Pizza) {
        super();
        this.pizza = pizza;
     }
}