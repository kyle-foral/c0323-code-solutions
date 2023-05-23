export default function PokemonList({ pokedex }) {
  const pokeList = pokedex.map((pokedex) => <li> {pokedex.name}</li>);
  return <ul>{pokeList}</ul>;
}
