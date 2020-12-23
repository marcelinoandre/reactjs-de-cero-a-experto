import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('PrimeiraApp', () => {
  // it('should show the message  "Hello World!" ', () => {
  //   const message = 'Hello World!';
  //   const { getByText } = render(<PrimeraApp saludo={message} />);
  //   expect(getByText(message)).toBeInTheDocument();
  // });

  it('should show the message "ola mundo', () => {
    const wrapper = shallow(<PrimeraApp saludo={'ola mundo'} />);

    expect(wrapper).toMatchSnapshot();
  });

  
  it('should show subtitulo send for props', () => {
    const title = 'ola mundo';
    const subtTitle = 'Ola Brasil';
    const wrapper = shallow(
      <PrimeraApp saludo={'ola mundo'} subtitulo={subtTitle} />
    );

    const txtInParagraph = wrapper.find('p').text().trim();

    expect(subtTitle).toBe(txtInParagraph);
  });


});
