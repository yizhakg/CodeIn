let url = 'https://api.covid19api.com/summary';
let countries;
let global;
window.onload = () => {
  getData();
}

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
  let dataOfCountries = document.getElementById("countries");
  data.forEach(dataItem => {
    dataOfCountries.innerHTML += dataItem.Country + "</br>"
    ""
  });
}

function getToDivViaId() {
  var elmnt = document.getElementById("countries");
  elmnt.scrollIntoView();
}
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let header = document.getElementById("header");
  let title = document.getElementById("title");
  let countries = document.getElementById("countries");
  if (scroll >= 100) {
    header.style.height = "50px";
    title.style.fontSize = "28px";
    countries.style.opacity = "1";
    header.lastElementChild.style.opacity = "0"
    setTimeout(() => {
      title.innerText = "Covid-19 worldwide Data";
      header.style.background = "var(--black)";
    }, 1700)
  }
});