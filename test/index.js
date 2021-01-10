let i = 1;
let userSiteTimeInterval;
let userSiteTimeSeconds = 0;
let addSomeThingToLIstAlert;
window.onload = () => {
  let button = document.querySelector("#add")
  button.addEventListener("click", addInputToList);
  button = document.querySelector("#delete")
  button.addEventListener("click", deleteLastListItem);
  userSiteTime = setInterval(() => {
    document.getElementById('siteTime').innerHTML = `You Are In The Site For ${++userSiteTimeSeconds} sec`;
  }, 1000)
  addSomeThingToLIstAlert = setTimeout(() => {
    document.getElementById("alertToAdd").innerHTML = "Don't Forget To Add To The List"
  }, 11000)
  button = document.querySelector("#stopTheWatch");
  button.addEventListener("click", () => {
    clearInterval(userSiteTime);
  });
}
function addInputToList() {
  let inputValue = document.querySelector("input").value;
  if (inputValue == "") {
    return;
  } else {
    let shoppingList = document.querySelector("ul");
    shoppingList.innerHTML += `<li id=list${i}  onmouseover=changeColor(this)>${inputValue}</li>`;
    i++;
  }
  clearTimeout(addSomeThingToLIstAlert);
}
function deleteLastListItem() {
  let shoppingList = document.querySelector("ul");
  if (shoppingList.childElementCount == 0) {
    return
  } else {
    shoppingList.removeChild(shoppingList.lastElementChild);
    i--;
  }
}
function changeColor(someId) {
  someId.style.color = 'red';
}