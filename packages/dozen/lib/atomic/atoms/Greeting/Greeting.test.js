import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
test('Greeting: Base test', () => {
    render(_jsx(Greeting, { label: "Probando manu :)" }));
    const element = screen.getByTestId('ds-makersun-dozen-greeting');
    expect(element).toBeVisible();
    expect(element).toHaveClass('ds-makersun-dozen-greeting-container');
});
