import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/user.hooks';

import { LoginUser } from '../../models/users';

export const Login = () => {
  const [isLogged, setLogin] = useState(false);
  const { login } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: LoginUser = {
      email: formData.get('email')?.toString() as string,
      password: formData.get('password')?.toString() as string,
    };
    login(loginUser);
    setLogin(true);
  };

  return (
    <>
      {!isLogged && (
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="">Email</label>
          <input type="text" name="email" required />
          <label htmlFor="">Password</label>
          <input type="text" name="password" required />
          <button type="submit"> Login </button>
        </form>
      )}

      {isLogged && <p>Estas logeado papi</p>}
    </>
  );
};
