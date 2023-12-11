import { Link, useLocation } from 'react-router-dom';
import './header.scss';

import { Logout } from '../logout/logout';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

import { makeImageUrlToProperSize } from '../../services/images';

export const Header = () => {
  const location = useLocation();

  const getHeaderColorClass = () => {
    if (location.pathname === '/') {
      return 'header-grey'; // Aplica la clase 'header-red' si está en la ruta de home
    } else if (
      location.pathname === '/myplayers' ||
      location.pathname === '/login' ||
      location.pathname === '/register'
    ) {
      return 'header-black'; // Aplica la clase 'header-blue' si está en la ruta de detalles
    }

    // Otras clases o rutas adicionales
    return ''; // Clase por defecto si no coincide con ninguna ruta
  };

  const headerClasses = `header ${getHeaderColorClass()}`.trim(); // Combina clases dinámicamente

  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  return (
    <header className={headerClasses}>
      <div className="header-main-container">
        <div className="header-container">
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Dream Team FC </h1>
          </Link>
        </div>
        <div className="icons-container">
          <Link
            to={'/myplayers'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>Players</p>
          </Link>

          {!loggedUser && (
            <Link to={'/login'} style={{ textDecoration: 'none' }}>
              <p>Login</p>
            </Link>
          )}

          {loggedUser && (
            <>
              <p>My team</p>

              <Logout></Logout>

              <div className="image-user-logged">
                <img
                  src={makeImageUrlToProperSize(loggedUser.avatar.publicId, 50)}
                  alt=""
                />
                <p className="logged-user-name">{loggedUser.name}</p>
              </div>
            </>
          )}

          <Link
            to={'/register'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {!loggedUser && <p>Register</p>}
          </Link>
        </div>
      </div>
    </header>
  );
};
