import './CompleteTasks.scss';
import CompleteTasksIcon from 'completeTaskIcon.png';

export interface CompleteTasksProps {
  className?: string;
  ariaLabel?: string;
}

const CompleteTasks: React.FC<CompleteTasksProps> = ({
  className = '',
  ariaLabel,
}) => {
  return (
    <div
      className={`ds-makersun-dozen-complete-tasks-container ${className}`}
      data-testid={`ds-makersun-dozen-complete-tasks`}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <img src={CompleteTasksIcon} alt="Complete task icon" />
    </div>
  );
};

export default CompleteTasks;
