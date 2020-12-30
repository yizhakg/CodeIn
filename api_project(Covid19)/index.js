let url = 'https://api.covid19api.com/summary';
function getApi() {
  return fetch(url).then(res => res.json())
}
async function getData() {
  try {
    global = await getApi().then(res => res.Global);
    countries = await getApi().then(res => res.Countries);
    console.log(global);
    console.log(countries);
    insertDataToWeb(countries)
  }
  catch (error) {
    console.log(error);

  }
  finally {

  }
}
function insertDataToWeb(data) {
  let dataContainer = document.getElementById("countries");
  data.forEach(dataItem => {
    dataContainer.innerHTML += dataItem.Country + "</br>"
    ""
  });
}

getData();
let countries;
let global;