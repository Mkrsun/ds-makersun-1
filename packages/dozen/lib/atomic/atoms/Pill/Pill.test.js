import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Pill from './Pill';
test('Pill: Base test', () => {
    render(_jsx(Pill, {}));
    const element = screen.getByTestId('ds-makersun-dozen-pill');
    expect(element).toBeVisible();
    expect(element).toHaveClass('ds-makersun-dozen-pill-container');
});
