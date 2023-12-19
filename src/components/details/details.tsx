import { useFootballer } from '../../hooks/footballer.hooks';
import './details.scss';

import { makeImageUrlToProperSize } from '../../services/images';

export const Details = () => {
  const { currentFootballer } = useFootballer();

  const detailsFootballerImage =
    currentFootballer &&
    currentFootballer.detailsImage &&
    makeImageUrlToProperSize(currentFootballer?.detailsImage.publicId, 500);

  return (
    <>
      <div className="details-page-container" data-testid="details-container">
        <div className="image-details-container">
          <img src={detailsFootballerImage!} alt="footballer-image-details" />
        </div>

        <div className="data-container">
          <div className="data-player-name">
            {' '}
            <p> {currentFootballer?.name}</p>
          </div>

          <div className="data-group">
            <p className="custom-details-writting">
              Shoot{' '}
              <span className="data-small-container">
                {currentFootballer?.shoot}
              </span>
            </p>
            <p className="custom-details-writting">
              Passing{' '}
              <span className="data-small-container">
                {currentFootballer?.passing}
              </span>
            </p>
          </div>
          <div className="data-group">
            <p className="custom-details-writting">
              Pace{' '}
              <span className="data-small-container">
                {currentFootballer?.pace}
              </span>
            </p>
            <p className="custom-details-writting">
              Drible{' '}
              <span className="data-small-container">
                {currentFootballer?.drible}
              </span>
            </p>
          </div>
          <div className="data-group">
            <p className="custom-details-writting">
              Defense{' '}
              <span className="data-small-container">
                {currentFootballer?.defense}
              </span>
            </p>
            <p className="custom-details-writting">
              Phisicality{' '}
              <span className="data-small-container">
                {currentFootballer?.physicality}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
