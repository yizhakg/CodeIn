export class Vehicle {
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