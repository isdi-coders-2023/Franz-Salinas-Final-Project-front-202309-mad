import { ButtonCreateFootballer } from '../button-create-footballer/button.create.footballer';
import { ButtonNextPage } from '../button-next-page/button.next.page';
import { ButtonPreviousPage } from '../button-previous-page/button.previous.page';
import { List } from '../list/list';
import './my.players.scss';

export const MyPlayers = () => {
  return (
    <div className="my-players-container">
      <ButtonCreateFootballer></ButtonCreateFootballer>

      <List></List>
      <div className="my-players-button-container">
        <ButtonPreviousPage></ButtonPreviousPage>
        <ButtonNextPage></ButtonNextPage>
      </div>
    </div>
  );
};
