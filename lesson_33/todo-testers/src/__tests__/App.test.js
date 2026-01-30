/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";

describe('TODO App tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Page has TODO header', () => {
    const heading = screen.getByRole('heading', { name: /todo/i });
    expect(heading).toBeInTheDocument();
  });


  test('Input accepts letters and numbers', async () => {
    const user = userEvent.setup();
    const input = screen.getByLabelText(/name/i);

    await user.type(input, 'Test123');
    expect(input).toHaveValue('Test123');
  });


  test('Shows error when submitting empty input', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /add/i });

    await user.click(button);
    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });


  test('Shows error when input is less than 5 characters', async () => {
    const user = userEvent.setup();
    const input = screen.getByLabelText(/name/i);
    const button = screen.getByRole('button', { name: /add/i });

    await user.type(input, 'abc');
    await user.click(button);

    expect(
      await screen.findByText(/at least 5/i)
    ).toBeInTheDocument();
  });

  test('Adds new todo item after valid submit', async () => {
    const user = userEvent.setup();
    const input = screen.getByLabelText(/name/i);
    const button = screen.getByRole('button', { name: /add/i });

    await user.type(input, 'My first todo');
    await user.click(button);

    expect(
      screen.getByText('My first todo')
    ).toBeInTheDocument();
  });
});

