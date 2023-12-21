import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { Details } from './details';
import '@testing-library/jest-dom';

jest.mock('../../hooks/footballer.hooks', () => ({
  useFootballer: jest.fn().mockReturnValue({
    currentFootballer: {
      name: 'Nitin',
      nationality: 'Argentinian',
      detailsImage: { publicId: '123' },
      countryFlag: { publicId: '12333' },
      teamShieldFlag: { publicId: '122444' },
    },
  }),
}));

jest.mock('../../services/images', () => ({
  makeImageUrlToProperSize: jest.fn(),
}));

describe('Given Details component...', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Details></Details>
        </Provider>
      </BrowserRouter>
    );
  });

  describe('When we instantiate', () => {
    test('Then it should render properly...', () => {
      const result = screen.getByTestId('details-container');
      expect(result).toBeInTheDocument();
    });
  });
});
