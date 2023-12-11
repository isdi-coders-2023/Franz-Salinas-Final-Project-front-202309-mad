import { Footballer } from '../../models/footballers';
import { makeImageUrlToProperSize } from '../../services/images';
import './card.scss';

type Props = {
  info: Footballer;
};

export const Card = ({ info }: Props) => {
  const footballerImage =
    info &&
    info.imageFootballer &&
    makeImageUrlToProperSize(info?.imageFootballer.publicId, 200);

  return (
    <>
      <div className=".fut-player-cards-container">
        <div className="fut-player-card">
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating">
                <span></span>
              </div>
              <div className="player-position">
                <span>{info.position}</span>
              </div>
            </div>
            <div className="player-picture">
              <img src={footballerImage} alt="Messi" draggable="false" />
            </div>
          </div>

          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name">
                <span>{info.overall}</span>
              </div>

              <div className="player-features">
                <div className="player-features-col">
                  <span>
                    <div className="player-feature-value">{info.pace}</div>
                    <div className="player-feature-title">PAC</div>
                  </span>
                  <span>
                    <div className="player-feature-value">{info.shoot}</div>
                    <div className="player-feature-title">SHO</div>
                  </span>
                  <span>
                    <div className="player-feature-value">{info.passing}</div>
                    <div className="player-feature-title">PAS</div>
                  </span>
                </div>
                <div className="player-features-col">
                  <span>
                    <div className="player-feature-value">{info.drible}</div>
                    <div className="player-feature-title">DRI</div>
                  </span>
                  <span>
                    <div className="player-feature-value">{info.defense}</div>
                    <div className="player-feature-title">DEF</div>
                  </span>
                  <span>
                    <div className="player-feature-value">
                      {info.physicality}
                    </div>
                    <div className="player-feature-title">PHY</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
