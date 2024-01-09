import { useEffect } from 'react';
import { useFootballer } from '../../hooks/footballer.hooks';
import { useUsers } from '../../hooks/user.hooks';
import './team.formation.scss';
import { Footballer } from '../../models/footballers';
import { Card } from '../card/card';

export const TeamFormation = () => {
  const { loadFootballer, footballers, footballerUpdateState } =
    useFootballer();

  const { loggedUser } = useUsers();

  useEffect(() => {
    loadFootballer();
  }, [loadFootballer, footballerUpdateState]);

  const userFootballers = footballers.filter(
    (item: Footballer) => item.author.id === loggedUser!.id
  );

  const firtsEleven = userFootballers.slice(0, 11);
  /* const restOfFootballers = userFootballers.slice(11); */

  return (
    <>
      <div className="main-team-formation-container">
        <div className="field-image-container">
          <img
            src="https://res.cloudinary.com/dnlkezvzv/image/upload/h_550/v1701972255/proyecto%20final/wbzvsrmccucswwsiztaw.jpg"
            alt=""
          />
          <div className="field-players">
            <div className="goalkeaper">
              {firtsEleven.slice(0, 1).map((item: Footballer) => (
                <Card key={item.id} info={item}></Card>
              ))}{' '}
            </div>
            <div className="defenders">
              {firtsEleven.slice(1, 5).map((item: Footballer) => (
                <Card key={item.id} info={item}></Card>
              ))}
            </div>
            <div className="midfielders">
              {firtsEleven.slice(5, 7).map((item: Footballer) => (
                <Card key={item.id} info={item}></Card>
              ))}
            </div>
            <div className="forwards">
              {firtsEleven.slice(7).map((item: Footballer) => (
                <Card key={item.id} info={item}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
