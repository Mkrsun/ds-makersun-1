import React from 'react';
import './TaskHome.css';
export interface TaskHomeProps {
    label?: string;
    onSwipeComplete?: () => void;
    [key: string]: any;
}
declare const TaskHome: React.FC<TaskHomeProps>;
export default TaskHome;
