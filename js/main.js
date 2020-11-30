"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmallPizza_1 = require("./SmallPizza");
var MediumPizza_1 = require("./MediumPizza");
var PepperoniDecorator_1 = require("./PepperoniDecorator");
var JalapenoDecorator_1 = require("./JalapenoDecorator");
var ExtraCheeseDecorator_1 = require("./ExtraCheeseDecorator");
var LargePizza_1 = require("./LargePizza");
// Create a small pizza with pepeproni and jalapenos
var smallPizza = new SmallPizza_1.SmallPizza();
smallPizza = new PepperoniDecorator_1.PepperonoDecorator(smallPizza);
smallPizza = new JalapenoDecorator_1.JalapenoDecorator(smallPizza);
console.log(smallPizza.getDescription() + ' - $' + smallPizza.getCost());
// Create a medium pizza with extra cheese
var mediumPizza = new MediumPizza_1.MediumPizza();
mediumPizza = new ExtraCheeseDecorator_1.ExtraCheeseDecorator(mediumPizza);
console.log(mediumPizza.getDescription() + ' - $' + mediumPizza.getCost());
// Create large pizza with just pepperoni
var largePizza = new LargePizza_1.LargePizza();
largePizza = new PepperoniDecorator_1.PepperonoDecorator(largePizza);
console.log(largePizza.getDescription() + " - $" + largePizza.getCost());
