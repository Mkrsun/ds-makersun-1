import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Tab from './Tab';
test('Tab: Base test', () => {
    render(_jsx(Tab, {}));
    const element = screen.getByTestId('ds-makersun-dozen-tab');
    expect(element).toBeVisible();
    expect(element).toHaveClass('ds-makersun-dozen-tab-container');
});
