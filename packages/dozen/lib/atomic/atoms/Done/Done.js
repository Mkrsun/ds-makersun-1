import { jsx as _jsx } from "react/jsx-runtime";
import { MdDone as DoneIcon } from 'react-icons/md';
import './Done.css';
const Done = ({ className = '', ariaLabel = '', size, color, fontSize, }) => {
    return (_jsx("div", Object.assign({ className: `ds-makersun-dozen-done-container ${className}`, "data-testid": `ds-makersun-dozen-done`, "aria-label": ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : 'Done Icon' }, { children: _jsx(DoneIcon, { width: size !== null && size !== void 0 ? size : 18, height: size !== null && size !== void 0 ? size : 18, color: color !== null && color !== void 0 ? color : 'white', fontSize: fontSize !== null && fontSize !== void 0 ? fontSize : '1rem' }) })));
};
export default Done;
