import { MemoryRouter as Router } from 'react-router-dom';
import { CreateFootballer } from './create.footballer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useFootballer } from '../../hooks/footballer.hooks';

jest.mock('../../hooks/footballer.hooks', () => ({
  useFootballer: jest.fn().mockReturnValue({
    createFootballer: jest.fn(),
  }),
}));

describe('Given the CreateFootballer component...', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <CreateFootballer></CreateFootballer>
        </Provider>
      </Router>
    );
  });

  describe('When we user submits the form', () => {
    test('Then the createFootballer function should have been called...', async () => {
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'franz');
      await userEvent.click(screen.getAllByRole('button')[0]);
      await fireEvent.submit(form);
      expect(useFootballer().createFootballer).toHaveBeenCalled();
    });
  });
});
