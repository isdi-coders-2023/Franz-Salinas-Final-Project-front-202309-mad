import { LoginUser } from '../models/users';
import { FootballerRepo } from '../services/footballer.repo';
import { StorageData } from '../services/store.data';
import { store } from '../store/store';
import { logginUserThunk, logginWithTokenThunk } from './thunks';

describe('Given thunks methods...', () => {
  describe('When we use them', () => {
    const sharedData = {
      repo: {
        loginUser: jest.fn().mockReturnValue({ token: '' }),
        loginUserWithToken: jest.fn().mockReturnValue({ token: '' }),
      } as unknown as FootballerRepo,
      storageData: {
        set: jest.fn(),
      } as unknown as StorageData<{ token: string }>,
    };

    test('Then it should be called the loginUser and set  ...', async () => {
      const data = { ...sharedData, loginUser: {} as LoginUser };
      await store.dispatch(logginUserThunk(data));
      expect(data.repo.loginUser).toHaveBeenCalled();
      expect(data.storageData.set).toHaveBeenCalled();
    });

    test('Then it should be called the loginUser and set  ...', async () => {
      const data = { ...sharedData, token: '' };
      await store.dispatch(logginWithTokenThunk(data));
      expect(data.repo.loginUser).toHaveBeenCalled();
      expect(data.storageData.set).toHaveBeenCalled();
    });
  });
});
