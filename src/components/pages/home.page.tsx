import './home.page.scss';

export const HomePage = () => {
  return (
    <>
      <div className="main-top-home-page-container">
        <div className="welcome-message">
          <p>Welcome to Dream Team FC</p>
          <p>
            Build the team of your dreams with the best players in the world
          </p>
        </div>
        <div className="top-image-container">
          <img
            src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_500/v1701952660/proyecto%20final/uokyyukezq1jm0msaavr.jpg"
            alt="debruyne"
          />
        </div>
      </div>
    </>
  );
};
