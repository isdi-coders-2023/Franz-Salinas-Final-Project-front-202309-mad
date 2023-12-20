import { SyntheticEvent, useState } from 'react';
import './create.footballer.scss';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Link, useNavigate } from 'react-router-dom';

export const CreateFootballer = () => {
  const [hasCreate, setCreate] = useState(false);
  const { createFootballer } = useFootballer();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    createFootballer(formData);
    setCreate(true);
    navigate('/myplayers');
  };

  return (
    <div className="main-create-footballer-page-container">
      <div className="create-footballer-title-container">
        <h1 className="title-create-footballer">Create Footballer</h1>
      </div>
      <div className="main-create-footballer-container">
        {!hasCreate && (
          <form
            onSubmit={handleSubmit}
            className="create-form"
            aria-label="form"
          >
            <label htmlFor="">
              Name
              <input type="text" name="name" />
            </label>

            <label htmlFor="">
              Surname
              <input type="text" name="surname" />
            </label>

            <label htmlFor="">
              Age
              <input type="text" name="age" />
            </label>

            <label htmlFor="">
              Position
              <input type="text" name="position" required />
            </label>

            <label htmlFor="">
              Nationality
              <input type="text" name="nationality" />
            </label>

            <label htmlFor="">
              Prefer Foot
              <input type="text" name="preferFoot" />
            </label>

            <label htmlFor="">
              Pace
              <input type="text" name="pace" />
            </label>

            <label htmlFor="">
              Shoot
              <input type="text" name="shoot" />
            </label>

            <label htmlFor="">
              Passing
              <input type="text" name="passing" />
            </label>

            <label htmlFor="">
              Overall
              <input type="text" name="overall" />
            </label>

            <label htmlFor="">
              Drible
              <input type="text" name="drible" />
            </label>

            <label htmlFor="">
              Defense
              <input type="text" name="defense" />
            </label>

            <label htmlFor="">
              Physicality
              <input type="text" name="physicality" />
            </label>

            <label htmlFor="">
              Current Team
              <input type="text" name="currentTeam" />
            </label>

            <label htmlFor="">
              Image Card
              <input type="file" name="imageFootballer" required />
            </label>

            <label htmlFor="">
              Details Image
              <input type="file" name="detailsImage" required />
            </label>

            <label htmlFor="">
              Country Flag
              <input type="file" name="countryFlag" required />
            </label>

            <label htmlFor="">
              Team Shield
              <input type="file" name="teamShieldFlag" required />
            </label>

            <label htmlFor="">
              Brief Story
              <textarea name="info" id="info" cols={25} rows={5}></textarea>
            </label>

            <div className="create-footballerr-buttons-container">
              {' '}
              <div className="create-footballer-button-container">
                <button className="create-footballer-button" type="submit">
                  Create
                </button>
              </div>
              <div className="create-footballer-cancel-button-container">
                {' '}
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <button
                    className="create-footballer-cancel-button"
                    type="button"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
      {hasCreate && (
        <div>
          <p>You have created a Footballer</p>
          <Link to={'./myplayers'}>
            <button type="button">Continue</button>
          </Link>
        </div>
      )}
    </div>
  );
};
