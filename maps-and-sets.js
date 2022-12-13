
// new Set([1,1,2,2,3,4])
// {1, 2, 3, 4}

// [...new Set("referee")].join("")
// ref

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// contains both key-value pairs
// this is because arrays are referenced in memory
// these are two different references
// if you did const myArr = [1, 2, 3] it would be different

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate



function hasDuplicate(arr) {
    return ([...new Set(arr)].length !== arr.length);
}

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(stringParam) {

    const myMap = new Map();
    newString = stringParam.toLowerCase();

    for (let char of newString) {
        if ('aeiou'.indexOf(char) !== -1 && myMap.has(char)) {
            myMap.set(char, (myMap.get(char) + 1))
        } else if ('aeiou'.indexOf(char) !== -1 && !myMap.has(char)) {
            myMap.set(char, 1)
        } else { continue }
    }
    return myMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

