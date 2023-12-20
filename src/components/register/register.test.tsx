import { useUsers } from '../../hooks/user.hooks';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Register } from './register';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/user.hooks', () => ({
  useUsers: jest.fn().mockReturnValue({
    register: jest.fn(),
  }),
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockResolvedValue({}),
}));

describe('Given Register component...', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <Register></Register>
        </Provider>
      </Router>
    );
  });
  describe('When we the user submits the form', () => {
    test('Then the funtion register should be called...', async () => {
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'monagillo@gmail.com');
      await userEvent.click(screen.getAllByRole('button')[0]);
      await fireEvent.submit(form);
      expect(useUsers().register).toHaveBeenCalled();
    });
  });
});
