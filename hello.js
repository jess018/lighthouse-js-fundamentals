

/*
This is the first function in the activity, where we declared a function named sayHello that outputs 
a string to the console. We can call sayHello() as many times as we want to, but it is not a very
useful function. We will improve it in the next code
const sayHello = function() {
  console.log("Hello, world");
}

sayHello();
*/


const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
