import { Link } from 'react-router-dom';
import './button.cancel.scss';

export const ButtonCancel = () => {
  return (
    <>
      <div className="button-cancel">
        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          Cancel
        </Link>
      </div>
    </>
  );
};
