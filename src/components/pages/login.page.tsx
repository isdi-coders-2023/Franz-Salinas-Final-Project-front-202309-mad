import { Login } from '../login/login';
import './login.page.scss';

export const LoginPage = () => {
  return (
    <>
      <Login></Login>
      <div className="image-login">
        <img
          src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_400/v1701966969/proyecto%20final/ybvxrnbcphng6vj8yukz.webp"
          alt="image-footballer"
        />
      </div>
    </>
  );
};
