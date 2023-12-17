import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/user.hooks';
import './register.scss';
import Swal from 'sweetalert2';

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

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure you want to delete this card?',
      showDenyButton: true,
      confirmButtonText: 'Accept',
      denyButtonText: 'Cancel',
      customClass: {
        popup: 'my-swal-popup', // Clase personalizada para el contenedor principal
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFootballer(info.id);
        Swal.fire({
          title: 'Card Deleted',
          icon: 'success',
        });
      }
    });
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
