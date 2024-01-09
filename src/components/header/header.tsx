import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import { Logout } from '../logout/logout';
import { makeImageUrlToProperSize } from '../../services/images';
import { useUsers } from '../../hooks/user.hooks';

// eslint-disable-next-line react-refresh/only-export-components

export const Header = () => {
  const location = useLocation();

  const getHeaderColorClass = (pathname: string) => {
    if (pathname === '/') {
      return 'header-grey';
    } else if (
      pathname === '/myplayers' ||
      pathname === '/login' ||
      pathname === '/register' ||
      pathname === '/user-list' ||
      pathname === '/create-footballer' ||
      pathname === '/details/:id'
    ) {
      return 'header-black';
    }
  };

  const headerClasses = `header ${getHeaderColorClass(
    location.pathname
  )}`.trim(); // Combina clases dinámicamente
  const { loggedUser } = useUsers();
  return (
    <header data-testid="header-element" className={headerClasses}>
      <div className="header-main-container">
        <div className="header-container">
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className="main-page-title">Dream Team FC </h1>
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
              <p data-testid="login">Login</p>
            </Link>
          )}

          {loggedUser && (
            <>
              <Link to={'/user-list'} style={{ textDecoration: 'none' }}>
                <p>My team</p>
              </Link>

              <Logout></Logout>

              <div className="image-user-logged">
                <img
                  role="img"
                  src={makeImageUrlToProperSize(loggedUser.avatar.publicId, 50)}
                  alt="User avatar"
                />
                <p className="logged-user-name">{loggedUser.name}</p>
              </div>
            </>
          )}

          <Link
            to={'/register'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {!loggedUser && <p data-testid="register">Register</p>}
          </Link>
        </div>
      </div>
    </header>
  );
};
