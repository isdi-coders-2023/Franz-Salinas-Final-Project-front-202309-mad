import { useEffect } from 'react';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Footballer } from '../../models/footballers';
import { Card } from '../card/card';
import './user.list.scss';

import { useUsers } from '../../hooks/user.hooks';
import { ButtonCreateFootballer } from '../button-create-footballer/button.create.footballer';
import { Filter } from '../filter/filter';

export const UserList = () => {
  const { loadFootballer, footballers, footballerUpdateState } =
    useFootballer();

  const { loggedUser } = useUsers();

  useEffect(() => {
    loadFootballer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadFootballer, footballerUpdateState]);

  if (footballerUpdateState === 'loading') {
    return <p>LOADING</p>;
  }

  // Filtrar los futbolistas del usuario logeado
  const userFootballers = footballers.filter(
    (item: Footballer) => item.author.id === loggedUser!.id // Ajusta esto según la estructura de tu objeto de usuario y los futbolistas
  );

  return (
    <>
      <div className="top-buttons-container">
        <div>
          <ButtonCreateFootballer></ButtonCreateFootballer>
        </div>
        <div>
          <Filter></Filter>
        </div>
      </div>

      <h1 className="my-team-title">My Team</h1>
      <ul className="footballers-list">
        {userFootballers.map((item: Footballer) => (
          <Card key={item.id} info={item}></Card>
        ))}
      </ul>
    </>
  );
};
