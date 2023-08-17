import React, { useState, DragEvent } from 'react';
import TaskHome from '../../molecules/TaskHome';
import './TaskList.css';

type Task = {
  id?: string;
  label: string;
  state: 'new' | 'active' | 'completed' | string;
};

export interface TaskListProps {
  className?: string;
  ariaLabel?: string;
  tasks?: Task[];
}

const TaskList: React.FC<TaskListProps> = ({
  className = '',
  ariaLabel,
  tasks,
}) => {
  const [orderedTasks, setOrderedTasks] = useState(tasks);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (_event: DragEvent, index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (_event: DragEvent, index: number) => {
    if (draggedIndex === null) return;

    const items = Array.from(orderedTasks ?? []);
    const [draggedItem] = items.splice(draggedIndex, 1);
    items.splice(index, 0, draggedItem);

    setOrderedTasks(items);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div
      className={`ds-makersun-dozen-task-list-container ${className}`}
      data-testid={`ds-makersun-dozen-task-list-container`}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {orderedTasks?.map((task, index) => (
        <TaskHome
          key={task?.id ?? index}
          label={task.label}
          draggable
          onDragStart={(e: DragEvent<HTMLDivElement>) =>
            handleDragStart(e, index)
          }
          onDragOver={(e: DragEvent<HTMLDivElement>) => e.preventDefault()}
          onDrop={(e: DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            handleDragOver(e, index);
          }}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
};

export default TaskList;
