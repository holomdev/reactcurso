import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar Hola fabio', () => {
    const nombre = 'fabio';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre);
  });

  test('getSaludo debe retornar Hola Mundo por defecto', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Mundo');
  });
});
