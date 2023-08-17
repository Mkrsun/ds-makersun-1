import { useState, useEffect } from 'react';
// Custom hook para manejar el estado del formulario con validación
export const useGetPercentageWidth = ({ containerRef, percentage = 100, }) => {
    var _a;
    const [percentageWidth, setPercentageWidth] = useState((_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth);
    useEffect(() => {
        if (containerRef && containerRef.current && percentage !== 100) {
            setPercentageWidth(Math.ceil((percentage * containerRef.current.offsetWidth) / 100));
        }
    }, [containerRef, percentage]);
    return {
        percentageWidth,
    };
};
