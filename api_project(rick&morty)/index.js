let url = 'https://rickandmortyapi.com/api/character'
let data;
window.onload = () => {
  enviorment();
  setTimeout(() => {
    document.getElementById("openImg").style.height = "100px";
    getData();

  }, 3000)

}
function enviorment() {
  main.innerHTML += `<img id="openImg" src="https://media3.giphy.com/media/Q6x7wJ2vlP5E1MUn4E/source.gif" alt="">`
  main.innerHTML += `<div id="header"></div>`
  main.innerHTML += `<div id="searchBox"></div>`
  main.innerHTML += `<div id="container" class="container"></div>`
  header.innerHTML += `<h1 class="title">Rick and Morty Character</h1>`
  header.innerHTML += `<img class="title_img"
src="https://lh3.googleusercontent.com/proxy/5F4EWSR_JGOOC6PqUvQ160dl-dGHBpkwQu04-Zf7ygFYh_53ukHgXTIVlJ9fWDJNvZeY7xFxvhYhEmw2FnrYWOCaJdmdAPaHMLCtR2Zlw1gedCGu4gJ0u6zbWi4LhA8"
alt="">`
  searchBox.innerHTML += `<div id="containBox"></div>`
  containBox.innerHTML += `<input type="search" name="serch" id="search" placeholder="search...">`
  containBox.innerHTML += `<button id="searchButton" onclick="searchCharacter()"> &#x1F50D </button>`
  footer.innerHTML += `<img src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" alt="">`
}


function getApi() {
  return fetch(url)
    .then(res => res.json()).then(res => res.results)
}
async function getData() {
  try {
    data = await getApi();
    addCharacter(data);
  }
  catch (error) {
    console.log(error);
  }
  finally {
  }
}
function addCharacter(charactorArray) {
  container.innerHTML = "";
  for (let i = 0; i < charactorArray.length; i++) {
    container.innerHTML += `
    <div class="item">
    <img class="itemImg" src="${charactorArray[i].image}" alt="">
    <div class="name">
    <h1>${charactorArray[i].name} </h1>
    </div>
  <div class="data">
  <h1>${charactorArray[i].name}</h1>
  <h3>${charactorArray[i].species}</h3>
  <h3>${charactorArray[i].gender}</h3>
  <h4>${charactorArray[i].location.name}</h4>
  <h3>${charactorArray[i].status}</h3>
    </div>
    </div>
    `
  }
}
function searchCharacter() {
  searchValue = document.getElementById("search").value.toLowerCase().trim();
  if (searchValue == "") {
    addCharacter(data)
    return;
  }
  let resultArray = []
  data.forEach(charactor => {
    let name = charactor.name.toLowerCase();
    if (name.indexOf(searchValue) != -1) {
      resultArray.push(charactor)
    }
  });
  addCharacter(resultArray)
}

