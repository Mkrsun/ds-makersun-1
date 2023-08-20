/// <reference types="react" />
import './MoveHand.scss';
export interface MoveHandProps {
    className?: string;
    ariaLabel?: string;
    width?: number;
    height?: number;
}
declare const MoveHand: React.FC<MoveHandProps>;
export default MoveHand;
