/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: it's global scoop the value and located in the window console object
* 2. Implicit Binding: whenevr preceding dot calls a funtion, then the object before the dot, and function is invoked.
* 3. New Binding: when a function is use new keyword to construct a new object, and also when a function is invoked as a constructor function using new keyword 'this' point to the new object that was created.
* 4. explicit Binding: explict binding has 3 different faces, such as call,apply and Bind.
                       - call will immediately invoke the function and pass through the argument one by one
                       - apply will immediatly invoke function and pass array as an argument
                       - Bind- it will pass in the argument 1 by 1 but it does not invoke the function immediatly instead it return a new function that you can able to invoke later in time.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function saySport(sport) {
    console.log(this);
    return sport
}
saySport("soccer")

// Principle 2

// code example for Implicit Binding
const teacher = {
    name: 'Micheal',
    city: "Ohio",
    sayHello: function() {
        console.log(`Hello my name is ${this.name}`)
    }

}

teacher.sayHello()



// Principle 3

// code example for New Binding
function Coach(mySport, city) {
    this.mySport = mySport;
    this.city = city;
}
const CoachOne = New Coach('Alex', 'Seattle')
console.log(CoachOne.mySport)

// Principle 4

// code example for Explicit Binding
// .call function
function Emlpoyee() {
    console.log(this.Emlpoyee)
    
}
const EmoloyeeOne = {
    myName: 'Tarafa'
}
Emlpoyee.call(EmoloyeeOne)

// .bind function

const FirstEmoloyee = Emoloyee.bind(EmoloyeeOne)
//  FirstEmloyee is the new Variable bind into the function.