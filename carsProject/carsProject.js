class Vehicle {
  wheelsNumber;
  engineSize;
  colorOfVehicle;
  constructor(wheelsNumber, engineSize, colorOfVehicle) {
    this.wheelsNumber = wheelsNumber;
    this.engineSize = engineSize;
    this.colorOfVehicle = colorOfVehicle;
  }
  getVehicleDetails() {
    return `The Vehicle Has ${this.wheelsNumber} wheels, the engine size is ${this.engineSize}cm3 and it's color is ${this.colorOfVehicle}`
  }
  static biggestEngineSizeObject(arrayOfVehicle) {
    let max = 0;
    let maxIndex = 0;
    arrayOfVehicle.forEach((iterator, index) => {
      if (iterator.engineSize > max) {
        max = iterator.engineSize;
        maxIndex = index;
      }
    });
    return arrayOfVehicle[maxIndex]
  }
}

class Car extends Vehicle {
  name;
  constructor(wheelsNumber, engineSize, colorOfVehicle, name) {
    super(wheelsNumber, engineSize, colorOfVehicle)
    this.name = name;
  }
  getVehicleSpecs() {
    return `The Vehicle Model is ${this.name}, ${super.getVehicleDetails()}`
  }
  get getBrandUpperCase() {
    return this.bradToUpperCaseCreator()

  }
  bradToUpperCaseCreator() {
    return this.name.toLocaleUpperCase();
  }
}
class Bike extends Car {
  name;
  constructor(wheelsNumber, engineSize, colorOfCar, name) {
    super(wheelsNumber, engineSize, colorOfCar)
    this.name = name;
  }
  getVehicleSpecs() {
    return `The Car Model is ${this.name}, ${super.getVehicleDetails()}`
  }
}
class AirPlane extends Car {
  name;
  constructor(wheelsNumber, engineSize, colorOfCar, name) {
    super(wheelsNumber, engineSize, colorOfCar)
    this.name = name;
  }
  carSgetVehicleSpecspecs() {
    return `The Car Model is ${this.name}, ${super.carDetails()}`
  }
}
function objectCreator() {
  switch (carTypeId.value) {
    case 'Car':
      return new Car(wheelsNumberId.value.toLowerCase(), engineSizeId.value.toLowerCase(), colorOfVehicleId.value.toLowerCase(), carNameId.value.toLowerCase());
    case 'Bike':
      return new Bike(wheelsNumberId.value.toLowerCase(), engineSizeId.value.toLowerCase(), colorOfVehicleId.value.toLowerCase(), carNameId.value.toLowerCase());
    case 'AirPlane':
      return new AirPlane(wheelsNumberId.value.toLowerCase(), engineSizeId.value.toLowerCase(), colorOfVehicleId.value.toLowerCase(), carNameId.value.toLowerCase());
    default:
      new Vehicle();
      return;
  }
}
function addVehicleToTable() {
  let tempVehicleObject = objectCreator();
  arrayVehicle.push(tempVehicleObject);

  userTable.innerHTML += `<tr><td>${carTypeId.value}</td></tr>`
  for (const key in tempVehicleObject) {
    userTable.lastElementChild.innerHTML += `<td>${tempVehicleObject[key]}</td>`
  }
}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("userTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
let arrayVehicle = [];