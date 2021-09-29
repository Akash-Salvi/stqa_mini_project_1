import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('expression input Check', () => {
  render(<App />);
  const linkElement = screen.getByTestId('expression-input');
  expect(linkElement).toBeInTheDocument();
});


// No input
test('Result Check', () => {
  render(<App />);
  const Expression = screen.getByTestId('expression-input');
  const Result = screen.getByTestId('result-output');
  const Calculate = screen.getByTestId('calculate_btn');

  userEvent.type(Expression, "");
  Calculate.click()
  expect(Result.value).toBe("Invalid Expression");
});


// Invalid Parenthesis 
test('Result Check', () => {
  render(<App />);
  const Expression = screen.getByTestId('expression-input');
  const Result = screen.getByTestId('result-output');
  const Calculate = screen.getByTestId('calculate_btn');

  userEvent.type(Expression, "(1+1)*2*3)");
  Calculate.click()
  expect(Result.value).toBe("Invalid Expression");
});

// Valid Input with valid Parenthesis
test('Result Check', () => {
  render(<App />);
  const Expression = screen.getByTestId('expression-input');
  const Result = screen.getByTestId('result-output');
  const Calculate = screen.getByTestId('calculate_btn');

  userEvent.type(Expression, "(1+1)*(2*3)");
  Calculate.click()
  expect(Result.value).toBe("12");
});



// Input with special character
test('Result Check', () => {
  render(<App />);
  const Expression = screen.getByTestId('expression-input');
  const Result = screen.getByTestId('result-output');
  const Calculate = screen.getByTestId('calculate_btn');

  userEvent.type(Expression, "(3@1*2)");
  Calculate.click()
  expect(Result.value).toBe("Invalid Expression");
});

// Valid Input with no special symbols
test('Result Check', () => {
  render(<App />);
  const Expression = screen.getByTestId('expression-input');
  const Result = screen.getByTestId('result-output');
  const Calculate = screen.getByTestId('calculate_btn');

  userEvent.type(Expression, "([5*(3+2)])");
  Calculate.click()
  expect(Result.value).toBe("25");
});

// Checking BODMAS rule
test('Result Check', () => {
  render(<App />);
  const Expression = screen.getByTestId('expression-input');
  const Result = screen.getByTestId('result-output');
  const Calculate = screen.getByTestId('calculate_btn');

  userEvent.type(Expression, "([10/5+(20-3)*2])");
  Calculate.click()
  expect(Result.value).toBe("36");
});

// Decimal output
test('Result Check', () => {
  render(<App />);
  const Expression = screen.getByTestId('expression-input');
  const Result = screen.getByTestId('result-output');
  const Calculate = screen.getByTestId('calculate_btn');

  userEvent.type(Expression, "{21 / (3 + [3 * 9] )* 9 + 5}");
  Calculate.click()
  expect(Result.value).toBe("11.3");
});

// Negative output
test('Result Check', () => {
  render(<App />);
  const Expression = screen.getByTestId('expression-input');
  const Result = screen.getByTestId('result-output');
  const Calculate = screen.getByTestId('calculate_btn');

  userEvent.type(Expression, "((7*8)-19)/8-{90-700}");
  Calculate.click()
  expect(Result.value).toBe("-785.375");
});



