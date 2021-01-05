const EYEROLL= document.querySelector(".eyeRoll");
document.addEventListener("mousemove",(e)=>{
  const PAGEX = e.pageX/window.innerWidth*100;
  const PAGEY = e.pageY/window.innerHeight*100;
  console.log(`x:${PAGEX},y:${PAGEY}`);
EYEROLL.style.left=PAGEX+"%"
EYEROLL.style.top=PAGEY+"%"

})