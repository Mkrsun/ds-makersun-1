import React, { MouseEventHandler, ReactNode } from 'react';
import './Pill.css';

export interface PillProps {
  className?: string;
  ariaLabel?: string;
  type?: 'mini'; // TODO: | normal
  value?: number | string | ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

const Pill: React.FC<PillProps> = ({
  className = '',
  ariaLabel,
  type = 'normal',
  value,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`ds-makersun-dozen-pill-container ${type}-pill ${className}`}
      data-testid={`ds-makersun-dozen-pill`}
      aria-label={ariaLabel}
      tabIndex={0}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {value}
    </div>
  );
};

export default Pill;
