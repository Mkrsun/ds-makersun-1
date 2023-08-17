import { jsx as _jsx } from "react/jsx-runtime";
import TaskHome from './TaskHome';
const meta = {
    title: 'Molecule|Dozen|TaskHome',
    component: TaskHome,
};
export default meta;
export const Primary = {
    render: () => _jsx(TaskHome, { label: "Mi task de prueba" }),
};
