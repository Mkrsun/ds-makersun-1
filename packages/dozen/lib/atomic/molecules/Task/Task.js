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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Task.css';
import SwipeableWrapper from '../SwipeableWrapper';
const Task = (_a) => {
    var { className = '', ariaLabel, label, rightIcon, rightIconComplete, overlayColor, completeOverlayColor, onHoverColor, isCompleted, onSwipeComplete, handleIsComplete, onClick } = _a, props = __rest(_a, ["className", "ariaLabel", "label", "rightIcon", "rightIconComplete", "overlayColor", "completeOverlayColor", "onHoverColor", "isCompleted", "onSwipeComplete", "handleIsComplete", "onClick"]);
    const [isCompletedLocal, setIsCompletedLocal] = useState(isCompleted !== null && isCompleted !== void 0 ? isCompleted : false);
    return (_jsxs(SwipeableWrapper, Object.assign({ className: `ds-makersun-dozen-task-container ${className}`, "data-testid": `ds-makersun-dozen-task`, "aria-label": ariaLabel, overlayColor: overlayColor !== null && overlayColor !== void 0 ? overlayColor : '#B8FFB5', completeOverlayColor: completeOverlayColor !== null && completeOverlayColor !== void 0 ? completeOverlayColor : 'green', onHoverColor: onHoverColor !== null && onHoverColor !== void 0 ? onHoverColor : '#2869261', onSwipeComplete: () => {
            onSwipeComplete && onSwipeComplete();
            setIsCompletedLocal(true);
        }, setIsComplete: (isCompleted) => {
            handleIsComplete && handleIsComplete();
            setIsCompletedLocal(isCompleted);
        } }, props, { children: [_jsx("div", Object.assign({ className: "left-side" }, { children: label })), _jsx("div", Object.assign({ onClick: onClick !== null && onClick !== void 0 ? onClick : (() => { }), className: "right-side" }, { children: isCompletedLocal && rightIconComplete ? rightIconComplete : rightIcon }))] })));
};
export default Task;
