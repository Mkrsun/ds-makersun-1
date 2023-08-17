import { jsx as _jsx } from "react/jsx-runtime";
import './Pill.css';
const Pill = ({ className = '', ariaLabel, type = 'normal', value, onClick, onMouseEnter, onMouseLeave, }) => {
    return (_jsx("div", Object.assign({ className: `ds-makersun-dozen-pill-container ${type}-pill ${className}`, "data-testid": `ds-makersun-dozen-pill`, "aria-label": ariaLabel, tabIndex: 0, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, { children: value })));
};
export default Pill;
