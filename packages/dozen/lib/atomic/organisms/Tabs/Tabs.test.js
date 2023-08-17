import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';
test('Tabs: Base test', () => {
    render(_jsx(Tabs, { children: _jsx("div", { children: "De prueba" }) }));
    const element = screen.getByTestId('ds-makersun-dozen-tabs');
    expect(element).toBeVisible();
    expect(element).toHaveClass('ds-makersun-dozen-tabs-container');
});
