import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Done from './Done';
test('Done: Base test', () => {
    render(_jsx(Done, {}));
    const element = screen.getByTestId('ds-makersun-dozen-done');
    expect(element).toBeVisible();
    expect(element).toHaveClass('ds-makersun-dozen-done-container');
});
