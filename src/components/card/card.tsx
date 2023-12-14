import { Link } from 'react-router-dom';
import { Footballer } from '../../models/footballers';
import { makeImageUrlToProperSize } from '../../services/images';
import './card.scss';
import { useFootballer } from '../../hooks/footballer.hooks';

type Props = {
  info: Footballer;
};

export const Card = ({ info }: Props) => {
  const { handleDetailsPage, deleteFootballer } = useFootballer();

  const handleDelete = () => {
    deleteFootballer(info.id);
  };

  const mobileFootballerImage =
    info &&
    info.imageFootballer &&
    makeImageUrlToProperSize(info?.imageFootballer.publicId, 100);

  const footballerImage =
    info &&
    info.imageFootballer &&
    makeImageUrlToProperSize(info?.imageFootballer.publicId, 200);

  const footballerTeamShield =
    info &&
    info.teamShieldFlag &&
    makeImageUrlToProperSize(info?.teamShieldFlag.publicId, 30);

  const footballerFlag =
    info &&
    info.countryFlag &&
    makeImageUrlToProperSize(info?.countryFlag.publicId, 20);

  return (
    <>
      <div className=".fut-player-cards-container">
        <div className="fut-player-card">
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-position">
                <span className="span-player-position">{info.position}</span>
              </div>
              <div className="player-nation">
                <img
                  src={footballerFlag}
                  alt={`imagen de ${info.nationality} `}
                  draggable="false"
                />
              </div>
              <div className="player-club">
                <img
                  src={footballerTeamShield}
                  alt="Barcelona"
                  draggable="false"
                />
              </div>
              <div className="player-rating">
                <span></span>
              </div>

              <div className="button-edit"></div>

              <Link
                to={'/details/' + info.id}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className="button-details"
                  data-testid="button-details"
                  onClick={() => handleDetailsPage(info)}
                ></div>
              </Link>
              <button className="button-delete" onClick={handleDelete}></button>
              {/* <div className="player-overall">{info.overall}</div> */}
            </div>
            <div className="player-picture">
              <img
                role="button"
                src={footballerImage}
                alt="footballer-card"
                draggable="false"
              />
            </div>
            <div className="player-picture-mobile">
              <img
                src={mobileFootballerImage}
                alt="footballer-card"
                draggable="false"
              />
            </div>
          </div>

          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name">
                <span className="span-player-name">{info.name}</span>
              </div>

              <div className="player-features">
                <div className="player-features-col">
                  <span className="player-stats">
                    <div className="player-feature-value">{info.pace}</div>
                    <div className="player-feature-title">PAC</div>
                  </span>
                  <span className="player-stats">
                    <div className="player-feature-value">{info.shoot}</div>
                    <div className="player-feature-title">SHO</div>
                  </span>
                  <span className="player-stats">
                    <div className="player-feature-value">{info.passing}</div>
                    <div className="player-feature-title">PAS</div>
                  </span>
                </div>
                <div className="player-features-col">
                  <span className="player-stats">
                    <div className="player-feature-value">{info.drible}</div>
                    <div className="player-feature-title">DRI</div>
                  </span>
                  <span className="player-stats">
                    <div className="player-feature-value">{info.defense}</div>
                    <div className="player-feature-title">DEF</div>
                  </span>
                  <span className="player-stats">
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
      <></>
    </>
  );
};

/*  Tem por si agrego
  <div className="player-nation">
                <img
                  src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg"
                  alt="Argentina"
                  draggable="false"
                />
              </div>
              <div className="player-club">
                <img
                  src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg"
                  alt="Barcelona"
                  draggable="false"
                />
              </div> */
