// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

function Person(attributes) {
    this.age = attributes.age;
    this.myName = attributes.myName;
    this.Hobby = attributes.Hobby;
    this.speak = function () {
      return `Hello, my name is ${this.myName} and I am ${this.age}, I love playing ${this.Hobby}`;
    };
  }
  
  const Mohamed = new Person({
    age: 55,
    myName: "Mohamed",
    Hobby: "Soccer"
  });
  
  function child(childAttributes) {
    Person.call(this, childAttributes);
    console.log(childAttributes);
  }
  
  child.prototype = Object.create(Person.prototype);
  
  const Abdirahman = new child({
    age: 12,
    myName: "Abdirahman",
    Hobby: "Baseball"
  });
  
  const Siham = new child({
    age: 18,
    myName: 'Siham',
    Hobby: 'Batman'
  });
  
  const Muna = new child({
    age: 17,
    myName: 'Muna',
    Hobby: 'Quiter'
  });
  
  console.log(Mohamed.speak());
  console.log(Abdirahman.speak());
  console.log(Siham.speak());
  console.log(Muna.speak());























// Extend Person class and create one class for each member of your family.