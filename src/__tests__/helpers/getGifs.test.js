import { getGifs } from '../../helpers/getGifs';

describe('Helpers/ GetGifis', () => {
  it('should have ten elements', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(10);
  });

  it('should have ten elements', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
