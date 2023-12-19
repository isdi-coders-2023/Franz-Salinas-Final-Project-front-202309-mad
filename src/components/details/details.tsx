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
        <h2>{currentFootballer?.name}</h2>

        <div className="image-details-container">
          <img src={detailsFootballerImage!} alt="footballer-image-details" />
        </div>
        <div className="data-container">
          {' '}
          <p className="footballer-name"> {currentFootballer?.name}</p>
          <p className=""> {currentFootballer?.nationality}</p>
          <p className=""> {currentFootballer?.preferFoot}</p>
        </div>
      </div>
    </>
  );
};
