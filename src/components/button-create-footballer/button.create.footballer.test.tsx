import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ButtonCreateFootballer } from './button.create.footballer';
import { store } from '../../store/store';

jest.mock('../../hooks/user.hooks', () => ({
  useUsers: jest.fn().mockReturnValue({
    loggedUser: { name: 'Nitin', role: 'Admin' },
  }),
}));

describe('Given ButtonCreateFootballer...', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <ButtonCreateFootballer></ButtonCreateFootballer>
        </Provider>
      </Router>
    );
  });

  describe('When the user is logged and has an Admin role', () => {
    test('Then it should be on the screen the ButtonCreateFootballer...', () => {
      const buttonCreate = screen.getByTestId('button-create-footballer');
      expect(buttonCreate).toBeInTheDocument();
    });
  });
});
