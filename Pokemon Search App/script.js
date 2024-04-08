const pokemonApiUrl = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const imgFigure = document.getElementById('img-figure');

const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const fetchData = async (userInput) => {
  searchInput.value = '';
  types.textContent = '';
  const input = userInput.toLowerCase().replace(/[^a-z0-9-]/g, "");
  try {
    const res = await fetch(`${pokemonApiUrl}/${input}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const showPokemonData = async (input) => {
  const data = await fetchData(input);
  if (data) {
    imgFigure.innerHTML = `
      <img id="sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
    `;
    pokemonName.textContent = data.name.toUpperCase();
    pokemonId.textContent = data.id
    weight.textContent = data.weight
    height.textContent = data.height
    types.innerHTML = data.types.map(typeObject => `
    <p> ${typeObject.type.name.toUpperCase()}</p>
    `)
    for (const stat of data.stats) {
        if (stat.stat.name === 'hp') {
            hp.textContent = stat.base_stat; 
        }
        if (stat.stat.name === 'attack') {
            attack.textContent = stat.base_stat; 
        }
        if (stat.stat.name === 'defense') {
            defense.textContent = stat.base_stat; 
        }
        if (stat.stat.name === 'special-attack') {
            specialAttack.textContent = stat.base_stat; 
        }
        if (stat.stat.name === 'special-defense') {
            specialDefense.textContent = stat.base_stat; 
        }
        if (stat.stat.name === 'speed') {
            speed.textContent = stat.base_stat;
            break; 
        }
    }
  } else {
    alert('Pokémon not found');
  }
};

searchBtn.addEventListener('click', () => showPokemonData(searchInput.value));
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    showPokemonData(searchInput.value);
  } 
})