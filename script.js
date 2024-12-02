function addDiv(text) {
  const asd = document.createElement("div");
  asd.textContent = text;
  document.body.appendChild(asd);
}
function addImg(alt, src) {
  const asd = document.createElement("img");
  asd.arc = src;
  asd.alt = alt;
  document.body.appendChild(asd);
  document.body.appendChild(document.createElement("img"));
}
async function getPokemonList(url) {
  const risponse = await fetch(url);
  const data = await risponse.json();

  console.log(data.results);
  for (let index = 0; index < data.results.length; index++) {
    addDiv(data.results[index].name);
    const poke_response = await fetch(data.results[index].url);
    const poke_data = await poke_response.json();
    console.log(poke_data.sprites.front_default);
    addImg(data.results[index].name, poke_data.sprites.front_default);
  }
}

getPokemonList("https://pokeapi.co/api/v2/pokemon/");
