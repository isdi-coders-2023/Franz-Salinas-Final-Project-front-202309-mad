import { Footballer } from '../../models/footballers';
import { makeImageUrlToProperSize } from '../../services/images';

type Props = {
  info: Footballer;
};

export const Card = ({ info }: Props) => {
  const footballerImage =
    info &&
    info.imageFootballer &&
    makeImageUrlToProperSize(info?.imageFootballer.publicId, 100);

  return (
    <>
      <div className="footballer-card">
        <img src={footballerImage} alt="" />
      </div>
    </>
  );
};
