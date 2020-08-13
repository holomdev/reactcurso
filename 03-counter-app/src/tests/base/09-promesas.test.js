import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas en 09-promesas.js', () => {
  test('Debe de retornar un Heroe Async getHeroeByIdAsync', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('Debe retornar un heroe que no existe Async getHeroeByIdAsync', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
