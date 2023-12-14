import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Card } from './card';
import { store } from '../../store/store';
import { Footballer } from '../../models/footballers';
import { useFootballer } from '../../hooks/footballer.hooks';
import '@testing-library/jest-dom';
import Swal from 'sweetalert2';

jest.mock('../../hooks/footballer.hooks', () => ({
  useFootballer: jest.fn().mockReturnValue({
    handleDetailsPage: jest.fn(),
    deleteFootballer: jest.fn(),
  }),
}));

jest.mock('../../services/images', () => ({
  makeImageUrlToProperSize: jest.fn(),
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockResolvedValue({
    isConfirmed: true,
  }),
}));

describe('Given Card component ...', () => {
  const footballerMock = {
    name: 'Messi',
    imageFootballer: { publicId: '2' },
    teamShieldFlag: { publiId: '3' },
    countryFlag: { publicId: '4' },
  };

  render(
    <Router>
      <Provider store={store}>
        <Card info={footballerMock as unknown as Footballer}></Card>
      </Provider>
    </Router>
  );

  describe('When we click the handleDelete button or the handleDetails button   ', () => {
    test('Then the selected fuction should have been called...', async () => {
      const element = screen.getAllByRole('button');
      expect(element[0]).toBeInTheDocument();
      await userEvent.click(element[0]);
      expect(useFootballer().handleDetailsPage).toHaveBeenCalled();

      expect(element[1]).toBeInTheDocument();
      await userEvent.click(element[1]);
      expect(Swal.fire).toHaveBeenCalled();
      expect(useFootballer().deleteFootballer).toHaveBeenCalled();
    });
  });
});
