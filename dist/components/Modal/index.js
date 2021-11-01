"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const Modal = ({ open, setOpen, title, children, ...props }) => {
    return (react_1.default.createElement(style_1.FullScreen, { open: open },
        react_1.default.createElement(style_1.Container, { ...props, title: title },
            react_1.default.createElement(style_1.Close, { onClick: () => setOpen(false) }, "X"),
            react_1.default.createElement("h2", null, title),
            children)));
};
exports.Modal = Modal;
