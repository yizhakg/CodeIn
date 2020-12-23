function promiesFunction(number) {
  let prom1 = new Promise((resolve, reject) => {
    let randomNumber = (Math.floor(Math.random() * 10) + 1);
    console.log(`the random number is = ${randomNumber}`);
    if (randomNumber == number) {
      resolve(`nice work,do it again 😱`)
    } else {
      reject("you lost try again 😩")
    }
  })
  return prom1;//value of prom1
}

async function letPlay() {
  try {
    let answer = await promiesFunction(number.value);
    console.log(answer);
  }
  catch (error) {
    console.log(error);
  }
  finally {
    index++;
    console.log(`number of tries is: ${index}`);
  }
}

window.onload = () => {
  document.body.innerHTML += `
  <label for="number">Enter Your Guess(1-10)</label>
  <input value="1" type="number" id="number" min="1" max="10" onkeydown="return false">
  <button onclick="letPlay()">enter</button>
  <div id=result></div>`
}

let index = 0;

