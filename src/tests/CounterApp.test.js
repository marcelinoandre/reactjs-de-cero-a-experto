import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('CounterApp', () => {
  let componentCounter = shallow(<CounterApp value={10} />);

  beforeEach(() => {
    componentCounter = shallow(<CounterApp value={10} />);
  });

  it('should show value default counter', () => {
    expect(componentCounter).toMatchSnapshot();
  });

  it('should return value = 100', () => {
    const componentCounter = shallow(<CounterApp value={100} />);

    const valueDefault = componentCounter.find('h2').text();
    expect(parseInt(valueDefault)).toBe(100);
  });

  it('should increment count when button +1 is clicled', () => {
    componentCounter.find('button').at(0).simulate('click');
    const valueIncremented = componentCounter.find('h2').text().trim();
    expect(valueIncremented).toBe('11');
  });

  it('should decrement count when button -1 is clicled', () => {
    componentCounter.find('button').at(2).simulate('click');

    const valueIncremented = componentCounter.find('h2').text().trim();
    expect(valueIncremented).toBe('9');
  });

  it('should return for value default after the increments or decrements', () => {
    componentCounter.find('button').at(0).simulate('click');
    componentCounter.find('button').at(0).simulate('click');
    componentCounter.find('button').at(2).simulate('click');

    const btnResetValue = componentCounter.find('button').at(2);
    btnResetValue.simulate('click');

    const valueIncremented = componentCounter.find('h2').text().trim();

    expect(valueIncremented).toBe('10');
  });
});
