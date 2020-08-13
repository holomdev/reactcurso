import '@testing-library/jest-dom';
const { getUser, getUsuarioActivo } = require('../../base/05-funciones');

describe('Pruebas en 05-funciones.js', () => {
  test('getUser() Debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test('getUsuarioActivo debe retornar un objeto con parametro', () => {
    const nombre = 'Fabio';
    const userTest = {
      uid: 'ABC567',
      username: nombre,
    };

    const user = getUsuarioActivo(nombre);
    expect(user).toEqual(userTest);
  });
});
