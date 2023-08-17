import { jsx as _jsx } from "react/jsx-runtime";
import Greeting from './Greeting';
const meta = {
    title: 'Atom|Dozen|Greeting',
    component: Greeting,
};
export default meta;
export const Primary = {
    render: () => _jsx(Greeting, { label: "Welcome \uD83D\uDC4B\\n Manuel Mart\u00EDnez" }),
};
