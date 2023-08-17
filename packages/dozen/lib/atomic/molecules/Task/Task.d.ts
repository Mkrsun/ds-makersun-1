import React, { ReactNode, MouseEventHandler } from 'react';
import './Task.css';
export interface TaskProps {
    className?: string;
    ariaLabel?: string;
    label: string;
    rightIcon?: ReactNode;
    rightIconComplete?: ReactNode;
    overlayColor?: string;
    completeOverlayColor?: string;
    onHoverColor?: string;
    isCompleted?: boolean;
    onSwipeComplete?: () => void;
    handleIsComplete?: () => void;
    onClick?: MouseEventHandler<HTMLDivElement>;
    [key: string]: any;
}
declare const Task: React.FC<TaskProps>;
export default Task;
