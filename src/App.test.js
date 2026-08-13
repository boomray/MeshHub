// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeshHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeshHub/i);
    expect(titleElement).toBeInTheDocument();
});
