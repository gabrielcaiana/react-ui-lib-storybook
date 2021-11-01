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
const react_1 = __importStar(require("react"));
const react_2 = require("@storybook/react");
const md_1 = require("react-icons/md");
const Input_1 = require("../components/Input");
(0, react_2.storiesOf)('Input', module)
    .add('Default', () => {
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    return (react_1.default.createElement(Input_1.Input, { name: "search", placeholder: "Pesquisar...", value: inputValue, setValue: setInputValue }));
})
    .add('With Icon', () => {
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    return (react_1.default.createElement(Input_1.Input, { name: "search", icon: react_1.default.createElement(md_1.MdSearch, null), placeholder: "Pesquisar...", value: inputValue, setValue: setInputValue }));
});
