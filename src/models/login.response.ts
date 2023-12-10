import { User } from './users';

export type LoginResponse = {
  user: User;
  token: string;
};
