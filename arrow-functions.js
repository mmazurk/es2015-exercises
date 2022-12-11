

/* Original Version */

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

/* Write an ES2015 Version */

function double(arr) {
    return arr.map((val) => val * 2);
}

/* Original Version */

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

/* Write an ES2015 Version */

function squareAndFindEvens(numbers){
    const squares = numbers.map((num) => num ** 2);
    const evens = squares.filter((square) => square % 2 === 0);
    return evens;
  }