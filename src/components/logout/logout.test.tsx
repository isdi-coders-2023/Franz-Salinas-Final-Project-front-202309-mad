import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { useUsers } from '../../hooks/user.hooks';
import { Provider } from 'react-redux';
import { Logout } from './logout';
import { store } from '../../store/store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/user.hooks', () => ({
  useUsers: jest.fn().mockReturnValue({
    makeLogOut: jest.fn(),
    loggedUser: { name: 'Nitin' },
  }),
}));

describe('Given Logout componet ', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <Logout></Logout>
        </Provider>
      </Router>
    );
  });
  describe('When we use it', () => {
    test('Then the Logout componet should render and the user should logout ...', async () => {
      const logoutComponent = screen.getByRole('button');
      expect(logoutComponent).toBeInTheDocument();
      await userEvent.click(logoutComponent);
      expect(useUsers().makeLogOut).toHaveBeenCalled();
    });
  });
});
