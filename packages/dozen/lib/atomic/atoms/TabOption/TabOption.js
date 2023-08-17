import { jsx as _jsx } from "react/jsx-runtime";
import './TabOption.css';
const TabOption = ({ className = '', ariaLabel, label, isActive, onClick, }) => {
    return (_jsx("div", Object.assign({ className: `ds-makersun-dozen-tab-option-container ${className} ${isActive ? 'active' : ''}`, "data-testid": `ds-makersun-dozen-tab-option`, "aria-label": ariaLabel, tabIndex: 0, onClick: onClick }, { children: label })));
};
export default TabOption;
