import React, { ReactNode } from 'react';
import './Tab.css';
export interface TabProps {
    className?: string;
    ariaLabel?: string;
    children?: ReactNode;
    [key: string]: any;
}
declare const Tab: React.FC<TabProps>;
export default Tab;
