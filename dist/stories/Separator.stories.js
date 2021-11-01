"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const react_3 = __importDefault(require("@storybook/addon-centered/react"));
const Separator_1 = require("../components/Separator");
(0, react_2.storiesOf)('Separator', module)
    .addDecorator(react_3.default)
    .add('Default', () => (react_1.default.createElement("div", { style: {
        width: '300px',
        padding: '20px 10px',
        backgroundColor: '#000',
    } },
    react_1.default.createElement(Separator_1.Separator, null))));
