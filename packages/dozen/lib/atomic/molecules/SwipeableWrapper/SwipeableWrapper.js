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
import { useState, useEffect, useRef, } from 'react';
import { hexToRgba, getDeltaPercentage } from './utils';
import './SwipeableWrapper.css';
const defaultValues = {
    onHoverColor: '#2869261',
};
const SwipeableWrapper = (_a) => {
    var _b;
    var { className = '', ariaLabel, overlayColor, completeOverlayColor, onHoverColor, children, onTouchStart, onTouchEnd, onMouseDown, onMouseUp, onSwipeComplete, setIsComplete } = _a, props = __rest(_a, ["className", "ariaLabel", "overlayColor", "completeOverlayColor", "onHoverColor", "children", "onTouchStart", "onTouchEnd", "onMouseDown", "onMouseUp", "onSwipeComplete", "setIsComplete"]);
    const [startX, setStartX] = useState(null);
    const [swipeDistance, setSwipeDistance] = useState(0);
    const [halfWidth, setHalfWidth] = useState(null);
    const [currentOverlayColor, setCurrentOverlayColor] = useState(overlayColor ? hexToRgba(overlayColor) : '#B8FFB5');
    const [isHover, setIsHover] = useState(false);
    const containerRef = useRef(null);
    const handleTouchStart = (event) => {
        onTouchStart && onTouchStart(event);
        setStartX(event.touches[0].clientX);
    };
    const handleTouchMove = (event) => {
        if (startX !== null) {
            const currentX = event.touches[0].clientX;
            const deltaX = currentX - startX;
            setSwipeDistance(deltaX);
        }
    };
    const handleTouchEnd = (event) => {
        onTouchEnd && onTouchEnd(event);
        if (startX !== null && halfWidth) {
            if (Math.abs(swipeDistance) > halfWidth) {
                onSwipeComplete && onSwipeComplete();
            }
            setStartX(null);
            setSwipeDistance(0);
        }
    };
    const handleMouseDown = (event) => {
        onMouseDown && onMouseDown(event);
        setStartX(event.clientX);
    };
    const handleMouseMove = (event) => {
        if (startX !== null) {
            const currentX = event.clientX;
            const deltaX = currentX - startX;
            setSwipeDistance(deltaX);
        }
    };
    const handleMouseUp = (event) => {
        onMouseUp && onMouseUp(event);
        if (startX !== null && halfWidth) {
            if (Math.abs(swipeDistance) > halfWidth) {
                onSwipeComplete && onSwipeComplete();
            }
            setStartX(null);
            setSwipeDistance(0);
        }
    };
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const getBackgroundColor = (isHover, onHoverColor) => {
        if (isHover && !startX) {
            if (onHoverColor) {
                return hexToRgba(onHoverColor);
            }
            else {
                return hexToRgba(defaultValues.onHoverColor);
            }
        }
        else {
            return 'initial';
        }
    };
    useEffect(() => {
        if (halfWidth && Math.abs(swipeDistance) > halfWidth) {
            // Set complete overlay color
            setCurrentOverlayColor(completeOverlayColor ? hexToRgba(completeOverlayColor, 1) : 'green');
            setIsComplete && setIsComplete(true);
        }
        else {
            setCurrentOverlayColor(overlayColor ? hexToRgba(overlayColor) : hexToRgba('#B8FFB5'));
            setIsComplete && setIsComplete(false);
        }
    }, [
        swipeDistance,
        halfWidth,
        completeOverlayColor,
        overlayColor,
        setIsComplete,
    ]);
    useEffect(() => {
        if (containerRef && containerRef.current) {
            setHalfWidth(Math.ceil(containerRef.current.offsetWidth / 10) * 4);
        }
    }, [containerRef]);
    return (_jsxs("div", Object.assign({ ref: containerRef, className: `ds-makersun-dozen-swipeable-wrapper-container ${className} ${startX ? 'swiping' : ''}`, "data-testid": `ds-makersun-dozen-swipeable-wrapper`, "aria-label": ariaLabel, tabIndex: 0, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, style: {
            backgroundColor: getBackgroundColor(isHover, onHoverColor),
        } }, props, { children: [_jsx("div", { className: "overlay", style: {
                    backgroundColor: currentOverlayColor,
                    width: ` ${((_b = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth)
                        ? getDeltaPercentage(containerRef.current.offsetWidth, swipeDistance)
                        : '0'}%`,
                } }), children] })));
};
export default SwipeableWrapper;
