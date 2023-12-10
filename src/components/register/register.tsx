import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/user.hooks';
import './register.scss';

export const Register = () => {
  const [hasRegister, setRegister] = useState(false);
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData);
    setRegister(true);
  };

  return (
    <>
      <h2 className="title-register">Register</h2>

      {!hasRegister && (
        <form
          onSubmit={handleSubmit}
          className="register-form"
          aria-label="form"
        >
          <label htmlFor="">
            Email
            <input type="text" name="email" required />
          </label>

          <label htmlFor="">
            Name
            <input type="text" name="name" />
          </label>

          <label htmlFor="">
            Surname
            <input type="text" name="surname" />
          </label>

          <label htmlFor="">
            Age
            <input type="text" name="age" />
          </label>

          <label htmlFor="">
            Password
            <input type="text" name="password" required />
          </label>

          <label htmlFor="">
            Avatar
            <input type="file" name="avatar" required />
          </label>

          <label htmlFor="">
            Style of Play
            <input type="text" name="style" />
          </label>

          <label htmlFor="">
            Team Name
            <input type="text" name="Password" />
          </label>

          <button type="submit">Register</button>
          <button type="button">Cancel</button>
        </form>
      )}

      {hasRegister && <link rel="stylesheet" href="" />}
    </>
  );
};
