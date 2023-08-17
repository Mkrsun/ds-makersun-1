import React from 'react';
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
declare const TaskList: React.FC<TaskListProps>;
export default TaskList;
