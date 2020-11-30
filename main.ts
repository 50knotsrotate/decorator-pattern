import { SmallPizza } from './SmallPizza';
import { MediumPizza } from './MediumPizza';
import { PepperonoDecorator } from './PepperoniDecorator';
import { JalapenoDecorator } from './JalapenoDecorator';
import { ExtraCheeseDecorator } from './ExtraCheeseDecorator';
import { LargePizza } from './LargePizza';

// Create a small pizza with pepeproni and jalapenos
var smallPizza = new SmallPizza();
    smallPizza = new PepperonoDecorator(smallPizza);
    smallPizza = new JalapenoDecorator(smallPizza);

console.log(smallPizza.getDescription() + ' - $' + smallPizza.getCost());

// Create a medium pizza with extra cheese
var mediumPizza = new MediumPizza();
    mediumPizza = new ExtraCheeseDecorator(mediumPizza);

console.log(mediumPizza.getDescription() + ' - $' + mediumPizza.getCost());

// Create large pizza with just pepperoni
var largePizza = new LargePizza()
    largePizza = new PepperonoDecorator(largePizza);
    
console.log(largePizza.getDescription() + " - $" + largePizza.getCost());

