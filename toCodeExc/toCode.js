"use strict";

// function bgChange(bg) {  //background change
//   document.body.style.background = bg;
// }

// function bigImg(x) { //change image size
//   x.style.height = "400px";
//   x.style.width = "auto";
// }

// function normalImg(x) {
//   x.style.height = "200px";
//   x.style.width = "auto";
// }


// 34.JavaScript תרגול תחביר שפת  
// 1. מי הכי גדול

// const min=Number(prompt("enter the min number"));
// const max=Number(prompt("enter the max number"));
// if(max>min){
//   console.log(`the random number is ${randomBetween(min,max)}`);
// }
// else if(max==min){
//   console.log(`the numbers are equals and the result will always be ${max}`)
// }
// else if( max<min){
//   console.log("the min number is bigger the the max number")
// }

// function randomBetween(min, max) {
//   return( Math.floor(Math.random() * (max - min) ) +min)
// }

// 2. חישוב סכום ספרות

// let num = Number(prompt("enter the number"));
// console.log(`the digits sum is ${digitsSum(num)}`);
// function digitsSum(num){
//   let sum=0;
//   while(num>0){
//   sum+=num%10;
//   num=~~(num/10);
// }
//   return sum;
// }

// 3. משחק ניחוש מספרים


// function bingo() {
//   let bingo= (Math.floor(Math.random() * 100) + 1); 
// // let num= Number(prompt("choose a number between 1-100"))
// let num =document.getElementById("number").value;
// while(num<1 || num>100){
//   num= Number(prompt("the number is not the range choose again"))
// }
// if(num<bingo){document.getElementById("bingo").innerHTML ="Too small"}
// else if(num>bingo){document.getElementById("bingo").innerHTML ="Too big"}
// else if(num==bingo){document.getElementById("bingo").innerHTML ="Bingo"}
// {document.getElementById("bingo1").innerHTML =`your number is ${num}`
// }
// {document.getElementById("bingo2").innerHTML =`the bingo number is ${bingo}`
// }
// }
// 4. מימוש ROT13
// a=97
// z=122
// let str = prompt("enter a word please");
// rot13(str);
// function rot13(str) {
//   let strnew = "";
//   for (let i = 0; i < str.length; i++) {

//     if (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122) {
//       if (str.charCodeAt(i) > 109) {
//         strnew = strnew.concat(String.fromCharCode(str.charCodeAt(i) - 26 + 13))
//       }
//       else {
//         strnew = strnew.concat(String.fromCharCode(str.charCodeAt(i) + 13))
//       }
//     }
//     else if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
//       if (str.charCodeAt(i) > 109) {
//         strnew = strnew.concat(String.fromCharCode(str.charCodeAt(i) - 26 + 13))
//       }
//       else {
//         strnew = strnew.concat(String.fromCharCode(str.charCodeAt(i) + 13))
//       }


//     }
//     else {
//       strnew = strnew.concat(str[i])
//     }
//   }
//   console.log(`the word you enterd is: "${str}"`);
//   console.log(`your word in rot13 code is: "${strnew}"`);
// }

// 5. זיכוי סיסמאות קשור

// isStrongPassword();

// function isStrongPassword() { //פונקציה לבדיקת חוזק הסיסמא
//   let str = prompt("enter a password");
//   let long = str.length;
//   if(long>7 && charcheck(65,90,str)>0 && charcheck(97,122,str)>0 && charcheck(48,57,str)>0 && (charcheck(32,47,str)>0 || charcheck(58,64,str)>0  || charcheck(91,96,str)>0 || charcheck(123,126,str)>0)){

//      alert(`the password is strong  ${String.fromCharCode(9786)}`);
//   }
//   else{
//     alert(`the password isnt strong enough try again ${String.fromCharCode(9785)}`);
//     isStrongPassword();
//   }
// }
// function charcheck(min,max,str) {//פונקציה לבדיקת טווח בטבלת אסקי
//   let count =0;
//   for (let i = 0; i < str.length; i++) {
//     if(min <= str.charCodeAt(i) && str.charCodeAt(i) <= max){
//       count++
//     }
//   }
//   return count;
// }

// 37.תרגול מערכים ואוביקטים ב JavaScript
// 1. גלריית תמונות

