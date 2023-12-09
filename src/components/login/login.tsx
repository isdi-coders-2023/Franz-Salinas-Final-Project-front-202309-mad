import { SyntheticEvent } from 'react';
import { useUsers } from '../../hooks/user.hooks';
import './login.scss';

import { LoginUser } from '../../models/users';

import { Link } from 'react-router-dom';
import { ButtonCancel } from '../button-cancel/button.cancel';

export const Login = () => {
  const { login, loggedUser } = useUsers();

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
        <form onSubmit={handleSubmit} className="login-form" aria-label="form">
          <label>Email</label>
          <input type="text" name="email" className="input-login" required />
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="input-login"
            required
          />
          <div className="buttons-login-page">
            <button type="submit" className="login-button">
              Login
            </button>
            <ButtonCancel></ButtonCancel>
          </div>
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
