import { Link, useNavigate, useParams } from 'react-router-dom';

import './edit.footballer.scss';
import { useFootballer } from '../../hooks/footballer.hooks';
import { SyntheticEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const EditFootballer = () => {
  const navigate = useNavigate();

  const {
    updateFootbaler,
    footballers,
    loadFootballer,

    footballerUpdateState,
  } = useFootballer();

  const { id } = useParams();
  const findedFootballer = footballers.find(
    (footballer) => footballer.id === id
  );

  const [findFootballer, setFootballer] = useState(findedFootballer);
  const [updatedFootballer, setUpdatedFootballer] = useState(false);

  useEffect(() => {
    if (findFootballer) {
      setFootballer(findFootballer);
    }
  }, [findFootballer]);

  useEffect(() => {
    loadFootballer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [footballerUpdateState]);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFootballer((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleUpdate = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const formData = new FormData(element);

    updateFootbaler(findFootballer!.id, formData);
    setUpdatedFootballer(true);
  };

  useEffect(() => {
    if (updatedFootballer) {
      Swal.fire({
        icon: 'success',
        title: 'Congrats your have edit a footballer card!',
        showConfirmButton: false,
        timer: 3000,
        width: 350,
      }).then(() => {
        setUpdatedFootballer(false);
        navigate('/myplayers');
      });
    }
  });

  return (
    <div className="main-edit-footballer-page-container">
      <div className="edit-footballer-title-container">
        <h1 className="title-edit-footballer"> Edit Footballer</h1>
      </div>
      <div className="main-edit-footballer-container">
        <form
          onSubmit={handleUpdate}
          className="edit-form"
          aria-label="form"
          data-testid="form-id"
        >
          <label>
            Name
            <input
              type="text"
              value={findFootballer?.name}
              name="name"
              placeholder="Nombre"
              className="input-edit"
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Position
            <input
              type="position"
              value={findFootballer?.position}
              name="position"
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="">
            Nationality
            <input
              type="text"
              value={findFootballer?.nationality}
              name="nationality"
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="">
            Age
            <input
              type="text"
              name="age"
              value={findFootballer?.age}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="">
            Surname
            <input
              type="text"
              name="surname"
              value={findFootballer?.surname}
              onChange={handleInputChange}
              required
            />
          </label>

          <label htmlFor="">
            PreferFoot
            <input
              type="text"
              name="preferFoot"
              value={findFootballer?.preferFoot}
              onChange={handleInputChange}
              required
            />
          </label>

          <label htmlFor="">
            Pace
            <input
              type="text"
              name="pace"
              value={findFootballer?.pace}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="">
            Shoot
            <input
              type="text"
              name="shoot"
              value={findFootballer?.shoot}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="">
            Passing
            <input
              type="text"
              name="passing"
              value={findFootballer?.passing}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="">
            Overall
            <input
              type="text"
              name="overall"
              value={findFootballer?.overall}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="">
            Drible
            <input
              type="text"
              name="drible"
              value={findFootballer?.drible}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="">
            Defense
            <input
              type="text"
              name="defense"
              value={findFootballer?.defense}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="">
            Physicality
            <input
              type="text"
              name="physicality"
              value={findFootballer?.physicality}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="">
            Current Team
            <input
              type="text"
              name="currentTeam"
              value={findFootballer?.currentTeam}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="">
            Image Footballer Card
            <input type="file" name="imageFootballer" />
          </label>
          <label htmlFor="">
            Country Flag
            <input type="file" name="countryFlag" />
          </label>
          <label htmlFor="">
            Team Shield
            <input type="file" name="teamShieldFlag" />
          </label>

          <label htmlFor="">
            Details Image
            <input type="file" name="detailsImage" />
          </label>
          <label htmlFor="">
            Brief Story
            <textarea
              name="info"
              id="info"
              value={findFootballer?.briefStory}
              onChange={handleInputChange}
              cols={25}
              rows={5}
            ></textarea>
          </label>
          <div className="buttons-container">
            <button type="submit" className="edit-send">
              Send
            </button>
            <button className="button-cancel-edit-page">
              <Link
                to={'/myplayers'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
