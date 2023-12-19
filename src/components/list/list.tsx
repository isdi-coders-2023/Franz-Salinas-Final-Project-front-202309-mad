import { useEffect } from 'react';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Footballer } from '../../models/footballers';
import { Card } from '../card/card';
import './list.scss';

export const List = () => {
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
      <h1 className="my-players-title">My Players</h1>

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
