import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';
import { LocalStorage } from '../services/store.data';
import { ac } from '../slice/user.slice';
import { LoginUser } from '../models/users';
import { logginUserThunk, logginWithTokenThunk } from '../thunks/thunks';

export function useUsers() {
  const dispacht = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.usersState);
  const repo = new FootballerRepo(token);
  const userStorageData = new LocalStorage<{ token: string }>('users');
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

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

  return { makeLogOut, register, login, loginWithToken, loggedUser };
}
