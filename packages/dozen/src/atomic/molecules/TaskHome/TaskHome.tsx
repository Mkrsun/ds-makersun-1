import React from 'react';
import { MdWork as WorkIcon } from 'react-icons/md';
import Task from '../Task';
import Done from '../../atoms/Done';
import './TaskHome.css';

export interface TaskHomeProps {
  label?: string;
  onSwipeComplete?: () => void;
  [key: string]: any; // Índice de propiedades dinámicas
}

const TaskHome: React.FC<TaskHomeProps> = ({
  label,
  onSwipeComplete,
  ...props
}) => {
  return (
    <Task
      className="ds-makersun-dozen-task-home-container"
      label={label ?? ''}
      rightIcon={<WorkIcon width={18} height={18} />}
      rightIconComplete={<Done />}
      overlayColor="#B6EBBA"
      completeOverlayColor="#3BE146"
      onHoverColor="#E9E8E8"
      onSwipeComplete={() => {
        onSwipeComplete && onSwipeComplete();
      }}
      {...props}
    />
  );
};

export default TaskHome;
