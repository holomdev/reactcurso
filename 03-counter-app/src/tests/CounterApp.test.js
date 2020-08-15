import React from 'react';
const { shallow } = require('enzyme');
const { default: CounterApp } = require('../CounterApp');

describe('Pruebas en <CounterApp />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('Debe mostrar <CounterApp /> con el valor por defecto', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar <CounterApp /> con el valor 100', () => {
    const valor = 100;
    const wrapper = shallow(<CounterApp value={valor} />);
    const valorCounter = wrapper.find('h2').text().trim();
    expect(parseInt(valorCounter)).toBe(valor);
  });

  test('Debe de incrementar con el boton de +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const valorCounter = wrapper.find('h2').text().trim();
    expect(valorCounter).toBe('11');
  });

  test('Debe de decrementar con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const valorCounter = wrapper.find('h2').text().trim();
    expect(valorCounter).toBe('9');
  });
});
