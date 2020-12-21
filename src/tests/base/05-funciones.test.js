import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Tests in 05-funciones', () => {
  const userTest = {
    uid: 'ABC123',
    username: 'El_Papi1502'
  };

  beforeEach(() => {});

  it('should return an object', () => {
    const user = getUser(userTest);
    expect(user).toEqual(userTest);
  });

  describe('GetUsuarioActivo', () => {
    it('should return an object', () => {
      const name = 'Luiz';
      const user = getUsuarioActivo(name);

      expect(user).toEqual({
        uid: 'ABC567',
        username: name
      });
    });
  });
});
