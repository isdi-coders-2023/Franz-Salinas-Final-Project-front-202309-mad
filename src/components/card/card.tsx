import { Link } from 'react-router-dom';
import { Footballer } from '../../models/footballers';
import { makeImageUrlToProperSize } from '../../services/images';
import './card.scss';
import { useFootballer } from '../../hooks/footballer.hooks';
import Swal from 'sweetalert2';
import { useUsers } from '../../hooks/user.hooks';

type Props = {
  info: Footballer;
};

export const Card = ({ info }: Props) => {
  const { handleDetailsPage, deleteFootballer } = useFootballer();
  const { loggedUser } = useUsers();

  const mobileFootballerImage =
    info &&
    info.imageFootballer &&
    makeImageUrlToProperSize(info?.imageFootballer.publicId, 100);

  const footballerImage =
    info &&
    info.imageFootballer &&
    makeImageUrlToProperSize(info?.imageFootballer.publicId, 190);

  const footballerTeamShield =
    info &&
    info.teamShieldFlag &&
    makeImageUrlToProperSize(info?.teamShieldFlag.publicId, 30);

  const footballerFlag =
    info &&
    info.countryFlag &&
    makeImageUrlToProperSize(info?.countryFlag.publicId, 20);

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure you want to delete this card?',
      showDenyButton: true,
      confirmButtonText: 'Accept',
      denyButtonText: 'Cancel',
      customClass: {
        popup: 'my-swal-popup', // Clase personalizada para el contenedor principal
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFootballer(info.id);
        Swal.fire({
          title: 'Card Deleted',
          icon: 'success',
        });
      }
    });
  };

  return (
    <>
      <div className=".fut-player-cards-container">
        <div className="fut-player-card">
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating">{info.overall}</div>
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

              {loggedUser && (
                <Link
                  to={'/edit/' + info.id}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="button-edit">
                    <i className="fa-solid fa-pencil"></i>
                  </div>
                </Link>
              )}

              <Link
                to={'/details/' + info.id}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  role="button"
                  className="button-details"
                  data-testid="button-details"
                  onClick={() => handleDetailsPage(info)}
                >
                  <i className="fa-solid fa-eye"></i>
                </div>
              </Link>

              {loggedUser && (
                <div
                  className="button-delete"
                  role="button"
                  onClick={() => handleDelete()}
                >
                  <i className="fa-solid fa-eraser"></i>
                </div>
              )}

              {/* <div className="player-overall">{info.overall}</div> */}
            </div>
            <div className="player-picture">
              <img
                className="player-picture-img"
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
