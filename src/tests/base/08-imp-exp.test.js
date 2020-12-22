import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import { heroes } from '../../data/heroes';

describe('08-Heros', () => {
  it('should return  an hero ', () => {
    const id = 1;
    const hero = getHeroeById(id);

    const heroData = heroes.find(h => h.id === id);

    expect(hero).toEqual(heroData);
  });

  it('should return  undefined if hero not exists ', () => {
    const id = 10;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  it('should return  all heroes of DC ', () => {
    const owner = 'DC';
    const heroesDC = getHeroesByOwner(owner);

    const heroDataDC = heroesDC.filter(hDC => hDC.owner === owner);

    expect(heroesDC).toEqual(heroDataDC);
  });

  it('should return  two  heroes of Marvel ', () => {
    const owner = 'Marvel';
    const heroesMarvel = getHeroesByOwner(owner);
    expect(heroesMarvel.length).toBe(2);
  });
});
