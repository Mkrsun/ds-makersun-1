/// <reference types="react" />
import './Done.scss';
export interface DoneProps {
    className?: string;
    ariaLabel?: string;
    size?: number;
    color?: string;
    fontSize?: string;
}
declare const Done: React.FC<DoneProps>;
export default Done;
