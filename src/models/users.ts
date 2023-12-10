import { Footballer } from './footballers';
import { ImgData } from './img.data';

export type LoginUser = {
  email: string;
  password: string;
};

export type User = LoginUser & {
  id: string;
  name: string;
  surname: string;
  avatar: ImgData;
  role: 'Admin' | 'User';
  footballers: Footballer[];
  teamName: string;
  styleOfPlay: string;
};
