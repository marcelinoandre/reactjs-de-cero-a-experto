import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  let submitForm = wrapper
    .find('form')
    .simulate('submit', { preventDefault() {} });

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  it('should show corretly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should exchange the input text', () => {
    let input = wrapper.find('input');
    const valueTxt = 'Ola mundo';

    input.simulate('change', { target: { value: valueTxt } });

    expect(wrapper.find('p').text().trim()).toBe(valueTxt);
  });

  it('should return nothing if input is  empty  ', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  it('should  called the setCategories and clear the input text', () => {
    const cxText = wrapper.find('input');
    const category = 'Ola mundo';

    cxText.simulate('change', { target: { value: category } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(cxText.text().trim()).toBe('');
  });
});
