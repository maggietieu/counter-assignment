// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

let incrementButton, decrementButton;

beforeEach(() => {
  // Render the Counter component here
  const { getByText } = render(<Counter />);
  incrementButton = getByText('+');
  decrementButton = getByText('-');
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCountMessage = screen.getByText(/0/i);
  expect(initialCountMessage).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(incrementButton);
  const incrementedCount = screen.getByText(/1/i);
  expect(incrementedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(decrementButton);
  const decrementedCount = screen.getByText(/-1/i);
  expect(decrementedCount).toBeInTheDocument();
});
