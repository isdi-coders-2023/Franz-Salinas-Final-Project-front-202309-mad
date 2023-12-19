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
    <>
      <div className="main-create-footballer-page-container">
        <div className="main-create-footballer-container">
          <div className="create-footballer-title-container">
            <h1 className="title-create-footballer">Create Footballer</h1>
          </div>

          {!hasCreate && (
            <form
              onSubmit={handleSubmit}
              className="create-form"
              aria-label="form"
            >
              <div className="input-create-form">
                <div className="label-input-container-1">
                  <label htmlFor="">
                    Name
                    <input type="text" name="name" />
                  </label>
                </div>
                <div className="label-input-container-2">
                  <label htmlFor="">
                    Surname
                    <input type="text" name="surname" />
                  </label>
                </div>
                <div className="label-input-container-3">
                  <label htmlFor="">
                    Age
                    <input type="text" name="age" />
                  </label>
                </div>
                <div className="label-input-container-4">
                  <label htmlFor="">
                    Position
                    <input type="text" name="position" required />
                  </label>
                </div>
              </div>
              <div className="input-create-form-2">
                <div className="label-input-container-5">
                  <label htmlFor="">
                    Nationality
                    <input type="text" name="nationality" />
                  </label>
                </div>
                <div className="label-input-container-6">
                  <label htmlFor="">
                    Prefer Foot
                    <input type="text" name="preferFoot" />
                  </label>
                </div>
                <div className="label-input-container-7">
                  <label htmlFor="">
                    Pace
                    <input type="text" name="pace" />
                  </label>
                </div>
                <div className="label-input-container-8">
                  <label htmlFor="">
                    Shoot
                    <input type="text" name="shoot" />
                  </label>
                </div>
              </div>

              <div className="input-create-form-3">
                <div className="label-input-container-9">
                  <label htmlFor="">
                    Passing
                    <input type="text" name="passing" />
                  </label>
                </div>
                <div className="label-input-container-10">
                  <label htmlFor="">
                    Overall
                    <input type="text" name="overall" />
                  </label>
                </div>
                <div className="label-input-container-11">
                  <label htmlFor="">
                    Drible
                    <input type="text" name="drible" />
                  </label>
                </div>
                <div className="label-input-container-12">
                  <label htmlFor="">
                    Defense
                    <input type="text" name="defense" />
                  </label>
                </div>
              </div>

              <div className="input-create-form4">
                <div className="label-input-container-13">
                  <label htmlFor="">
                    Physicality
                    <input type="text" name="physicality" />
                  </label>
                </div>
                <div className="label-input-container-14">
                  <label htmlFor="">
                    Current Team
                    <input type="text" name="currentTeam" />
                  </label>
                </div>
                <div className="label-input-container-15">
                  <label htmlFor="">
                    Expected Goals
                    <input type="text" name="expectedGoals" />
                  </label>
                </div>
                <div className="label-input-container-16">
                  <label htmlFor="">
                    Image Card
                    <input type="file" name="imageFootballer" required />
                  </label>
                </div>
              </div>
              <div className="input-create-form5">
                <div className="label-input-container-17">
                  <label htmlFor="">
                    Details Image
                    <input type="file" name="detailsImage" required />
                  </label>
                </div>
                <div className="label-input-container-18">
                  <label htmlFor="">
                    Country Flag
                    <input type="file" name="countryFlag" required />
                  </label>
                </div>
                <div className="label-input-container-19">
                  <label htmlFor="">
                    Team Shield
                    <input type="file" name="teamShieldFlag" required />
                  </label>
                </div>
                <div className="label-input-container-20">
                  <label htmlFor="">
                    Brief Story
                    <textarea
                      name="info"
                      id="info"
                      cols={30}
                      rows={5}
                    ></textarea>
                  </label>
                </div>
              </div>

              <button type="submit">Create</button>
              <button type="button">Cancel</button>
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
    </>
  );
};
