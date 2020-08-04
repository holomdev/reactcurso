const personajes = ['Goku', 'Vegueta', 'Trunks'];

/* console.log(personajes);
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */

const [p1] = personajes;
console.log(p1);

const [, p2] = personajes;
console.log(p2);

const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//tarea
const useState = (valor) => {
    return [valor, () => { console.log('hola mundo') }];
}

const [nombre, setNombre] = useState('goku');
console.log(nombre);
setNombre();