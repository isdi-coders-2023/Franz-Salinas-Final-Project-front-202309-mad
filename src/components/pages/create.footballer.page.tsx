import { CreateFootballer } from '../create-footballer/create.footballer';

export default function CreateFootballerPage() {
  return (
    <section className="login-section">
      <div className="main-login-container">
        <h1 className="title-login-page">Create Footballer</h1>
        <CreateFootballer></CreateFootballer>
      </div>

      <div className="image-login">
        <img
          src="https://res.cloudinary.com/dnlkezvzv/image/upload/v1702471048/proyecto%20final/e2li9zpguhcjxa0zwc4l.jpg"
          alt="image-footballer-create"
        />
      </div>
    </section>
  );
}
