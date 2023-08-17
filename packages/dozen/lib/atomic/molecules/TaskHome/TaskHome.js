var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MdWork as WorkIcon } from 'react-icons/md';
import Task from '../Task';
import Done from '../../atoms/Done';
import './TaskHome.css';
const TaskHome = (_a) => {
    var { label, onSwipeComplete } = _a, props = __rest(_a, ["label", "onSwipeComplete"]);
    return (_jsx(Task, Object.assign({ className: "ds-makersun-dozen-task-home-container", label: label !== null && label !== void 0 ? label : '', rightIcon: _jsx(WorkIcon, { width: 18, height: 18 }), rightIconComplete: _jsx(Done, {}), overlayColor: "#B6EBBA", completeOverlayColor: "#3BE146", onHoverColor: "#E9E8E8", onSwipeComplete: () => {
            onSwipeComplete && onSwipeComplete();
        } }, props)));
};
export default TaskHome;
