import React from 'react';
import '@testing-library/jest-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PrimeraApp from '../PrimeraApp';
Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas en <PrimeraApp />', () => {
  /* test('debe mostrar el mensaje "Hola soy Goku"', () => {
    const saludo = 'Hola soy Goku';
    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  }); */

  test('debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostar el subtitulo eviado por props ', () => {
    const saludo = 'Hola soy Goku';
    const subTitulo = 'Hola soy subtitulo XD';
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subTitulo);
  });
});
