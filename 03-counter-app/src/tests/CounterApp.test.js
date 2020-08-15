import React from 'react';
const { shallow } = require('enzyme');
const { default: CounterApp } = require('../CounterApp');

describe('Pruebas en <CounterApp />', () => {
  test('Debe mostrar <CounterApp /> con el valor por defecto', () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar <CounterApp /> con el valor 100', () => {
    const valor = 100;
    const wrapper = shallow(<CounterApp value={valor} />);
    const valorCounter = wrapper.find('h2').text().trim();
    expect(parseInt(valorCounter)).toBe(valor);
  });
});
