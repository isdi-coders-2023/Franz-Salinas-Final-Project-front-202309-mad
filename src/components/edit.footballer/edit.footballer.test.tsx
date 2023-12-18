/* import { BrowserRouter } from 'react-router-dom';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { EditFootballer } from './edit.footballer';
import { store } from '../../store/store';

jest.mock('../../hooks/footballer.hooks', () => {
  useFootballer: jest.fn().mockReturnValue({
    loadFootballer: jest.fn(),
    updateFootbaler: jest.fn(),
    footballers: { name: 'Nitin', id: '1234', position: 'CM' },
  });
});

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
    test('Then it should ...', () => {});
  });
});
 */
