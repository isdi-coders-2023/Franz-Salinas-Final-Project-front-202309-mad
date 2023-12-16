import { useEffect } from 'react';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Footballer } from '../../models/footballers';
import { Card } from '../card/card';

import { useUsers } from '../../hooks/user.hooks';
import { ButtonCreateFootballer } from '../button-create-footballer/button.create.footballer';

/* type Props = {
  footballerToRender: Footballer[] | undefined;
}; */
export const UserList = (/* { footballerToRender }: Props */) => {
  const {
    loadFootballer,
    footballers,

    footballerUpdateState,
    // Suponiendo que tienes acceso a la información del usuario logeado
  } = useFootballer();

  const { loggedUser } = useUsers();

  useEffect(() => {
    loadFootballer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [footballerUpdateState]);

  if (footballerUpdateState === 'loading') {
    return <p>LOADING</p>;
  }

  // Filtrar los futbolistas del usuario logeado
  const userFootballers = footballers.filter(
    (item: Footballer) => item.author.id === loggedUser!.id // Ajusta esto según la estructura de tu objeto de usuario y los futbolistas
  );

  return (
    <>
      <ButtonCreateFootballer></ButtonCreateFootballer>
      <h1>My Players</h1>
      <ul className="footballers-list">
        {userFootballers.map((item: Footballer) => (
          <Card key={item.id} info={item}></Card>
        ))}
      </ul>
    </>
  );
};

// import { useUsers } from '../../hooks/user.hooks';
// import { ButtonCreateFootballer } from '../button-create-footballer/button.create.footballer';
// import { ButtonNextPage } from '../button-next-page/button.next.page';
// import { ButtonPreviousPage } from '../button-previous-page/button.previous.page';
// /* import { List } from '../list/list'; */
// import './my.players.scss';

// export function UserList() {
//   const { loggedUser } = useUsers();

//   return (
//     <div className="my-players-container">
//       <ButtonCreateFootballer></ButtonCreateFootballer>

//       <div {...loggedUser?.footballers}></div>
//       {/* <List footballerToRender={loggedUser!.footballers}></List> */}
//       <div className="my-players-button-container">
//         <ButtonPreviousPage></ButtonPreviousPage>
//         <ButtonNextPage></ButtonNextPage>
//       </div>
//     </div>
//   );
// }
