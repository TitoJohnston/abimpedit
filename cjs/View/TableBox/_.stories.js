"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const index_1 = require("./index");
exports.default = {
    title: "Svg/TableBox",
    component: index_1.TableBox,
};
const TemplateIndex = (args) => (react_1.default.createElement(index_1.TableBox, { ...args }));
exports.Index = TemplateIndex.bind({});
exports.Index.args = {};
//# sourceMappingURL=_.stories.js.map