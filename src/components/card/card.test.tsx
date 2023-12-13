import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Card } from './card';
import { store } from '../../store/store';
import { Footballer } from '../../models/footballers';
import { useFootballer } from '../../hooks/footballer.hooks';
import '@testing-library/jest-dom';

jest.mock('../../hooks/footballer.hooks', () => ({
  useFootballer: jest.fn().mockReturnValue({
    handleDetailsPage: jest.fn(),
  }),
}));

jest.mock('../../services/images', () => ({
  makeImageUrlToProperSize: jest.fn(),
}));

describe('Given Card component ...', () => {
  const footballerMock = {
    name: 'Messi',
    imageFootballer: { publicId: '2' },
  };

  render(
    <Router>
      <Provider store={store}>
        <Card info={footballerMock as Footballer}></Card>
      </Provider>
    </Router>
  );

  describe('When we click the handleDetailsPage button  ', () => {
    test('Then the handleDetailsPage fuction should have been called...', async () => {
      const element = screen.getByTestId('button-details');
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(useFootballer().handleDetailsPage).toHaveBeenCalled();
    });
  });
});
