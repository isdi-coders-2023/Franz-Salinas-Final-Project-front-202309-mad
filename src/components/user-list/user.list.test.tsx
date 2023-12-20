import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { UserList } from './user.list';
import { useFootballer } from '../../hooks/footballer.hooks';

jest.mock('../../hooks/footballer.hooks', () => ({
  useFootballer: jest.fn().mockReturnValue({
    loadFootballer: jest.fn(),
    footballers: [
      { name: 'nitin', author: { id: '123' } },
      { name: 'seragin', author: { id: '124' } },
    ],
    footballerUpdateState: 'idle',
  }),
}));

jest.mock('../../hooks/user.hooks', () => ({
  useUsers: jest.fn().mockReturnValue({
    loggedUser: { name: 'Nitin', id: '123' },
  }),
}));

describe('Given userList...', () => {
  describe('When we render de footballers carss', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserList></UserList>
          </Provider>
        </BrowserRouter>
      );
    });

    test('Then the footballers card should be in the comument...', () => {
      const result = screen.getByText('My Team');
      expect(result).toBeInTheDocument();
    });

    test('the loadFootballer should have been called', () => {
      expect(useFootballer().loadFootballer).toHaveBeenCalled();
    });
  });
});
