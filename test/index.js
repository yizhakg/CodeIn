class Person{
  name;
  age;
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
}
function moreThan18(person){
if(person.age>18){
  console.log(`${person.name} age is ${person.age} and he is over 18`);
}else{
  return "you are too young"
}
}

let person1=new Person("Yizhak",28);
let answer = (moreThan18(person1));
console.log(answer);