var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import './Tab.css';
const Tab = (_a) => {
    var { className = '', ariaLabel, children } = _a, props = __rest(_a, ["className", "ariaLabel", "children"]);
    return (_jsx("div", Object.assign({ className: `ds-makersun-dozen-tab-container ${className}`, "data-testid": `ds-makersun-dozen-tab`, "aria-label": ariaLabel, tabIndex: 0 }, props, { children: children })));
};
export default Tab;
