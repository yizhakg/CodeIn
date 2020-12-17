class School {
  name;
  constructor(schoolName) {
    this.schoolName = schoolName;
  }
  static map(studentObject, schoolObject) {
    return new Map([[studentObject, schoolObject]])
  }
}
class Student {
  constructor(studentName, studentClass, studentAvgGrand) {
    this.studentName = studentName;
    this.studentClass = studentClass;
    this.studentAvgGrand = studentAvgGrand;
  }
}
let student1 = new Student("Yizhak", "A", "100");
let school1 = new School("Ort");
let map1 = School.map(student1, school1);
console.log(map1)