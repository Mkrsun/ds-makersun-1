import './CompleteTasks.scss';
import CompleteTaskSvg from './completeTaskIcon.png';

export interface CompleteTasksProps {
  className?: string;
  ariaLabel?: string;
  width?: number;
  height?: number;
}

const CompleteTasks: React.FC<CompleteTasksProps> = ({
  className = '',
  ariaLabel,
  width = 24,
  height = 24,
}) => {
  return (
    <div
      className={`ds-makersun-dozen-complete-tasks-container ${className}`}
      data-testid={`ds-makersun-dozen-complete-tasks`}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <CompleteTaskSvg width={width} height={height} alt="Complete task icon" />
    </div>
  );
};

export default CompleteTasks;
