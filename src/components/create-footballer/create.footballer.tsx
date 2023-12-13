import { SyntheticEvent, useState } from 'react';

import { useFootballer } from '../../hooks/footballer.hooks';
import { Link } from 'react-router-dom';

export const CreateFootballer = () => {
  const [hasCreate, setCreate] = useState(false);
  const { createFootballer } = useFootballer();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    createFootballer(formData);
    setCreate(true);
  };

  return (
    <>
      {!hasCreate && (
        <form onSubmit={handleSubmit} className="create-form" aria-label="form">
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
            Brief Story
            <input type="text" name="briefStory" />
          </label>
          <label htmlFor="">
            Image
            <input type="file" name="imageFootballer" required />
          </label>

          <button type="submit">Create</button>
          <button type="button">Cancel</button>
        </form>
      )}

      {hasCreate && (
        <div>
          <p>You have created a Footballer</p>
          <Link to={'./myplayers'}>
            <button type="button">Continue</button>
          </Link>
        </div>
      )}

      <link rel="stylesheet" href="" />
    </>
  );
};
