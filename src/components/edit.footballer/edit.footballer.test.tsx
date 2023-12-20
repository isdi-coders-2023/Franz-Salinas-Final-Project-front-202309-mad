import { BrowserRouter } from 'react-router-dom';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { EditFootballer } from './edit.footballer';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({ id: '1' }),
  useNavigate: () => jest.fn(),
}));
jest.mock('../../hooks/footballer.hooks', () => ({
  useFootballer: jest.fn().mockReturnValue({
    loadFootballer: jest.fn(),
    updateFootbaler: jest.fn(),
    footballers: [{ name: 'Nitin', id: '1234' }],
    footballerUpdateState: [{ name: 'Nitin', id: '12345' }],
  }),
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockResolvedValue({}),
}));

describe('Given EditFootballer component...', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <EditFootballer></EditFootballer>
        </Provider>
      </BrowserRouter>
    );
  });

  describe('When we edit a footballer', () => {
    test('Then it should call the updateFootballer function wiht the correct values ...', async () => {
      const form = screen.getByTestId('form-id');
      const nameInput = screen.getByPlaceholderText('Nombre');
      await userEvent.type(nameInput, 'Update footballer');
      fireEvent.submit(form);
      expect(useFootballer().updateFootbaler).toHaveBeenCalled();
    });
  });
});
