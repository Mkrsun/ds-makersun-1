import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import TaskHome from '../../molecules/TaskHome';
import './TaskList.css';
const TaskList = ({ className = '', ariaLabel, tasks, }) => {
    const [orderedTasks, setOrderedTasks] = useState(tasks);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const handleDragStart = (_event, index) => {
        setDraggedIndex(index);
    };
    const handleDragOver = (_event, index) => {
        if (draggedIndex === null)
            return;
        const items = Array.from(orderedTasks !== null && orderedTasks !== void 0 ? orderedTasks : []);
        const [draggedItem] = items.splice(draggedIndex, 1);
        items.splice(index, 0, draggedItem);
        setOrderedTasks(items);
        setDraggedIndex(index);
    };
    const handleDragEnd = () => {
        setDraggedIndex(null);
    };
    return (_jsx("div", Object.assign({ className: `ds-makersun-dozen-task-list-container ${className}`, "data-testid": `ds-makersun-dozen-task-list-container`, "aria-label": ariaLabel, tabIndex: 0 }, { children: orderedTasks === null || orderedTasks === void 0 ? void 0 : orderedTasks.map((task, index) => {
            var _a;
            return (_jsx(TaskHome, { label: task.label, draggable: true, onDragStart: (e) => handleDragStart(e, index), onDragOver: (e) => e.preventDefault(), onDrop: (e) => {
                    e.preventDefault();
                    handleDragOver(e, index);
                }, onDragEnd: handleDragEnd }, (_a = task === null || task === void 0 ? void 0 : task.id) !== null && _a !== void 0 ? _a : index));
        }) })));
};
export default TaskList;
