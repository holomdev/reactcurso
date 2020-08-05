//import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

//console.log(owners);

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//const heroe = getHeroeById(3);
//console.log(heroe);

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('DC'));
