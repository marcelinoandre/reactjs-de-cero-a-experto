import { getHeroeByIdAsync } from '../../base/09-promesas';
import { heroes } from '../../data/heroes';

describe('09-Promises GetHerosByAsync', () => {
  it('should return a heros async', done => {
    const id = 1;

    getHeroeByIdAsync(id).then(hero => {
      expect(hero).toBe(heroes[0]);
      done();
    });
  });

  it('should return error if the hero not exists', done => {
    const id = 10;
    getHeroeByIdAsync(id).catch(err => {
      expect(err).toBe('Hero not found');
      done();
    });
  });
});
