import { Footballer } from '../../models/footballers';

type Props = {
  info: Footballer;
};

export const Card = ({ info }: Props) => {
  return (
    <>
      <div className="footballer-card">
        <img src="" alt="" />
      </div>
    </>
  );
};
