import { ButtonCreateFootballer } from '../button-create-footballer/button.create.footballer';

import { Filter } from '../filter/filter';
import { List } from '../list/list';
import './my.players.scss';

export default function MyPlayers() {
  return (
    <div className="my-players-container">
      <h1 className="my-players-title">Our Dream Players</h1>
      <div className="top-buttons-container">
        <ButtonCreateFootballer></ButtonCreateFootballer>
        <Filter></Filter>
      </div>

      <List></List>
      <div className="my-players-button-container"></div>
    </div>
  );
}
