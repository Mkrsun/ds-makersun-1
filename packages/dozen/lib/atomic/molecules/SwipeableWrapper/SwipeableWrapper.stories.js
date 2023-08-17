import { jsx as _jsx } from "react/jsx-runtime";
import SwipeableWrapper from './SwipeableWrapper';
const meta = {
    title: 'Molecule|Dozen|SwipeableWrapper',
    component: SwipeableWrapper,
};
export default meta;
export const Primary = {
    render: () => (_jsx(SwipeableWrapper, Object.assign({ overlayColor: "#B8FFB5" }, { children: _jsx("p", { children: "Hola Mundo" }) }))),
};
