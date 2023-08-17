import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef } from 'react';
import Tab from '../../molecules/Tab';
import TabOption from '../../atoms/TabOption';
import { useGetPercentageWidth } from '../../../hooks/useGetPercentageWidth';
import './Tabs.css';
const Tabs = ({ className = '', ariaLabel, options, children, }) => {
    const [selectedTabOptionIndex, setSelectedTabOption] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);
    const tabsContainerRef = useRef(null);
    const { percentageWidth } = useGetPercentageWidth({
        containerRef: tabsContainerRef,
        percentage: 20,
    });
    const [isWaiting, setIsWaiting] = useState(false);
    const handlePrev = () => {
        setSelectedTabOption((prevIndex) => Math.max(prevIndex - 1, 0));
    };
    const handleNext = () => {
        const childrenArray = React.Children.toArray(children);
        setSelectedTabOption((prevIndex) => Math.min(prevIndex + 1, childrenArray.length - 1));
    };
    const handleSwipeLeft = handlePrev;
    const handleSwipeRight = handleNext;
    const handleSelectTabOption = (index) => {
        setSelectedTabOption(index);
    };
    const handleMouseDown = (event) => {
        setTouchStartX(event.clientX);
    };
    const handleMouseMove = (event) => {
        const touchEndX = event.clientX;
        const deltaX = touchEndX - (touchStartX !== null && touchStartX !== void 0 ? touchStartX : 0);
        if (percentageWidth && Math.abs(deltaX) > percentageWidth && !isWaiting) {
            if (deltaX > 0) {
                handleSwipeLeft();
            }
            else {
                handleSwipeRight();
            }
            setIsWaiting(true);
            setTimeout(() => {
                setIsWaiting(false);
            }, 300);
        }
    };
    const handleMouseUp = () => {
        setTouchStartX(0);
    };
    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    };
    const handleTouchMove = (event) => {
        const touchEndX = event.touches[0].clientX;
        const deltaX = touchEndX - (touchStartX !== null && touchStartX !== void 0 ? touchStartX : 0);
        if (percentageWidth && Math.abs(deltaX) > percentageWidth && !isWaiting) {
            if (deltaX > 0) {
                handleSwipeLeft();
            }
            else {
                handleSwipeRight();
            }
            setIsWaiting(true);
            setTimeout(() => {
                setIsWaiting(false);
            }, 300);
        }
    };
    const handleTouchEnd = () => {
        setTouchStartX(0);
    };
    return (_jsxs("div", Object.assign({ className: `ds-makersun-dozen-tabs-container ${className}`, "data-testid": `ds-makersun-dozen-tabs`, "aria-label": ariaLabel, tabIndex: 0 }, { children: [_jsx("div", Object.assign({ className: "ds-makersun-dozen-tabs-header-container" }, { children: options === null || options === void 0 ? void 0 : options.map((option, index) => (_jsx(TabOption, { label: option, isActive: index === selectedTabOptionIndex, onClick: () => handleSelectTabOption(index) }, option))) })), _jsx("div", Object.assign({ ref: tabsContainerRef, className: "ds-makersun-dozen-tabs-content-container", style: { transform: `translateX(-${selectedTabOptionIndex * 100}%)` } }, { children: React.Children.map(children, (child, index) => (_jsx(Tab, Object.assign({ onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd }, { children: child }), index))) }))] })));
};
export default Tabs;
