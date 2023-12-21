import { useEffect } from 'react';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Footballer } from '../../models/footballers';
import { Card } from '../card/card';
import './list.scss';

export const List = () => {
  const {
    loadFootballer,
    footballers,

    footballerUpdateState,
  } = useFootballer();

  useEffect(() => {
    loadFootballer();
  }, [loadFootballer, footballerUpdateState]);

  return (
    <>
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
