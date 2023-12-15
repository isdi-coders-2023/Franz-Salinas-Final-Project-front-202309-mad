import { ImgData } from './img.data';
import { User } from './users';

export type Footballer = {
  id: string;
  name: string;
  position: string;
  nationality: string;
  age: string;
  surname: string;
  preferFoot: string;
  author: User;

  pace: string;
  shoot: string;
  passing: string;
  overall: string;
  drible: string;
  defense: string;
  physicality: string;
  briefStory: string;
  imageFootballer: ImgData;
  countryFlag: ImgData;
  teamShieldFlag: ImgData;
  currentTeam: string;
  detailsImage: ImgData;
};
