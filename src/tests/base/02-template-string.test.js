import '@testing-library/dom';
import { fullName } from '../../base/02-template-string';

describe('Test in file 02-template-string', () => {
  it('should concat name and lastname and return fullname', () => {
    expect(fullName('Andre', 'Marcelino')).toBe('Andre Marcelino');
  });

  it('should return Liz Bela if no parameter is passed', () => {
    expect(fullName()).toBe('Liz Bela');
  });
});
