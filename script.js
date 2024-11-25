console.log("Hello");
function asd(text) {
  const asd = document.createElement("div");
  asd.textContent = text;
  document.body.appendChild(asd);
}
async function get() {
  url = "https://pokeapi.co/api/v2/pokemon/";
  const risponse = await fetch(url);
  console.log(risponse);
  const dataasd = await risponse.json();
  for (let index = 0; index < dataasd.results.length; index++) {
    asd(dataasd.results[index].name);
  }

  console.log(dataasd.results);
}
asd("Alma");
asd("Korte");
get();
