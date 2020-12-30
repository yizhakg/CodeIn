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
    addCharacter(data);
  }
}
function addCharacter(charactorArray) {
  let container = document.getElementById("container");
  container.innerHTML="";
  for (let i = 0; i < charactorArray.length; i++) {
    container.innerHTML += `
    <div class="item">
    <img class="itemImg" src="${charactorArray[i].image}" alt="">
    <div class="name">
    <h1>${charactorArray[i].name} </h1>
    </div>
  <div class="data">
  <h1>${charactorArray[i].name}</h1>
  <h3 class="species">${charactorArray[i].species}</h3>
  <h3 class="gender">${charactorArray[i].gender}</h3>
  <h4 class="location">${charactorArray[i].location.name}</h4>
  <h3 class="status">${charactorArray[i].status}</h3>
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
let url = 'https://rickandmortyapi.com/api/character'
let data;
setTimeout(()=>{
  document.getElementById("openImg").style.height="100px"
  getData();

},3000)

