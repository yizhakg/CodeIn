function sumAvgTheNumber() {
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    sum += +(prompt(`enter number ${i}`));
  }
  let avg = sum/5;
  document.body.innerHTML+=`The Sum Is ${sum}<br>`;
  document.body.innerHTML+=`The Avg Is ${avg}<br>`;
}