async function logData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`fetch Error ${response.status}`);
    const jsonData = await response.json();
    console.log('Worked', jsonData);
  } catch (error) {
    console.error(error);
  }
}
logData();

async function pokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    if (!response.ok) throw new Error(`fetch Error ${response.status}`);
    const jsonData = await response.json();
    console.log('Ditto', jsonData);
  } catch (error) {
    console.error(error);
  }
}
pokemonData();
