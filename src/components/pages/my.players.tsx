import { ButtonCreateFootballer } from '../button-create-footballer/button.create.footballer';
import { ButtonNextPage } from '../button-next-page/button.next.page';
import { ButtonPreviousPage } from '../button-previous-page/button.previous.page';
import { Filter } from '../filter/filter';
import { List } from '../list/list';
import './my.players.scss';

export default function MyPlayers() {
  return (
    <div className="my-players-container">
      <div className="top-buttons-container">
        <ButtonCreateFootballer></ButtonCreateFootballer>
        <Filter></Filter>
      </div>

      <List></List>
      <div className="my-players-button-container">
        <ButtonPreviousPage></ButtonPreviousPage>
        <ButtonNextPage></ButtonNextPage>
      </div>
    </div>
  );
}
