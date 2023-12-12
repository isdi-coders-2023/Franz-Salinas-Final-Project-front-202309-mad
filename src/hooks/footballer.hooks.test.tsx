import { useDispatch } from 'react-redux';
import { useFootballer } from './footballer.hooks';
import { Footballer } from '../models/footballers';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockRejectedValue(jest.fn()),
}));

describe('Given useFootballer...', () => {
  const TestComponent = () => {
    const { loadFootballer, handleDetailsPage } = useFootballer();
    const footballerMock = { name: 'Serafin' } as unknown as Footballer;

    return (
      <>
        <button onClick={() => loadFootballer()}></button>
        <button onClick={() => handleDetailsPage(footballerMock)}></button>
      </>
    );
  };

  let elements: H;

  describe('When we instantiate', () => {
    test('Then it should be...', () => {});
  });
});
