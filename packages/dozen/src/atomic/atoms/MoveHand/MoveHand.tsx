import './MoveHand.scss';
import MoveHandIcon from './HandMoveIcon.png';

export interface MoveHandProps {
  className?: string;
  ariaLabel?: string;
  width?: number;
  height?: number;
}

const MoveHand: React.FC<MoveHandProps> = ({
  className = '',
  ariaLabel,
  width = 24,
  height = 24,
}) => {
  return (
    <div
      className={`ds-makersun-dozen-move-hand-container ${className}`}
      data-testid={`ds-makersun-dozen-move-hand`}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <MoveHandIcon width={width} height={height} alt="move hand icon" />
    </div>
  );
};

export default MoveHand;
