

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Doe";

/**
 * Function to add two numbers
 * @param {number} a 
 * @param {number} b 
 */
function sum(a, b){
    return a + b;
}

/**
 * A person object with name, age and sayName method.
 * @typedef {Object} Person 
 * @property {string} name The person's name.
 * @property {number} age The person's age.
 * @property {Function} sayName A function that alerts the person's name.
 */
const person = {
    name: 'Joe',
    age: 32,
    sayName() {
      alert(this.name)
    }
  }

  /** 
 * Class to create a person object. 
 */
class Person {
    constructor(props) {
      /** 
       * @property {string} name The person's name.
       */
      this.name = props.name
      /** 
       * @property {number} age The person's name.
       */
      this.age = props.age
      /** 
       * @property {Function} sayName A method to annouce the person's name.
       * @returns void
       */
      this.sayName = () => alert(this.name)
    }
  }
  
  const guy = new Person({
    name: Sam,
    age: 32
  })
  guy.sayName()