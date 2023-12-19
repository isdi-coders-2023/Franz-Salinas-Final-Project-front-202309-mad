import { useFootballer } from '../../hooks/footballer.hooks';
import './details.scss';

import { makeImageUrlToProperSize } from '../../services/images';

export const Details = () => {
  const { currentFootballer } = useFootballer();

  const mobileDetailsFootballerImage =
    currentFootballer &&
    currentFootballer.detailsImage &&
    makeImageUrlToProperSize(currentFootballer?.detailsImage.publicId, 240);

  const detailsFootballerImage =
    currentFootballer &&
    currentFootballer.detailsImage &&
    makeImageUrlToProperSize(currentFootballer?.detailsImage.publicId, 500);

  const footballerCountryFlag =
    currentFootballer &&
    currentFootballer.countryFlag &&
    makeImageUrlToProperSize(currentFootballer?.countryFlag.publicId, 120);

  const footballerTeamShield =
    currentFootballer &&
    currentFootballer.teamShieldFlag &&
    makeImageUrlToProperSize(currentFootballer?.teamShieldFlag.publicId, 120);

  const mobileFootballerCountryFlag =
    currentFootballer &&
    currentFootballer.countryFlag &&
    makeImageUrlToProperSize(currentFootballer?.countryFlag.publicId, 30);

  const mobileFootballerTeamShield =
    currentFootballer &&
    currentFootballer.teamShieldFlag &&
    makeImageUrlToProperSize(currentFootballer?.teamShieldFlag.publicId, 30);

  return (
    <>
      <div className="details-page-container" data-testid="details-container">
        <div className="main-image-container">
          <div className="image-details-container">
            <img src={detailsFootballerImage!} alt="footballer-image-details" />
          </div>
          <div className="image-details-container-mobile">
            <img
              src={mobileDetailsFootballerImage!}
              alt="footballer-image-details-mobile"
            />
          </div>

          <div className="images-bottom">
            <div className="player-nation-flag">
              <img src={footballerCountryFlag!} alt="" />
            </div>
            <div className="player-nation-flag-mobile">
              <img src={mobileFootballerCountryFlag!} alt="" />
            </div>
            <div className="player-team-shield">
              <img src={footballerTeamShield!} alt="" />
            </div>
            <div className="player-team-shield-mobile">
              <img src={mobileFootballerTeamShield!} alt="" />
            </div>
          </div>
        </div>

        <div className="data-container">
          <div className="data-player-name">
            {' '}
            <p> {currentFootballer?.name} stats</p>
          </div>
          <div className="main-data-group">
            <div className="data-group">
              <div className="p-container">
                <p className="custom-details-writting">
                  SHO{' '}
                  <span className="data-small-container">
                    {currentFootballer?.shoot}
                  </span>
                </p>
              </div>
              <div className="p-container">
                <p className="custom-details-writting">
                  PAS{' '}
                  <span className="data-small-container">
                    {currentFootballer?.passing}
                  </span>
                </p>
              </div>
              <div className="p-container">
                <p className="custom-details-writting">
                  PAC{' '}
                  <span className="data-small-container">
                    {currentFootballer?.pace}
                  </span>
                </p>
              </div>
            </div>
            <div className="data-group2">
              <div className="p-container">
                <p className="custom-details-writting">
                  DRI{' '}
                  <span className="data-small-container">
                    {currentFootballer?.drible}
                  </span>
                </p>
              </div>
              <div className="p-container">
                <p className="custom-details-writting">
                  DEF{' '}
                  <span className="data-small-container">
                    {currentFootballer?.defense}
                  </span>
                </p>
              </div>
              <div className="p-container">
                <p className="custom-details-writting">
                  PHY{' '}
                  <span className="data-small-container">
                    {currentFootballer?.physicality}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="brief-story-container">
            <h2 className="brief-story-title">Brief Story </h2>
            <p className="p-brief-story">
              {currentFootballer?.briefStory}
            </p>{' '}
          </div>
        </div>
      </div>
    </>
  );
};
