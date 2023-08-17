import { jsx as _jsx } from "react/jsx-runtime";
import Tabs from './Tabs';
const meta = {
    title: 'Organism|Dozen|Tabs',
    component: Tabs,
};
export default meta;
export const Primary = {
    render: () => (_jsx(Tabs, { children: _jsx("div", { children: "De prueba" }) })),
};
