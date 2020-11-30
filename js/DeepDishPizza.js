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
exports.DeepDishPizza = void 0;
var Pizza_1 = require("./Pizza");
var DeepDishPizza = /** @class */ (function (_super) {
    __extends(DeepDishPizza, _super);
    function DeepDishPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Deep Dish Pizza";
        _this.cost = 9.99;
        return _this;
    }
    DeepDishPizza.prototype.getCost = function () {
        throw new Error("Method not implemented.");
    };
    DeepDishPizza.prototype.getDescription = function () {
        throw new Error("Method not implemented.");
    };
    return DeepDishPizza;
}(Pizza_1.Pizza));
exports.DeepDishPizza = DeepDishPizza;
