const pokemonName = document.querySelector(".pokemon_name")
const pokemonNumber = document.querySelector(".pokemon_number")
const pokemonImg = document.querySelector(".pokemon_img")
const divType = document.querySelector(".types")

const form = document.querySelector(".form")
const input = document.querySelector(".input_search")
const btnPrev = document.querySelector(".btn_prev")
const btnNext = document.querySelector(".btn_next")

let searchPokemon = 1;

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
        if (data.id <= 649) {
            pokemonImg.style.display = "block";
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = `${data.id} -`;
            searchPokemon = data.id
            pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            input.value = ''

            

            let type0
            let type1

            if (data.types.length == 1) {
                type0 = data.types[0].type.name

                PokemonTypeLength1(type0)

            } else if (data.types.length == 2) {
                type0 = data.types[0].type.name
                type1 = data.types[1].type.name

                PokemonType0Length2(type0)
                PokemonType1Length2(type1)
            }

        } else {
            pokemonImg.style.display = "none";
            pokemonName.innerHTML = "Not Found :(";
            pokemonNumber = '';
        }
    } else {
        pokemonImg.style.display = "none";
        pokemonName.innerHTML = "Not Found :(";
        pokemonNumber = '';
    }

    function PokemonTypeLength1(type0) {
        if (type0 == 'normal') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/8c/Normal_icon_HOME3.png'
            typeImg.alt = 'normal'
            divType.appendChild(typeImg)
        } else if (type0 == 'fighting') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c2/Fighting_icon_HOME3.png'
            typeImg.alt = 'fighting'
            divType.appendChild(typeImg)
        } else if (type0 == 'flying') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c5/Flying_icon_HOME3.png'
            typeImg.alt = 'flying'
            divType.appendChild(typeImg)
        } else if (type0 == 'flying') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c5/Flying_icon_HOME3.png'
            typeImg.alt = 'flying'
        } else if (type0 == 'poison') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/9/98/Poison_icon_HOME3.png'
            typeImg.alt = 'poison'
            divType.appendChild(typeImg)
        } else if (type0 == 'ground') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/e/ee/Ground_icon_HOME3.png'
            typeImg.alt = 'ground'
            divType.appendChild(typeImg)
        } else if (type0 == 'rock') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/5/51/Rock_icon_HOME3.png'
            typeImg.alt = 'rock'
            divType.appendChild(typeImg)
        } else if (type0 == 'bug') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/5/51/Bug_icon_HOME3.png'
            typeImg.alt = 'bug'
            divType.appendChild(typeImg)
        } else if (type0 == 'ghost') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/2/23/Ghost_icon_HOME3.png'
            typeImg.alt = 'ghost'
            divType.appendChild(typeImg)
        } else if (type0 == 'steel') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/7/78/Steel_icon_HOME3.png'
            typeImg.alt = 'steel'
            divType.appendChild(typeImg)
        } else if (type0 == 'fire') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/f/f9/Fire_icon_HOME3.png'
            typeImg.alt = 'fire'
            divType.appendChild(typeImg)
        } else if (type0 == 'water') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/e/e7/Water_icon_HOME3.png'
            typeImg.alt = 'water'
            divType.appendChild(typeImg)
        } else if (type0 == 'grass') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/81/Grass_icon_HOME3.png'
            typeImg.alt = 'grass'
            divType.appendChild(typeImg)
        } else if (type0 == 'electric') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/cf/Electric_icon_HOME3.png'
            typeImg.alt = 'electric'
            divType.appendChild(typeImg)
        } else if (type0 == 'psychic') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/2/2d/Psychic_icon_HOME3.png'
            typeImg.alt = 'psychic'
            divType.appendChild(typeImg)
        } else if (type0 == 'ice') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/86/Ice_icon_HOME3.png'
            typeImg.alt = 'ice'
            divType.appendChild(typeImg)
        } else if (type0 == 'dragon') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c6/Dragon_icon_HOME3.png'
            typeImg.alt = 'dragon'
            divType.appendChild(typeImg)
        } else if (type0 == 'dark') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/71/Dark_icon_HOME3.png/63px-Dark_icon_HOME3.png'
            typeImg.alt = 'dark'
            divType.appendChild(typeImg)
        } else if (type0 == 'fairy') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/0/0b/Fairy_icon_HOME3.png'
            typeImg.alt = 'fairy'
            divType.appendChild(typeImg)
        }
    }
    function PokemonType0Length2(type0) {
        if (type0 == 'normal') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/8c/Normal_icon_HOME3.png'
            typeImg.alt = 'normal'
            divType.appendChild(typeImg)
        } else if (type0 == 'fighting') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c2/Fighting_icon_HOME3.png'
            typeImg.alt = 'fighting'
            divType.appendChild(typeImg)
        } else if (type0 == 'flying') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c5/Flying_icon_HOME3.png'
            typeImg.alt = 'flying'
            divType.appendChild(typeImg)
        } else if (type0 == 'flying') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c5/Flying_icon_HOME3.png'
            typeImg.alt = 'flying'
        } else if (type0 == 'poison') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/9/98/Poison_icon_HOME3.png'
            typeImg.alt = 'poison'
            divType.appendChild(typeImg)
        } else if (type0 == 'ground') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/e/ee/Ground_icon_HOME3.png'
            typeImg.alt = 'ground'
            divType.appendChild(typeImg)
        } else if (type0 == 'rock') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/5/51/Rock_icon_HOME3.png'
            typeImg.alt = 'rock'
            divType.appendChild(typeImg)
        } else if (type0 == 'bug') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/5/51/Bug_icon_HOME3.png'
            typeImg.alt = 'bug'
            divType.appendChild(typeImg)
        } else if (type0 == 'ghost') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/2/23/Ghost_icon_HOME3.png'
            typeImg.alt = 'ghost'
            divType.appendChild(typeImg)
        } else if (type0 == 'steel') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/7/78/Steel_icon_HOME3.png'
            typeImg.alt = 'steel'
            divType.appendChild(typeImg)
        } else if (type0 == 'fire') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/f/f9/Fire_icon_HOME3.png'
            typeImg.alt = 'fire'
            divType.appendChild(typeImg)
        } else if (type0 == 'water') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/e/e7/Water_icon_HOME3.png'
            typeImg.alt = 'water'
            divType.appendChild(typeImg)
        } else if (type0 == 'grass') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/81/Grass_icon_HOME3.png'
            typeImg.alt = 'grass'
            divType.appendChild(typeImg)
        } else if (type0 == 'electric') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/cf/Electric_icon_HOME3.png'
            typeImg.alt = 'electric'
            divType.appendChild(typeImg)
        } else if (type0 == 'psychic') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/2/2d/Psychic_icon_HOME3.png'
            typeImg.alt = 'psychic'
            divType.appendChild(typeImg)
        } else if (type0 == 'ice') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/86/Ice_icon_HOME3.png'
            typeImg.alt = 'ice'
            divType.appendChild(typeImg)
        } else if (type0 == 'dragon') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c6/Dragon_icon_HOME3.png'
            typeImg.alt = 'dragon'
            divType.appendChild(typeImg)
        } else if (type0 == 'dark') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/71/Dark_icon_HOME3.png/63px-Dark_icon_HOME3.png'
            typeImg.alt = 'dark'
            divType.appendChild(typeImg)
        } else if (type0 == 'fairy') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/0/0b/Fairy_icon_HOME3.png'
            typeImg.alt = 'fairy'
            divType.appendChild(typeImg)
        }
    }
    function PokemonType1Length2(type1) {
        if (type1 == 'normal') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/8c/Normal_icon_HOME3.png'
            typeImg.alt = 'normal'
            divType.appendChild(typeImg)
        } else if (type1 == 'fighting') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c2/Fighting_icon_HOME3.png'
            typeImg.alt = 'fighting'
            divType.appendChild(typeImg)
        } else if (type1 == 'flying') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c5/Flying_icon_HOME3.png'
            typeImg.alt = 'flying'
            divType.appendChild(typeImg)
        } else if (type1 == 'flying') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c5/Flying_icon_HOME3.png'
            typeImg.alt = 'flying'
        } else if (type1 == 'poison') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/9/98/Poison_icon_HOME3.png'
            typeImg.alt = 'poison'
            divType.appendChild(typeImg)
        } else if (type1 == 'ground') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/e/ee/Ground_icon_HOME3.png'
            typeImg.alt = 'ground'
            divType.appendChild(typeImg)
        } else if (type1 == 'rock') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/5/51/Rock_icon_HOME3.png'
            typeImg.alt = 'rock'
            divType.appendChild(typeImg)
        } else if (type1 == 'bug') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/5/51/Bug_icon_HOME3.png'
            typeImg.alt = 'bug'
            divType.appendChild(typeImg)
        } else if (type1 == 'ghost') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/2/23/Ghost_icon_HOME3.png'
            typeImg.alt = 'ghost'
            divType.appendChild(typeImg)
        } else if (type1 == 'steel') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/7/78/Steel_icon_HOME3.png'
            typeImg.alt = 'steel'
            divType.appendChild(typeImg)
        } else if (type1 == 'fire') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/f/f9/Fire_icon_HOME3.png'
            typeImg.alt = 'fire'
            divType.appendChild(typeImg)
        } else if (type1 == 'water') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/e/e7/Water_icon_HOME3.png'
            typeImg.alt = 'water'
            divType.appendChild(typeImg)
        } else if (type1 == 'grass') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/81/Grass_icon_HOME3.png'
            typeImg.alt = 'grass'
            divType.appendChild(typeImg)
        } else if (type1 == 'electric') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/cf/Electric_icon_HOME3.png'
            typeImg.alt = 'electric'
            divType.appendChild(typeImg)
        } else if (type1 == 'psychic') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/2/2d/Psychic_icon_HOME3.png'
            typeImg.alt = 'psychic'
            divType.appendChild(typeImg)
        } else if (type1 == 'ice') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/8/86/Ice_icon_HOME3.png'
            typeImg.alt = 'ice'
            divType.appendChild(typeImg)
        } else if (type1 == 'dragon') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/c/c6/Dragon_icon_HOME3.png'
            typeImg.alt = 'dragon'
            divType.appendChild(typeImg)
        } else if (type1 == 'dark') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/71/Dark_icon_HOME3.png/63px-Dark_icon_HOME3.png'
            typeImg.alt = 'dark'
            divType.appendChild(typeImg)
        } else if (type1 == 'fairy') {
            const typeImg = document.createElement('img')
            typeImg.setAttribute('class', 'pokemon_type')
            typeImg.src = 'https://archives.bulbagarden.net/media/upload/0/0b/Fairy_icon_HOME3.png'
            typeImg.alt = 'fairy'
            divType.appendChild(typeImg)
        }
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    divType.innerHTML = ''

    renderPokemon(input.value.toLowerCase())
});

btnPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1
        renderPokemon(searchPokemon)
        divType.innerHTML = ''
    }
});


btnNext.addEventListener('click', () => {
    if (searchPokemon < 649) {
        searchPokemon += 1
        renderPokemon(searchPokemon)
        divType.innerHTML = ''
    }
});

document.addEventListener('keydown', ({key}) =>{
    if (key == 'ArrowLeft') {
        if (searchPokemon > 1) {
            searchPokemon -= 1
            renderPokemon(searchPokemon)
            divType.innerHTML = ''
        }
    }
    if (key == 'ArrowRight') {
        if (searchPokemon < 649) {
            searchPokemon += 1
            renderPokemon(searchPokemon)
            divType.innerHTML = ''
        }
    }
})

renderPokemon(searchPokemon);