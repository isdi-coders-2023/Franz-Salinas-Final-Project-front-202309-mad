import { useFootballer } from '../../hooks/footballer.hooks';

import { makeImageUrlToProperSize } from '../../services/images';

export const Details = () => {
  const { currentFootballer } = useFootballer();

  const detailsFootballerImage =
    currentFootballer &&
    currentFootballer.detailsImage &&
    makeImageUrlToProperSize(currentFootballer?.detailsImage.publicId, 100);

  return (
    <>
      <h2>{currentFootballer?.name}</h2>
      <div className="details-page-container" data-testid="details-container">
        <img src={detailsFootballerImage!} alt="footballer-image-details" />
        <p className="footballer-name"> {currentFootballer?.name}</p>
        <p className=""> {currentFootballer?.nationality}</p>
        <p className=""> {currentFootballer?.preferFoot}</p>
      </div>
    </>
  );
};
