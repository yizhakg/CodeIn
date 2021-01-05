function forPrint(){
  console.log('For Loop (start)');
  for(let i=1;i<=50;i+=3){
    console.log(i);
  }
  console.log('For Loop (end)');
}
function whilePrint(){
  console.log('While Loop (start)');
  let i=1;
  while(i<=50){
    console.log(i);
    i+=3;
  }
  console.log('While Loop (end)');
}
function numAndWord(num,word){
  for(let i=0;i<num;i++){
    console.log(word);
  }
  return num+word
}
console.log(numAndWord(4,"hello"));