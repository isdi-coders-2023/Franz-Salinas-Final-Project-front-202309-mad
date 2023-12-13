import { Footballer } from '../models/footballers';
import { LoginUser, User } from '../models/users';
import { FootballerRepo } from './footballer.repo';

describe('Given Class FootballerRepo ...', () => {
  describe('When we instantiate and the response is ok', () => {
    let jestMock: jest.Mock;

    beforeEach(() => {
      jestMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jestMock,
      });
    });
    const mockToken = '';
    const repo = new FootballerRepo(mockToken);

    test('Then the getFootballers should be used...', async () => {
      const userMock: Footballer[] = [];

      const result = await repo.getFootballers();
      expect(jestMock).toHaveBeenCalled();
      expect(result).toStrictEqual(userMock);
    });

    test('Then the getUsers should be used...', async () => {
      const userMock: User[] = [];

      const result = await repo.getUsers();
      expect(jestMock).toHaveBeenCalled();
      expect(result).toStrictEqual(userMock);
    });

    test('Then the loginUser should be used...', async () => {
      const result = await repo.loginUser({} as LoginUser);
      expect(jestMock).toHaveBeenCalled();
      expect(result).toStrictEqual([]);
    });

    test('Then the loginUserWithToken should be used...', async () => {
      const result = await repo.loginUserWithToken('token' as string);
      expect(jestMock).toHaveBeenCalled();
      expect(result).toStrictEqual([]);
    });

    test('Then the registerUser should be used...', async () => {
      const result = await repo.registerUser({} as FormData);
      expect(jestMock).toHaveBeenCalled();
      expect(result).toStrictEqual([]);
    });

    test('Then the createFootballer should be used...', async () => {
      const result = await repo.createFootballer({} as FormData);
      expect(jestMock).toHaveBeenCalled();
      expect(result).toStrictEqual([]);
    });
  });

  describe('When we instantiate and the response is not ok', () => {
    const errorStatus = 404;
    const errorStatusText = 'Not Found';

    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: errorStatus,
        statusText: errorStatusText,
      });
    });
    const repo = new FootballerRepo('');

    test('Then the getUsers should throw an error...', async () => {
      await expect(repo.getUsers()).rejects.toThrow();
    });

    test('Then the getFootballers should throw an error...', async () => {
      await expect(repo.getFootballers()).rejects.toThrow();
    });

    test('Then the registerUser should throw an error...', async () => {
      await expect(
        repo.registerUser([] as unknown as FormData)
      ).rejects.toThrow();
    });

    test('Then the createFootballer should throw an error...', async () => {
      await expect(
        repo.createFootballer([] as unknown as FormData)
      ).rejects.toThrow();
    });
    test('Then the loginUser should throw an error...', async () => {
      await expect(
        repo.loginUser([] as unknown as LoginUser)
      ).rejects.toThrow();
    });
    test('Then the loginUser should throw an error...', async () => {
      await expect(
        repo.loginUserWithToken('' as unknown as string)
      ).rejects.toThrow();
    });
  });
});
