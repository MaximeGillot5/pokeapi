document.querySelector("input").addEventListener("input", getPokemon);
document.querySelector("#search").addEventListener("click", getPokemon);


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function lowerCaseName(string) {
    return string.toLowerCase();
}



function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".gameApparition").innerHTML =
                `
            <h1>Première apparition : ${capitalizeFirstLetter(data.game_indices["0"].version.name)}</h1>
            `
            document.querySelector(".pokemonBox").innerHTML =
                `
            <div>
            <img
                src="${data.sprites.other["official-artwork"].front_default}"
                alt="${data.name}"
                />
            </div>
            <div class="pokemonInfos"
                <h1>${capitalizeFirstLetter(data.name)}</h1>
                <p>Weight: ${data.weight}</p>
                <p>Type: ${capitalizeFirstLetter(data.types[0].type.name)}</p>

        `
        }).catch((err) => {
            console.log("pokemon not found", err);
        });
    e.preventDefault();
}
