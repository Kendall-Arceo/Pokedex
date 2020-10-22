const poke_container = document.getElementById('poke_container');

const pokemons_number = 150;

fetchPokemons();

const fetchPokemons = async () => {

    //for loop to get all 150 pokemons without using too much code
    for (let i=1; i<=pokemons_number; i++) {
        //Fetches API information from API url, i is the for loop above
        await fetchPokemon(i);
    }
}
const getPokemon = async id => {
    const url = `https://pokeapi.co/docs/v2/pokemon/${id}`;
    const res = await fetch[url];
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    //lists pokemon and appends information
    pokemonEl.classList.add('pokemon');
    //pokeinner adds info to the container above
    const pokeInnerHTML= '';
    pokemonEl.innerHTML = pokeInnerHTML
    poke_container.appendChild(pokemonEl)
}