const poke_container = document.getElementById('poke_container');

const pokemons_number = 150;

const getPokemon = async id => {
    const url = `https://pokeapi.co/docs/v2/pokemon/${id}`;
    const res = await fetch[url];
    const pokemon = await res.json();
    console.log(pokemon);
}
