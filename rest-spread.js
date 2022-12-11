
/* Original */

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

/* Write an ES2015 Version */  
function filterOutOdds(...args) {
    return args.filter((num) => num % 2 === 0);
  }

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

function findMin(...arr) {
    return Math.min(...arr);
}

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2 }; 
}

mergeObjects({a:1, b:2}, {c:3, d:4}); // {a:1, b:2, c:3, d:4}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...restOfArgs) {
    return arr.concat(restOfArgs.map((item) => item * 2));
};

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]


// SLICE AND DICE!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! make sure that you are always returning a new array or object and not modifying the existing inputs.

// remove a random element in the items array
// and return a new array without that item. 

function removeRandom(items) {
    removeIndex = Math.floor(Math.random() * (items.length))
    newArr = [...items];
    newArr.splice(removeIndex, 1);
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

const arr1 = ["first", "second", "third"]
const arr2 = ["fourth", "fifth", "sixth"]

function extend(array1, array2) {
    return [...arr1, ...arr2]; 
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val}
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
        
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}