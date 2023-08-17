import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import SwipeableWrapper from './SwipeableWrapper';
test('SwipeableContainer: Base test', () => {
    render(_jsxs(SwipeableWrapper, Object.assign({ overlayColor: "#B8FFB5" }, { children: [_jsx("p", { children: "Hola Mundo" }), ' '] })));
    const element = screen.getByTestId('ds-makersun-dozen-swipeable-container');
    expect(element).toBeVisible();
    expect(element).toHaveClass('ds-makersun-dozen-swipeable-container-container');
});
