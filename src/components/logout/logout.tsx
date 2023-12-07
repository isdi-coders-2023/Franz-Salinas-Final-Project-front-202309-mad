import { useSelector } from 'react-redux';
import { useUsers } from '../../hooks/user.hooks';
import { RootState } from '../../store/store';

export const Logout = () => {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  const { makeLogOut } = useUsers();

  return (
    <>
      {loggedUser && (
        <p role="button" className="logout" onClick={makeLogOut}>
          Logout
        </p>
      )}
    </>
  );
};
