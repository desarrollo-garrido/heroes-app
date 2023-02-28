import { heroes } from '../data/heroes';
export function getHeroeById(id) {
    return heroes.find(heroe => heroe.id === id)
}