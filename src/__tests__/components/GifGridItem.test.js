import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('GifGridItem', () => {
  const title = 'Title Img';
  const url = 'http://localhost:3000/gif.jpg';
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  it('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a paragraph with a title', () => {
    const paragrafo = wrapper.find('p');
    expect(paragrafo.text().trim()).toBe(title);
  });

  it('should have  in the image the tag alt equal to the title ', () => {
    const img = wrapper.find('img');
    expect(img.props().alt).toBe(title);
  });

  it('should have the className  "animate__fadeIn" ', () => {
    const div = wrapper.find('div');
    expect(div.props().className.includes('animate__fadeIn')).toBe(true);
  });
});
