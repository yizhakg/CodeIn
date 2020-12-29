

function getApi() {
  return fetch(url)
    .then(res => res.json()).then(res => res.results)

}
async function getData() {
  try {
    data = await getApi();
  }
  catch (rej) {

  }
  finally {
    addCharacter();
  }
}
function addCharacter() {
  let container = document.getElementById("container");
  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
    <div class="item">
    <img class="itemImg" src="${data[i].image}" alt="">
    <div class="name">
    <h1>${data[i].name} </h1>
    </div>
  <div class="data">
  <h1>${data[i].name}</h1>
  <h3 class="species">${data[i].species}</h3>
  <h3 class="gender">${data[i].gender}</h3>
  <h4 class="location">${data[i].location.name}</h4>
  <h3 class="status">${data[i].status}</h3>
    </div>
    </div>
    `
  }
}
let url = 'https://rickandmortyapi.com/api/character'
let data;
getData();

