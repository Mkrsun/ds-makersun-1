import React, { ReactNode, MouseEventHandler, useState } from 'react';
import './Task.css';

import SwipeableWrapper from '../SwipeableWrapper';

export interface TaskProps {
  className?: string;
  ariaLabel?: string;
  label: string;
  rightIcon?: ReactNode;
  rightIconComplete?: ReactNode;
  overlayColor?: string;
  completeOverlayColor?: string;
  onHoverColor?: string;
  isCompleted?: boolean;
  onSwipeComplete?: () => void;
  handleIsComplete?: () => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
  [key: string]: any; // Índice de propiedades dinámicas
}

const Task: React.FC<TaskProps> = ({
  className = '',
  ariaLabel,
  label,
  rightIcon,
  rightIconComplete,
  overlayColor,
  completeOverlayColor,
  onHoverColor,
  isCompleted,
  onSwipeComplete,
  handleIsComplete,
  onClick,
  ...props
}) => {
  const [isCompletedLocal, setIsCompletedLocal] = useState(
    isCompleted ?? false
  );

  return (
    <SwipeableWrapper
      className={`ds-makersun-dozen-task-container ${className}`}
      data-testid={`ds-makersun-dozen-task`}
      aria-label={ariaLabel}
      overlayColor={overlayColor ?? '#B8FFB5'}
      completeOverlayColor={completeOverlayColor ?? 'green'}
      onHoverColor={onHoverColor ?? '#2869261'}
      onSwipeComplete={() => {
        onSwipeComplete && onSwipeComplete();
        setIsCompletedLocal(true);
      }}
      setIsComplete={(isCompleted: boolean) => {
        handleIsComplete && handleIsComplete();
        setIsCompletedLocal(isCompleted);
      }}
      {...props}
    >
      <div className="left-side">{label}</div>
      <div onClick={onClick ?? (() => {})} className="right-side">
        {isCompletedLocal && rightIconComplete ? rightIconComplete : rightIcon}
      </div>
    </SwipeableWrapper>
  );
};

export default Task;
