import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';
import { StorageData } from '../services/store.data';
import { ac } from '../slice/user.slice';
import { LoginUser } from '../models/users';
import { logginUserThunk, logginWithTokenThunk } from '../thunks/thunks';

export function useUsers() {
  const dispacht = useDispatch<AppDispatch>();
  const repo = new FootballerRepo();
  const userStorageData = new StorageData<{ token: string }>('users');

  const makeLogOut = () => {
    dispacht(ac.logout());
    userStorageData.remove();
  };

  const register = (newUser: FormData) => {
    repo.registerUser(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispacht(
      logginUserThunk({ loginUser, repo, storageData: userStorageData })
    );
  };

  const loginWithToken = () => {
    const userStoreData = userStorageData.get();
    if (userStoreData) {
      const token = userStoreData.token;
      dispacht(
        logginWithTokenThunk({ token, repo, storageData: userStorageData })
      );
    }
  };

  return { makeLogOut, register, login, loginWithToken };
}
