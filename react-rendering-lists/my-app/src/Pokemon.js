export default function PokemonList({ pokedex }) {
  const pokeList = pokedex.map((pokedex) => (
    <li key={pokedex.number}>{pokedex.name}</li>
  ));
  return <ul>{pokeList}</ul>;
}
