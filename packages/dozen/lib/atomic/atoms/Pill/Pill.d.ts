import React, { MouseEventHandler, ReactNode } from 'react';
import './Pill.css';
export interface PillProps {
    className?: string;
    ariaLabel?: string;
    type?: 'mini';
    value?: number | string | ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}
declare const Pill: React.FC<PillProps>;
export default Pill;
