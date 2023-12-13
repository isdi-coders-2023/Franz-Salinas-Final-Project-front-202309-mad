import { store } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';

import { loadFootballersThunk } from './footballer.thunk';

describe('Given loadFootballersThunks ...', () => {
  describe('When we use them', () => {
    const mockRepo = {
      repo: {
        getFootballers: jest.fn().mockReturnValue([]),
        createFootballer: jest.fn().mockReturnValue({}),
      } as unknown as FootballerRepo,
    };

    test('Then the getFootballers should have been called...', async () => {
      const data = { ...mockRepo } as { repo: FootballerRepo };
      await store.dispatch(loadFootballersThunk(data.repo));
      expect(data.repo.getFootballers).toHaveBeenCalled();
    });
  });
});
