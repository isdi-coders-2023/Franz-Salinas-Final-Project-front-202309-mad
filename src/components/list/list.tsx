import { useEffect } from 'react';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Footballer } from '../../models/footballers';
import { Card } from '../card/card';
import './list.scss';
import { Filter } from '../filter/filter';

/* type Props = {
  footballerToRender: Footballer[] | undefined;
}; */
export const List = (/* { footballerToRender }: Props */) => {
  const {
    loadFootballer,
    footballers,
    footballerInitialState,
    footballerUpdateState,
  } = useFootballer();

  useEffect(() => {
    loadFootballer();
  }, [loadFootballer, footballerUpdateState]);

  if (footballerInitialState === 'loading') {
    return <p>LOADING</p>;
  }

  return (
    <>
      <h1>My Players</h1>
      <Filter></Filter>
      {
        <ul className="footballers-list">
          {footballers.map((item: Footballer) => (
            <Card key={item.id} info={item}></Card>
          ))}
        </ul>
      }
    </>
  );
};
