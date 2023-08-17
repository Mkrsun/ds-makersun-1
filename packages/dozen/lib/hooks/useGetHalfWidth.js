import { useState, useEffect } from 'react';
// Custom hook para manejar el estado del formulario con validación
export const useGetHalfWidth = ({ containerRef }) => {
    const [halfWidth, setHalfWidth] = useState(null);
    useEffect(() => {
        if (containerRef && containerRef.current) {
            setHalfWidth(Math.ceil(containerRef.current.offsetWidth / 10) * 4);
        }
    }, [containerRef]);
    return {
        halfWidth,
    };
};
