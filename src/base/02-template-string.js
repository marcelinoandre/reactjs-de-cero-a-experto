const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log( nombreCompleto );

function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

export const fullName = (name = 'Liz', lastName = 'Bela') => {
  return `${name} ${lastName}`;
};

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
