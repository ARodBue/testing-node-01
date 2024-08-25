// const { emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring')
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');


// console.log(emailTemplate)

// const id = 1;

// Función con callback que devuelve un error si no encuentra el usuario con el id indicado
// getUserById(id, function (error, user) {
//     if (error) {
//         throw new Error(error, id);
//     }

//     console.log(user);
// });

// Función anterior pero realizada con arrow functions
// getUserById(id, (error, user) =>{
//     if (error) throw new Error(error, id);

//     console.log(user);
// })

// Ya que con el getAge y getUuid devolvemos un objeto debemos usar la desestructuración, si fuera una función se importaría automáticamente
// const { getAge, getUuid } = require('./plugins/index.js')


// ! Referencia a la función Factory y uso de dependencias

// Llamamos al método para crear las personas
// const { buildMakePerson } = require('./js-foundation/05-factory')

// Creamos una persona pero le indicamos por parámetro los plugins
// const makePerson = buildMakePerson({getUuid, getAge})

// const obj = {name: 'John', birthdate: '2000-12-11'}

// const john = makePerson(obj)

// console.log(john)

// import { getPokemonById } from './js-foundation/06-promises'

// getPokemonById(2)
//     .then( (pokemon) => {console.log({pokemon})})
//     .catch((error) => {console.error('Pokemon no encontrado')})

// Token de acceso

// Peticiones públicas

// ! Uso del Logger con Winston

// import { buildLogger } from './plugins/logger.plugin';

// const logger = buildLogger('app.js');

// logger.log('Hola mundo');
// logger.error('Esto es algo malo');