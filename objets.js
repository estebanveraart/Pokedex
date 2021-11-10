const pokemonGen1 = document.querySelector('.generation1');
const pokemonNumber = 151


const getPokemon = async id => {

	const urlAPI = "https://pokeapi.co/api/v2/pokemon/"+id;
	const baseD = await fetch(urlAPI);
	const pokemons = await baseD.json();
    
	pokedex(pokemons);

};

function pokedex(pokemons) {

    const colors = {

        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#e4a6f7',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
        ghost:"#9c79a6",
        ice:"#62b1c4",
        
    };
    const type = pokemons.types[0].type.name;

    const newDiv = document.createElement("div");
    newDiv.className = "zonePokemon";
    const newDiv1 = document.createElement("div");
    newDiv1.className = "elements";
    const newDiv2 = document.createElement("div");
    newDiv2.className = "mooves";
    const newh2 = document.createElement("h2");
    newh2.innerText = pokemons.name;
    newh2.className = "titrecouleur";
    const newImg = document.createElement("img");
    newImg.className = "imagePokemon";
    newImg.src = pokemons.sprites.other.dream_world.front_default;
    const newh3 = document.createElement("h3");
    newh3.innerText = "Mooves :";
    const ul = document.createElement("ul");
    const hr = document.createElement("hr");
    
    

    console.log(pokemonGen1);
    newDiv2.appendChild(newh3);
    newDiv2.appendChild(ul);
    newDiv1.appendChild(newImg);
    newDiv1.appendChild(newDiv2);
    newDiv.appendChild(newh2);
    newDiv.appendChild(newDiv1);
    newDiv.appendChild(hr);
    pokemonGen1.appendChild(newDiv);

    if (pokemons.moves.length >= 4) {

        for (let i = 0; i < pokemons.moves.length; i++) {

            const li = document.createElement("li");
            li.innerText = pokemons.moves[i].move.name;
            ul.appendChild(li);
            
        }

    }

    else {

        for (let i = 0; i < pokemons.moves.length; i++) {

            const li = document.createElement("li");
            li.innerText = pokemons.moves[i].move.name;
            ul.appendChild(li);

        }

    }
    
    fetch("https://pokeapi.co/api/v2/pokemon-species/"+pokemons.id)
        .then(resp => resp.json())
        .then(dataS => {

            if (dataS.evolves_from_species != "null") {
                
                let bEvolution = dataS.evolves_from_species.name;
                let newDiv3 = document.createElement('div');
                newDiv3.className = "evolution"
                let newh4 = document.createElement('h4');
                newh4.textContent = "evolution of :"
                let newP = document.createElement('p');
                newP.textContent = bEvolution;

                let newImg1 = document.createElement('img');

                let new

                newDiv3.appendChild(newh4);
                newDiv3.appendChild(newP);
                newDiv1.appendChild(newDiv3);

            }

            else if (dataS.evolves_from_species === "null") {

                let newDiv3 = document.createElement('div');
                newDiv3.className = "evolution"
                let newh4 = document.createElement('h4');
                newh4.textContent = "evolution of :"
                let newP = document.createElement('p');
                newP.textContent = "nobody"

                newDiv3.appendChild(newh4);
                newDiv3.appendChild(newP);
                newDiv1.appendChild(newDiv3);
                
            }

        })
    

}

const fetchPokemons = async () => {

	for (let i = 1; i <= pokemonNumber; i++) {

		await getPokemon(i);

	}

};

fetchPokemons();