// function getLeftValueForImage(images, widths, index){
//   let sum=0;
//   for(let i=0;i<index;i++){
//     sum+=widths[i];
//   }
//   return -1*sum
// }

// let images = ['1.jpg', '2.jpg', '3.jpg'];
// let widths = [200, 200, 200];

// document.write("the left value of index- "+1+" widths["+widths+"] is: "+getLeftValueForImage(images, widths, 1));

// widths = [200, 300, 200];

// document.write("/// the left value of index- "+2+" widths["+widths+"] is: "+getLeftValueForImage(images, widths, 2));

// widths = [200, 300, 200];

// document.write("/// the left value of index- "+0+" widths["+widths+"] is: "+getLeftValueForImage(images, widths, 0));


// 2. מירוץ מכוניות

// function getFastestCar(cars){
//   let max=-Infinity;
//   let index=0;
//   for(let i=0;i<cars.length;i++){
//     if(cars[i].speed>max){
//       max=cars[i].speed;
//       index=i;
//     }
//   }

//   return cars[index]
// }
// const cars = [ { name: 'c1', color: 'red', speed: 40 }, { name: 'c2', color: 'blue', speed: 20 }];

// const fastestCar = getFastestCar(cars);
// document.writeln("the fastest car is: "+fastestCar.name) // should print c1

// 3. חיפוש מנצח במשחק איקס עיגול

// function gameXO(game) {

//   for (let i = 0; i < 3; i++) {
//     if (game[i][0] == game[i][1] && game[i][1] == game[i][2] && game[i][0] != " ") {
//       return "winner";
//     }
//   }
//   for (let i = 0; i < 3; i++) {
//     if (game[0][i] == game[1][i] && game[1][i] == game[2][i] && game[0][i] != " ") {
//       return "winner";
//     }
//   }
//   if (game[0][0] == game[1][1] && game[1][1] == game[2][2] && game[0][0] != " ") {
//     return "winner"
//   }
//   else if (game[0][2] == game[1][1] && game[1][1] == game[2][0] && game[0][1] != " "){
//     return "winner"
//   }
//   return "no winner"
// }

// const game = [
//   ['x','x','o'],
//   ['x','o','x'],
//   ['o',' ','x'],
// ];
// //0   1   2
// ['x','x','o'],//0
// ['x','o','x'],//1
// ['o',' ','x'],//2
// document.writeln(gameXO(game))

// document.write(gameXO(game))

// 4. משחק הזיכרון

// function play(cards,index){
//   let count=0;
// for(let i=0;i<cards.length;i++){
//   if(cards[i].visible==true){
//     if(cards[i].value==cards[index].value){
//       cards[i].found=true;
//       cards[index].found=true;
//       cards[i].visible=false;
//       cards[index].visible=false;

//       console.log(cards)
//       return;
//     }
//     else{
//       cards[i].visible=false;
//       cards[index].visible=false;
//     }
//   }
//   else{
//     count ++
//   }
// }
// if(count==cards.length){
//   cards[index].visible=true;
// }
// else{
//   cards[index].visible=false;
// }
// console.log(cards)
// }

// let cards = [
//   { value: 'A', visible: false, found: false },
//   { value: 'A', visible: false, found: false },
//   { value: 'B', visible: false, found: false },
//   { value: 'B', visible: false, found: false },
//   { value: 'C', visible: false, found: false },
//   { value: 'C', visible: false, found: false },
// ];

// 40.תרגול: עבודה עם DOM
// 1. יצירת לוח הכפל

// function kefelBoard(){
// let frage=document.createDocumentFragment();
// for(let i=1;i<=10;i++){
//   let temp=document.createElement(`tr`)
//   for(let j=1;j<=10;j++){
//     temp.innerHTML+=`<td>${i*j}</td>`

//   }
//   frage.appendChild(temp);
// }
// return frage
// }
// function color3yellow(){
//   let td=document.getElementsByTagName("td")
//   for(let i=0;i<td.length;i++){
//     if(td[i].innerText%3==0){
//       td[i].style.backgroundColor="yellow"

//     }
//   }
// }
// let table=document.getElementById("table");
// table.appendChild(kefelBoard());
