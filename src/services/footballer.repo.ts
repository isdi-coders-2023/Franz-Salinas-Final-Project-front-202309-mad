import { serverUrl } from '../../config';
import { Footballer } from '../models/footballers';
import { LoginResponse } from '../models/login.response';
import { LoginUser, User } from '../models/users';

export class FootballerRepo {
  url = serverUrl;
  userUrl = serverUrl + '/users';
  footballerUrl = serverUrl + '/footballers';

  constructor(public token: string) {}

  async getFootballers(): Promise<Footballer[]> {
    const response = await fetch(this.footballerUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async filterFootballer(query: string): Promise<Footballer[]> {
    const filterUrl = `${this.footballerUrl}/search?position=${query}`;
    const response = await fetch(filterUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getUsers(): Promise<User[]> {
    const response = await fetch(this.userUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createFootballer(newFootballer: FormData): Promise<Footballer> {
    const response = await fetch(this.footballerUrl, {
      method: 'POST',
      body: newFootballer,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteFootballer(footballerId: Footballer['id']): Promise<void> {
    const deleteUrl = `${this.footballerUrl}/${footballerId}`;
    const response = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
  }

  async registerUser(newUser: FormData): Promise<User> {
    const registerUrl = this.userUrl + '/register';
    const response = await fetch(registerUrl, {
      method: 'POST',
      body: newUser,
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateFootballer(
    footballerId: Footballer['id'],
    updateFootballer: FormData
  ): Promise<Footballer> {
    const updateUrl = `${this.footballerUrl}/${footballerId}`;
    const response = await fetch(updateUrl, {
      method: 'PATCH',
      body: updateFootballer,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loginUser(loginUser: LoginUser): Promise<LoginResponse> {
    const loginUrl = this.userUrl + '/login';
    const response = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loginUserWithToken(token: string): Promise<LoginResponse> {
    const loginWithTokenUrl = this.userUrl + '/login';
    const response = await fetch(loginWithTokenUrl, {
      method: 'PATCH',
      body: JSON.stringify(token),
      headers: {
        Authorizarion: `Bearer ${token}`,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
