import { Link } from 'react-router-dom';
import './button.create.footballer.scss';
import { useUsers } from '../../hooks/user.hooks';

export const ButtonCreateFootballer = () => {
  const { loggedUser } = useUsers();

  return (
    <>
      {loggedUser && loggedUser.role === 'Admin' && (
        <div className="button-create-footballer">
          <Link
            to={'/create-footballer'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Create Footballer
          </Link>
        </div>
      )}
    </>
  );
};
