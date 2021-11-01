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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_2 = require("@storybook/react");
const react_3 = __importDefault(require("@storybook/addon-centered/react"));
const CheckBox_1 = require("../components/CheckBox");
(0, react_2.storiesOf)('CheckBox', module)
    .addDecorator(react_3.default)
    .add('CheckBox Group', () => {
    const allOptions = [
        { id: 1, value: 'Alpha' },
        { id: 2, value: 'Beta' },
    ];
    const [options, setOptions] = (0, react_1.useState)([allOptions[1].id]);
    function toggleOption(id) {
        setOptions(options.includes(id)
            ? options.filter((option) => option !== id)
            : [...options, id]);
    }
    return (react_1.default.createElement("form", null, allOptions.map((item) => (react_1.default.createElement(CheckBox_1.CheckBox, { name: "checkbox", key: item.id, label: item.value, value: item.value, checked: options.includes(item.id), onChange: () => toggleOption(item.id) })))));
})
    .add('Checked Box', () => (react_1.default.createElement(CheckBox_1.CheckBox, { name: "checkbox", label: "Checked", value: "Checked", defaultChecked: true, readOnly: true })))
    .add('Unchecked Box', () => (react_1.default.createElement(CheckBox_1.CheckBox, { name: "checkbox", label: "Unchecked", value: "Unchecked", checked: false, readOnly: true })));
