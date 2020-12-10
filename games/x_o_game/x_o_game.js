
function gameXO(game) {

  for (let i = 0; i < 3; i++) {
    if (game[i][0] == game[i][1] && game[i][1] == game[i][2] && game[i][0] != " ") {
      document.getElementById(`${i}0`).style.backgroundColor="#0F7173";
      document.getElementById(`${i}1`).style.backgroundColor="#0F7173";
      document.getElementById(`${i}2`).style.backgroundColor="#0F7173";
      return "winner";
    }
  }
  for (let i = 0; i < 3; i++) {
    if (game[0][i] == game[1][i] && game[1][i] == game[2][i] && game[0][i] != " ") {
      document.getElementById(`0${i}`).style.backgroundColor="#0F7173";
      document.getElementById(`1${i}`).style.backgroundColor="#0F7173";
      document.getElementById(`2${i}`).style.backgroundColor="#0F7173";
      return "winner";
    }
  }
  if (game[0][0] == game[1][1] && game[1][1] == game[2][2] && game[1][1] != " ") {
    document.getElementById(`00`).style.backgroundColor="#0F7173";
    document.getElementById(`11`).style.backgroundColor="#0F7173";
    document.getElementById(`22`).style.backgroundColor="#0F7173";
    return "winner"
  }
  if(game[0][2] == game[1][1] && game[1][1] == game[2][0] && game[1][1] != " " ){
    document.getElementById(`02`).style.backgroundColor="#0F7173";
    document.getElementById(`11`).style.backgroundColor="#0F7173";
    document.getElementById(`20`).style.backgroundColor="#0F7173";
    return "winner"
  }
  return "no winner"
}

const game=[
  [" "," "," "],
  [" "," "," "],
  [" "," "," "],
]

var x="O";
function x_o(id){
  if(x=="O"){
    x="X";
  }
  else if(x=="X"){
    x="O"
  }
  game[id.substr(0,1)][id.substr(1,1)]=x
  document.getElementById(id).innerText=x;

  if(gameXO(game) =="winner" && (x=="O" || x=="X")){
  document.getElementById("whoWon").innerHTML=`${x} is the WINNER`;
  x=null;
  }

}