"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const Button = ({ children, backgroundColor = "#34D399", color = "#fff", outlined = false, ...props }) => {
    return (react_1.default.createElement(style_1.Container, { backgroundColor: backgroundColor, color: color, outlined: outlined, ...props }, children));
};
exports.Button = Button;
