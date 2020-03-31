"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// npm install @types/express --save
var app = express_1.default();
var main = function () {
    app.listen(6060, function () {
        console.log('ts-express');
    });
};
main();
