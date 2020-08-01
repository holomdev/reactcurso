//funciones en javascript

//no es recomandable hacer funciones de esta manera
//por que accidentalemnete podemos sobreescribir

/* 
function saludar(nombre) {
    return `Hola ${nombre}`;
} 
*/

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar('fabio'));
console.log(saludar2('sanchez'));
console.log(saludar3('rosado'));
console.log(saludar4());
/* 
const getUser = () => {
    return {
        uid: 'abc123',
        username: 'El_Papi1502'
    }
}
*/

const getUser = () => ({
    uid: 'abc123',
    username: 'El_Papi1502'
})

const user = getUser();
console.log(user);

//tarea
//1. Transformen a una funcion flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
/* 
function getUsuarioActivo(nombre) {
    return {
        uid: 'abc456',
        username: nombre
    }
}
 */
const getUsuarioActivo = (nombre) => ({
    uid: 'abc456',
    username: nombre
})
const usuarioActivo = getUsuarioActivo('Pepe');
console.log(usuarioActivo);