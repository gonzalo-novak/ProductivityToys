import App from "./App";
import { render, screen, fireEvent } from '@testing-library/react-native';
describe('Page: App', () => {
  it('Should render correctly', async () => {
    render(<App />);

    const loginButtonEl = await screen.findByRole('button', { name: 'Log in' });
    expect(loginButtonEl).toBeTruthy();

    fireEvent.press(loginButtonEl);

    const logOutButtonEl = await screen.findByRole('button', { name: 'Log out' });
    expect(screen.queryByRole('button', { name: 'Log in' })).not.toBeTruthy();
    expect(logOutButtonEl).toBeTruthy();

    expect(await screen.findByText('Hello John Doe, your age is: 20')).toBeTruthy();
    fireEvent.press(logOutButtonEl);

    expect(screen.queryByRole('button', { name: 'Log out' })).not.toBeTruthy();
    expect(await screen.findByRole('button', { name: 'Log in' })).toBeTruthy();
  });
});