import { Login } from '../login/login';
import './login.page.scss';

export default function LoginPage() {
  return (
    <div className="main-login-page-container">
      <section className="login-section">
        <div className="main-login-container">
          <div className="title-login-container"></div>
          <div className="login-component-container">
            <Login></Login>
          </div>
        </div>

        <div className="image-login">
          <img
            src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_400/v1701966969/proyecto%20final/ybvxrnbcphng6vj8yukz.webp"
            alt="image-footballer"
          />
        </div>
      </section>
    </div>
  );
}
