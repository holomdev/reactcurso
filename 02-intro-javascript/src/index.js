//import { heroes } from './data/heroes';

import { heroes } from './data/heroes';

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

const heroe = getHeroeById(3);
console.log(heroe);

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner('DC'));