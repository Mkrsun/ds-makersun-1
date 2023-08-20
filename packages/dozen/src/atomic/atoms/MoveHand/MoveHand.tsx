import './MoveHand.scss';
import MoveHandIcon from './HandMoveIcon.png';

export interface MoveHandProps {
  className?: string;
  ariaLabel?: string;
}

const MoveHand: React.FC<MoveHandProps> = ({ className = '', ariaLabel }) => {
  return (
    <div
      className={`ds-makersun-dozen-move-hand-container ${className}`}
      data-testid={`ds-makersun-dozen-move-hand`}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <img src={MoveHandIcon} alt="move hand icon" />
    </div>
  );
};

export default MoveHand;
