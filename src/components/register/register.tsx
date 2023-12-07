import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/user.hooks';

export const Register = () => {
  const [hasRegister, setRegister] = useState(false);
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData);
    setRegister(true);

    return;
  };

  return (
    <>
      <h2>Register</h2>

      {!hasRegister && (
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="">Email</label>
          <input type="text" name="email" required />
          <label htmlFor="">Name</label>
          <input type="text" name="name" />
          <label htmlFor="">Surname</label>
          <input type="text" name="surname" />
          <label htmlFor="">Age</label>
          <input type="text" name="age" />
          <label htmlFor="">Password</label>
          <input type="text" name="password" required />
          <label htmlFor="">Avatar</label>
          <input type="file" name="avatar" required />
          <label htmlFor="">Style of Play</label>
          <input type="text" name="style" />
          <label htmlFor="">Team Name</label>
          <input type="text" name="Password" />
          <button type="submit">Register</button>
          <button type="button">Cancel</button>
        </form>
      )}
    </>
  );
};
