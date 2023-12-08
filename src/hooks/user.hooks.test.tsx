import { LoginUser } from '../models/users';
import { useUsers } from './user.hooks';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockLoginUser = {} as LoginUser;
const mockNewUser = {} as FormData;

describe('Given useUsers hooks', () => {
  describe('When we use its methods', () => {
    beforeEach(() => {
      const TestComponent = () => {
        const { makeLogOut, register, login, loginWithToken } = useUsers();

        return <button></button>;
      };
    });

    test('Then the makeLogout...', () => {});
  });
});
