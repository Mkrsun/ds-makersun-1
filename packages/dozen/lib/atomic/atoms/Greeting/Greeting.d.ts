import React from 'react';
import './Greeting.css';
export interface GreetingProps {
    className?: string;
    ariaLabel?: string;
    label: string;
    width?: number;
    height?: number;
}
declare const Greeting: React.FC<GreetingProps>;
export default Greeting;
