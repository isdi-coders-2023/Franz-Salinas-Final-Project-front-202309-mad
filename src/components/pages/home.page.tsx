import './home.page.scss';

export const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-top-home-page-container">
          <div className="welcome-message-container">
            <p className="main-message">Welcome to Dream Team FC</p>
            <p className="lower-message">Build the team of your dreams</p>
            <p className="lower-message">with the best players of the world</p>
          </div>
          <div className="top-image-container">
            <img
              src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_550/v1701952660/proyecto%20final/uokyyukezq1jm0msaavr.jpg"
              alt="debruyne"
            />
          </div>
        </div>
        <div className="main-botton-home-page-container">
          <div className="image-formation-container">
            <img
              className="football-field"
              src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_450/v1701972255/proyecto%20final/wbzvsrmccucswwsiztaw.jpg"
              alt="formation"
            />
          </div>
          <div className="card-footballer-container">
            <img
              src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_450/v1701973640/proyecto%20final/gm4wrmhxfqvwtzmjmhrb.webp"
              alt="card-footballer"
            />
          </div>
        </div>
      </div>
    </>
  );
};
