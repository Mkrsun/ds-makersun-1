import { jsx as _jsx } from "react/jsx-runtime";
import './Greeting.css';
const Greeting = ({ className = '', ariaLabel, label, width, height, }) => {
    return (_jsx("div", Object.assign({ className: `ds-makersun-dozen-greeting-container ${className}`, "data-testid": `ds-makersun-dozen-greeting`, "aria-label": ariaLabel, tabIndex: 0, style: {
            width: width !== null && width !== void 0 ? width : '100%',
            height: height !== null && height !== void 0 ? height : '100%',
        } }, { children: label })));
};
export default Greeting;
