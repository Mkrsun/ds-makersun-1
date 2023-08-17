import React, { ReactNode, MouseEventHandler, TouchEventHandler } from 'react';
import './SwipeableWrapper.css';
export interface SwipeableWrapperProps {
    className?: string;
    ariaLabel?: string;
    overlayColor?: string;
    completeOverlayColor?: string;
    onHoverColor?: string;
    children: ReactNode;
    onTouchStart?: TouchEventHandler<HTMLDivElement>;
    onTouchEnd?: TouchEventHandler<HTMLDivElement>;
    onMouseDown?: MouseEventHandler<HTMLDivElement>;
    onMouseUp?: MouseEventHandler<HTMLDivElement>;
    onSwipeComplete?: () => void;
    setIsComplete?: (isCompleted: boolean) => void;
    [key: string]: any;
}
declare const SwipeableWrapper: React.FC<SwipeableWrapperProps>;
export default SwipeableWrapper;
