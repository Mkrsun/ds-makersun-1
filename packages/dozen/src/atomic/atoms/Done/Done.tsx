import { MdDone as DoneIcon } from 'react-icons/md';

import './Done.scss';

export interface DoneProps {
  className?: string;
  ariaLabel?: string;
  size?: number;
  color?: string;
  fontSize?: string;
}

const Done: React.FC<DoneProps> = ({
  className = '',
  ariaLabel = '',
  size,
  color,
  fontSize,
}) => {
  return (
    <div
      className={`ds-makersun-dozen-done-container ${className}`}
      data-testid={`ds-makersun-dozen-done`}
      aria-label={ariaLabel ?? 'Done Icon'}
    >
      <DoneIcon
        width={size ?? 18}
        height={size ?? 18}
        color={color ?? 'white'}
        fontSize={fontSize ?? '1rem'}
      />
    </div>
  );
};

export default Done;
