import { Login } from '../login/login';
import './login.page.scss';

export default function LoginPage() {
  return (
    <section className="login-section">
      <div className="main-login-container">
        <h1 className="title-login-page">Login</h1>
        <Login></Login>
      </div>

      <div className="image-login">
        <img
          src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_400/v1701966969/proyecto%20final/ybvxrnbcphng6vj8yukz.webp"
          alt="image-footballer"
        />
      </div>
    </section>
  );
}
