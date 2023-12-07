import { SyntheticEvent } from 'react';
import { useUsers } from '../../hooks/user.hooks';
import './login.scss';

import { LoginUser } from '../../models/users';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

export const Login = () => {
  const { login } = useUsers();
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: LoginUser = {
      email: formData.get('email')?.toString() as string,
      password: formData.get('password')?.toString() as string,
    };
    login(loginUser);
  };

  return (
    <>
      {!loggedUser && (
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="">Email</label>
          <input type="text" name="email" required />
          <label htmlFor="">Password</label>
          <input type="password" name="password" required />
          <button type="submit"> Login </button>
        </form>
      )}

      {loggedUser && (
        <div>
          <p>Successfull Login</p>
          <Link to={'/'}>
            <button type="button">Continue</button>
          </Link>
        </div>
      )}
    </>
  );
};
