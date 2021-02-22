// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

class Person{
    constructor (attributes){
    this.age = attributes.age;
    this.myName = attributes.myName;
    this.Hobby = attributes.Hobby;
    }
    speak(){
      return `Hello, my name is ${this.myName} and I am ${this.age}, I love playing ${this.Hobby}`;
    };
  }
  
  const Mohamed = new Parent({
    age: 55,
    myName: "Mohamed",
    Hobby: "Soccer"
  });
  
  class ChildExtendParent{
      constructor(GrandChildAttributes){
          super(GrandChildAttributes)

      speak(){
        return `Hello, my name is ${this.myName} and I am ${this.age}, I love playing ${this.Hobby}`;
      };
  }
    const Abdirahman = NewChild({
        age: 12,
        myName: 'Abdirahman' ,
        Hobby: 'Baseball'
    })

    Class ChildExtendParent{
        constructor(GrandChildAttributes){
            super(GrandChildAttributes)
        }
        speak(){
          return `Hello, my name is ${this.myName} and I am ${this.age}, I love playing ${this.Hobby}`;
        };
    }

  
  console.log(Mohamed.speak());
  console.log(Abdirahman.speak());
  console.log(Siham.speak());
  console.log(Muna.speak());


  





















// Extend Person class and create one class for each member of your family.