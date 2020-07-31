
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 97314,
        lat: 14.555,
        lng: 23.5665
    }
};


const persona2 = {...persona};
persona2.nombre = "Fabio";

const persona3 = persona;

console.log(persona);
console.log(persona2);
console.log(persona3);