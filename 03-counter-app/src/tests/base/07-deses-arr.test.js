import '@testing-library/jest-dom';
const { retornaArreglo } = require('../../base/07-deses-arr');

describe('Prubas en 07-deses-arr.js', () => {
  test('Debe retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe('number');
  });
});
