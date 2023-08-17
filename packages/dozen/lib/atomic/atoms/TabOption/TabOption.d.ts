import React from 'react';
import './TabOption.css';
export interface TabOptionProps {
    className?: string;
    ariaLabel?: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}
declare const TabOption: React.FC<TabOptionProps>;
export default TabOption;
