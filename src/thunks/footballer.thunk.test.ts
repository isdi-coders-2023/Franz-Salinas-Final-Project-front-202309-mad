import { store } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';

import {
  createFootballerThunk,
  deleteFootballerThunk,
  filterFootballerThunk,
  loadFootballersThunk,
  updateFootballerThunk,
} from './footballer.thunk';
import { Footballer } from '../models/footballers';

describe('Given loadFootballersThunks ...', () => {
  describe('When we use them', () => {
    const mockRepo = {
      repo: {
        getFootballers: jest.fn().mockReturnValue([]),
        createFootballer: jest.fn().mockReturnValue({}),
        deleteFootballer: jest.fn().mockReturnValue([]),
        updateFootballer: jest.fn().mockReturnValue({}),
        filterFootballer: jest.fn().mockReturnValue([]),
      } as unknown as FootballerRepo,
    };
    const data = { ...mockRepo } as { repo: FootballerRepo };
    test('Then the getFootballers should have been called...', async () => {
      await store.dispatch(loadFootballersThunk(data.repo));
      expect(data.repo.getFootballers).toHaveBeenCalled();
    });

    test('Then the createFootballers should have been called...', async () => {
      const newFootballer = {} as FormData;
      const createData = { ...mockRepo } as { repo: FootballerRepo };

      await store.dispatch(
        createFootballerThunk({ repo: createData.repo, newFootballer })
      );
      expect(data.repo.createFootballer).toHaveBeenCalled();
    });

    test('Then the deleteFootballers should have been called...', async () => {
      const footballerId = {} as Footballer['id'];
      const createData = { ...mockRepo } as { repo: FootballerRepo };

      await store.dispatch(
        deleteFootballerThunk({ repo: createData.repo, footballerId })
      );
      expect(data.repo.createFootballer).toHaveBeenCalled();
    });

    test('Then the filterFootballers should have been called...', async () => {
      const footballerQuery = 'CM' as unknown as string;
      const createData = { ...mockRepo } as { repo: FootballerRepo };

      await store.dispatch(
        filterFootballerThunk({ repo: createData.repo, query: footballerQuery })
      );
      expect(data.repo.filterFootballer).toHaveBeenCalled();
    });

    test('Then the filterFootballers should have been called with an emphy string...', async () => {
      const footballerQuery = '' as unknown as string;
      const createData = { ...mockRepo } as { repo: FootballerRepo };

      await store.dispatch(
        filterFootballerThunk({
          repo: createData.repo,
          query: footballerQuery,
        })
      );
      expect(data.repo.filterFootballer).toHaveBeenCalled();
    });

    test('Then the updateFootballers should have been called...', async () => {
      const updateFootballer = {} as FormData;
      const createData = { ...mockRepo } as { repo: FootballerRepo };
      const footballerId = '123' as Footballer['id'];

      await store.dispatch(
        updateFootballerThunk({
          repo: createData.repo,
          updateFootballer,
          footballerId,
        })
      );
      expect(data.repo.updateFootballer).toHaveBeenCalled();
    });
  });
});
