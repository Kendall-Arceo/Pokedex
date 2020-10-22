const poke_container = document.getElementById('poke_container');

const pokemons_number = 150;


//for loop to append each and ever 150 pokemon
const fetchPokemons = async () => {

    //for loop to get all 150 pokemons without using too much code
    for (let i=1; i<=pokemons_number; i++) {
        //Fetches API information from API url, i is the for loop above
        await getPokemon(i);
    }
}

//API info to be appended
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
    
}


fetchPokemons();

//creates card of the 150 pokemon
function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    //lists pokemon and appends information
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    //pokeinner adds info to the container above
    const pokeInnerHTML= `${name}
    
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML
    poke_container.appendChild(pokemonEl)
}