"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
// @ts-nocheck
const react_1 = __importStar(require("react"));
const style_1 = require("./style");
const RadioWrapper = (0, react_1.forwardRef)(({ label, name, value, color = '#34D399', ...props }, ref) => {
    const { readOnly, onChange } = props;
    return (react_1.default.createElement(style_1.Label, { onClick: readOnly ? () => { } : onChange, htmlFor: name, color: color },
        label,
        react_1.default.createElement(style_1.Radio, { ...props, ref: ref, name: name, value: value }),
        react_1.default.createElement(style_1.Mark, null)));
});
exports.Radio = RadioWrapper;
