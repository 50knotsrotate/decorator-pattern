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
exports.SmallPizza = void 0;
var Pizza_1 = require("./Pizza");
var SmallPizza = /** @class */ (function (_super) {
    __extends(SmallPizza, _super);
    function SmallPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Small Pizza ";
        _this.cost = 9.99;
        return _this;
    }
    SmallPizza.prototype.getCost = function () {
        return this.cost;
    };
    SmallPizza.prototype.getDescription = function () {
        return this.description;
    };
    return SmallPizza;
}(Pizza_1.Pizza));
exports.SmallPizza = SmallPizza;
