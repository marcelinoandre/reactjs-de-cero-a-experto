import { getHeroeById } from './08-imp-exp';

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
          // Tarea
          // importen el
          const p1 = getHeroeById(id);
          if (p1) {
            resolve(p1);
          } else {
            reject('Hero not found');
          }
        }, 1500);
    
    });


}

