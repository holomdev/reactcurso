import { getHeroeById } from './08-imp-exp'

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(3);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe');
    }, 2000);
});

promesa
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se encontro el heroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(40)
    .then((heroe) => {
        console.log(heroe);
    })
    .catch((err) => {
        console.log(err);
    })

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn)