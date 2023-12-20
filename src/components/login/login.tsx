import { SyntheticEvent, useEffect } from 'react';
import { useUsers } from '../../hooks/user.hooks';
import './login.scss';

import { LoginUser } from '../../models/users';

import { useNavigate } from 'react-router-dom';
import { ButtonCancel } from '../button-cancel/button.cancel';
import Swal from 'sweetalert2';

export const Login = () => {
  const { login, loggedUser } = useUsers();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (loggedUser) {
      Swal.fire({
        icon: 'success',
        title: 'Successfull login',
        showConfirmButton: false,
        timer: 2000,
        width: 350,
      }).then(() => {
        navigate('/user-list');
      });
    }
  });

  return (
    <>
      <div className="main-login-container">
        <form onSubmit={handleSubmit} className="login-form" aria-label="form">
          {' '}
          <h1 className="title-login-page">Login</h1>
          <div className="inputs-container">
            <div className="email-input">
              <label>
                Email
                <input
                  type="text"
                  name="email"
                  className="input-login"
                  required
                />
              </label>
            </div>
            <div className="password-input">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  className="input-login"
                  required
                />
              </label>
            </div>
          </div>
          <div className="buttons-login-page">
            <button type="submit" className="login-button" data-testid="login">
              Login
            </button>
            <ButtonCancel></ButtonCancel>
          </div>
        </form>
      </div>

      <div className="image-login">
        <img
          src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_400/v1701966969/proyecto%20final/ybvxrnbcphng6vj8yukz.webp"
          alt="image-footballer"
        />
      </div>
    </>
  );
};
