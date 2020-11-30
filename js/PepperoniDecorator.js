"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperoniDecorator = void 0;
var ToppingDecorator_1 = require("./ToppingDecorator");
var PepperoniDecorator = /** @class */ (function (_super) {
    __extends(PepperoniDecorator, _super);
    function PepperoniDecorator(pizza) {
        var _this = _super.call(this, pizza) || this;
        _this.description = ', Pepperoni';
        _this.cost = .99;
        return _this;
    }
    PepperoniDecorator.prototype.getCost = function () {
        return this.pizza.getCost() + this.cost;
    };
    PepperoniDecorator.prototype.getDescription = function () {
        return this.pizza.getDescription() + this.description;
    };
    return PepperoniDecorator;
}(ToppingDecorator_1.ToppingDecorator));
exports.PepperoniDecorator = PepperoniDecorator;
