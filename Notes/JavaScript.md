# JavaScript Notes

## Asynchronous JavaScript
### Callback
- A callback is a function passed as an argument to another function.
- Allows a function to call another function.
- Will run after another function has finished.

```javascript
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

function someCallbackFunction(sum) {
    console.log(sum);
}

myCalculator(5, 12, (sum) => {
    console.log(sum);
});

// OR 

myCalculator(5, 12, someCallbackFunction);

//will print 17.
```
**Note:** When passing a function as a callback argument, remember to not use a parenthesis.

```javascript
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
```

#### When to use callbacks
- Usually used in asynchronous functions where one function has to wait for
another function (like waiting for a file to load).

### Asynchronous Functions
- Functions running in parallel with other functions.
- Common example of an asynchronous function is `setTimeout()`.
```javascript
 setTimeout(myFunction, 3000);
 
 function myFunction() {
    //some code...
 }
```
In the example above, `myExample()` function will be called after 3000ms.

#### Callback Alternatives
With asynchronous programming, JS programs can start long-running tasks and continue other
tasks in parallel making them hard to debug.

Because of the trouble of debugging, most modern JS methods uses **Promise** instead.


### JavaScript Promises
- A promise is an Object that links Producing code and Consuming code.
  - **Producing Code**: Code that can take some time.
  - **Consuming Code**: core that must wait for result.

```javascript
//PRODUCING CODE
let myPromise = new Promise(function(myResolve, myReject) {
    myResolve();    //When successful
    myReject();     //When error
});

//CONSUMING CODE
myPromise.then(
    function(value) { /*code if successful*/ },
    function(error) { /* code if some error */ }
);
```
When the producing code obtains the result, it will call one of the two (2) callbacks: 
`myResolve(result value)` or `myReject(error object)`.

#### Promise Object Properties
A JavaScript Promise object can be:
- `Pending`: The result is still undefined.
- `Fulfilled`: The result is a value.
- `Rejected`: The result is an error object.

These can be defined through `myPromse.state` and `myPromise.result`.
But these are private fields. Which means, cannot be accessed.

#### Example
```javascript
function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 13;

// some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

### JavaScript Async/Await

#### The `async` Syntax
The keyword `async` makes a function return a promise.

Example:
```javascript
async function myFunction() {
  return "Hello";
}
```

is the same with

```javascript
function myFunction() {
  return Promise.resolve("Hello");
}
```

#### The `await` Syntax
The `await` keyword can only be used inside an async function.

This makes the function pause the execution and wait for a **resolved** promise before it continues. 

```javascript
async function myDisplay() {
  let myPromise = new Promise((resolve, reject) => {
    resolve("I love you!!");
  });
  
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

- The two arguments `resolve` and `reject` are pre-defined by JavaScript.

## Array Methods
### .find(callback)
Will loop through the array and returns the element according to a certain condition.
```javascript
let testArray = [0, 1, 2, 3, 4, 5];

testArray.find((element) => element === 5);
```
```javascript
jokes.find((joke) => joke.id === 5);
```


### .forEach(callback)
```javascript
let testArray = [0, 1, 2, 3, 4, 5];
let sum = 0
testArray.forEach((number) => {sum += number});
```

### .findIndex(callback)
Will return the index of a certain criteria in an array.
```javascript
const searchIndex = testArray.findIndex((element) => element.id === 123);

```

