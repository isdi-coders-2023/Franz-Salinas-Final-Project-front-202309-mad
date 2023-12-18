import { useEffect } from 'react';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Footballer } from '../../models/footballers';
import { Card } from '../card/card';
import './list.scss';

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
