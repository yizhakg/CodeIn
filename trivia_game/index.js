const TRIVIA = new Map();
TRIVIA.set("Jobs", ["Doctor", "Pilot",
  "Texi Driver", "Painter", "Farmer"]);
TRIVIA.set("Food", ["Pizza", "Pasta", "Burger", "Ice Cream", "Donats"])
TRIVIA.set("Vehicle", ["Bike", "Truck", "Car", "Bike", "Boat"]);
TRIVIA.set("Continent", ["Asia", "Africa", "Australia", "America", "Europe"])
TRIVIA.set("Super Heros", ["SpiderMan", "IronMan", "Black Panther", "Hulk", "AntMan"])

const TRIVIAQUE = new Map();
TRIVIAQUE.set("Jobs", ["who work in Hospital?", "Who Fly All The Time?","Who Takes You Where Every You Want?", "Who Is An Artist?", "Who Got Cows And Sheeps?"]);
TRIVIAQUE.set("Food", ["It's Round With Souce And Cheeze? ", "Long And Got Souce On It?", "A Ban With Meat Between?", "Live In The Frezzer?", "Round With Holes?"])
TRIVIAQUE.set("Vehicle", ["Fly In the Sky?", "Strong And Got Four Wheels?", "Every Day Vehicle?", "No Motor And Two Wheels?", "Can Ride In The Sea?"]);
TRIVIAQUE.set("Continent", ["The Home Of China?", "The Black Continents?", "The Home Of The kangaroo?", "The Home Of USA?", "The Home Of France?"])
TRIVIAQUE.set("Super Heros", ["The Hero Of Spider?", "Get A Tech Suit?", "THe Defender Of Wakanda?", "He Is Green When He's Angry?", "Got The Power Of An Ant?"])
let trivaGameChildrens = document.getElementById("triviaGame").children;
let i;
for(i=0;i<5;i++){
  triviaGame.innerHTML+=`<div class="triviaCards"></div>`
}
i=0;
TRIVIA.forEach((item, key) => {
  let temp = trivaGameChildrens[i]
  temp.innerHTML = `${key}<br>`;
  temp.addEventListener("mouseover", () => {
 
   insertCategoriesItem(temp,item)
  });
  temp.addEventListener("mouseout", () => {
    temp.innerHTML = `${key}<br>`; 
       document.getElementById("question").innerHTML="";
  });
temp.addEventListener("click",()=>popAQue(`${key}`));
i++;
}
)

function insertCategoriesItem(id,values){
  for (const value of values) {
    id.innerHTML+=`<br>*${value}`
  }
}
function popAQue(key){
  question.innerHTML=TRIVIAQUE.get(key)[Math.floor(Math.random()*5)]
}