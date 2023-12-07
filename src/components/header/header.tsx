import { Link } from 'react-router-dom';
import './header.scss';

import { Logout } from '../logout/logout';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  return (
    <>
      <header>
        <div className="header-main-container">
          <div className="header-container">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1>Dream Team FC </h1>
            </Link>
          </div>
          <div className="icons-container">
            <p>Players</p>

            {!loggedUser && (
              <Link to={'/login'} style={{ textDecoration: 'none' }}>
                <p>Login</p>
              </Link>
            )}

            {loggedUser && (
              <>
                <p>My team</p>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <Logout></Logout>
                </Link>
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
    </>
  );
};
