import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('PrimeiraApp', () => {
  it('should show the message  "Hello World!" ', () => {
    const message = 'Hello World!';
    const { getByText } = render(<PrimeraApp saludo={message} />);
    expect(getByText(message)).toBeInTheDocument();
  });
});
