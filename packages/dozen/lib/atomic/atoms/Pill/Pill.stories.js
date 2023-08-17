import { jsx as _jsx } from "react/jsx-runtime";
import Pill from './Pill';
const meta = {
    title: 'Atoms|Dozen|Pill',
    component: Pill,
};
export default meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Mini = {
    render: () => _jsx(Pill, { type: "mini", value: "1" }),
};
