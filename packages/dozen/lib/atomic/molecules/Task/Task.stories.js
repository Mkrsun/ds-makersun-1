import { jsx as _jsx } from "react/jsx-runtime";
import Task from './Task';
const meta = {
    title: 'Molecule|Dozen|Task',
    component: Task,
};
export default meta;
export const Primary = {
    render: () => _jsx(Task, { label: "Probando label" }),
};
