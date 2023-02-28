import { heroes } from "./../data/heroes";

export function getHeroesByPublisher(value = "") {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(value)) {
    throw new Error(`Invalid publisher ${value}`);
  }
  return heroes.filter((heroe) => heroe.publisher === value);
}
