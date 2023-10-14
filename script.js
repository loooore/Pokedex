const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImg = document.querySelector(".pokemon_img")

const form = document.querySelector(".form")
const input = document.querySelector(".input_search")
const btnPrev = document.querySelector(".btn_prev")
const btnNext = document.querySelector(".btn_next")

let serachPokemon = 1;

const fetchPokemon = async (pokemon) => { // O await só pode ser usadas em funções assíncronas(elas demoram um tempo para serem executadas)
    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''

    // O fetch é uma promise, ele pode demorar até passar a resposta. Então o await faz essa espera pra nós
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {  
        const data = APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonImg.style.display = "block";
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = `${data.id} -`;
        serachPokemon = data.id
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = ''
    } else {
        pokemonImg.style.display = "none";
        pokemonName.innerHTML = "Not Found :(";
        pokemonNumber = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase())
});

btnPrev.addEventListener('click', () => {
    if (serachPokemon > 1) {
        serachPokemon -= 1
        renderPokemon(serachPokemon)
    }
});

btnNext.addEventListener('click', () => {
    serachPokemon += 1
    renderPokemon(serachPokemon)
});

renderPokemon(serachPokemon);