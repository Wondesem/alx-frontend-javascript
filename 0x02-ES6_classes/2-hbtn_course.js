 export default class HolbertonCourse {
  constructor(name, lenght, students){
    if(typeof name !== 'string') {
      throw new TypeError("The type of name must be string");
    }
    else if(typeof lenght !== 'number') {
      throw new TypeError("The lenght of the array should be integer type");
    }
    else if(!Array.isArray(students)) {
      throw new TypeError("Student should be an array");
    }
    this._name = name;
    this._lenght = lenght;
    this._students = students;
    }
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }
  set name(name) {
    if(typeof name !== "string") {
      throw new TypeError("name must be string");
    }
    this._name = name;
  }
  set length() {
    if(typeof length !== "number") {
      throw new TypeError("The length should be type of integer");
    }
    this._length = length
  }
  set students() {
    if(!Array.isArray(students)) {
      throw new TypeError("The students must be an array")
    }
   this._students = students
  }
 }
