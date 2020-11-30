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
exports.LargePizza = void 0;
var Pizza_1 = require("./Pizza");
var LargePizza = /** @class */ (function (_super) {
    __extends(LargePizza, _super);
    function LargePizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Large Pizza";
        _this.cost = 14.99;
        return _this;
    }
    LargePizza.prototype.getCost = function () {
        return this.cost;
    };
    LargePizza.prototype.getDescription = function () {
        return this.description;
    };
    return LargePizza;
}(Pizza_1.Pizza));
exports.LargePizza = LargePizza;
