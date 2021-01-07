let action = true;
let scoreValue = 0;

window.addEventListener("keydown", (event) => {
  action = true;
  const eventPress = event.key;
  let marioId = document.getElementById("mario");
  console.log(eventPress);
  if (action && eventPress == 'ArrowUp') {
    marioId.style.top = "55%";
    marioId.style.transform = "translate(-5%,-55%)"
    console.log(marioId.offsetTop);
  }
})
window.addEventListener("keyup", (event) => {
  let marioId = document.getElementById("mario")
  action = false;
  setTimeout(() => {
    marioId.style.top = "84%";
    marioId.style.transform = "translate(-5%,-84%)"
  }, 200)
})
function hitObstacle() {
  let mario = document.getElementById("mario");
  let gomba = document.getElementById("gomba");
  let flowerTrap = document.getElementById("flowerTrap");
  if (gomba.x <= 85 && gomba.x >= 11 && mario.y <= 776 && mario.y >= 693) {
    alert("Try again");
    location.reload();
  }
  if (flowerTrap.x <= 750 && flowerTrap.x >= 670 && mario.y <= 776 && mario.y >= 693) {
    alert("Try again");
    location.reload();
  }

}
setInterval(() => {
  hitObstacle();
  let coinScore = document.getElementById("coinScore");
  coinScore.innerHTML = scoreValue;
  scoreValue++;
}, 1);