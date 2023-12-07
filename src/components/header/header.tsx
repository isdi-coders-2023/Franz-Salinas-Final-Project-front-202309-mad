import './header.scss';

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-main-container">
          <div className="header-container">
            <h1>Dream Team FC </h1>
          </div>
          <div className="icons-container">
            <p>Players</p>
            <p>My team</p>
            <p>Login</p>
            <p>Register</p>
          </div>
        </div>
      </header>
    </>
  );
};
