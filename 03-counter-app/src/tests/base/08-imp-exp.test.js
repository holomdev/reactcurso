import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruenas en 08-imp-exp.js', () => {
  test('Debe de retornar un heroe por ID', () => {
    const id = 2;
    const heroe = getHeroeById(id);
    const heroesData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroesData);
  });

  test('Debe de retornar undefined si heroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test('Debe retornar los heroes de DC', () => {
    const owner = 'DC';
    const dcHeroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);
    expect(dcHeroes).toEqual(heroesData);
  });

  test('Debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const marvelHeroes = getHeroesByOwner(owner);
    expect(marvelHeroes.length).toEqual(2);
  });
});
