import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/user.hooks';

export const Logout = () => {
  const { makeLogOut, loggedUser } = useUsers();

  return (
    <>
      {loggedUser && (
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <p role="button" className="logout" onClick={makeLogOut}>
            Logout
          </p>
        </Link>
      )}
    </>
  );
};
