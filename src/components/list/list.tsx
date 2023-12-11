import { useEffect } from 'react';
import { useFootballer } from '../../hooks/footballer.hooks';
import { Footballer } from '../../models/footballers';
import { Card } from '../card/card';
import './list.scss';

export const List = () => {
  const { loadFootballer, footballers, footballerInitialState } =
    useFootballer();

  useEffect(() => {
    loadFootballer();
  }, [loadFootballer]);

  if (footballerInitialState === 'loading') {
    return <p>LOADING</p>;
  }

  return (
    <>
      {footballers.length > 0 && (
        <ul className="footballers-list">
          {footballers.map((item: Footballer) => (
            <Card info={item} key={item.id}></Card>
          ))}
        </ul>
      )}
    </>
  );
};
