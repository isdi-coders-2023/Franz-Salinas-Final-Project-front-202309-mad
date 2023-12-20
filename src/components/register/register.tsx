import { SyntheticEvent, useEffect, useState } from 'react';
import { useUsers } from '../../hooks/user.hooks';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export const Register = () => {
  const [hasRegister, setRegister] = useState(false);
  const { register } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData);
    setRegister(true);
  };

  useEffect(() => {
    if (hasRegister) {
      Swal.fire({
        icon: 'success',
        title: 'Congrass you are register with us!',
        showConfirmButton: false,
        timer: 1500,
        width: 350,
      }).then(() => {
        setRegister(false);
        navigate('/login/');
      });
    }
  });

  return (
    <>
      <div className="main-register-container-page">
        <div className="main-register-container">
          {' '}
          <div className="register-title-container">
            {' '}
            <h2 className="title-register">Register</h2>
          </div>
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
                <input type="password" name="password" required />
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
              <div className="register-buttons-container">
                {' '}
                <div className="register-button-container">
                  <button className="button-user-register" type="submit">
                    Register
                  </button>
                </div>
                <div className="register-cancel-button-container">
                  {' '}
                  <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <button className="button-user-cancel" type="button">
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          )}
          {hasRegister && <link rel="stylesheet" href="" />}
        </div>
      </div>
    </>
  );
};
