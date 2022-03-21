//-----------------------------------------------------------------
//1. Write a function `sum` that computes the sum of the numbers in an array.

// sum([1, 3, 6]);
function sum(ar) {
  return ar.reduce(function (a, b) {
    return a + b;
  }, 0);
}

//--------------------------------------------------------------
// 2. Write a function `max` that accepts an array of numbers and returns the
//   *largest* number in the array.

// max([1, 5, 10, 15]);
function max(ar) {
  return ar.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
}

//--------------------------------------------------------------
// 3. Try the following at a console:

//   ```js
//   "the quick brown fox jumped over the lazy dog".split(" ");
//   "Hello, world!".split("")
//   "1,2,3,4,5,6".split(",")
//   ```

//   What is returned by `split` (You can read more about it
//   [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)),
//   and how does it work?

//   Use `split` to write a function `longestWord` that takes a string as an
//   argument and returns the longest word.

// longestWord('This is my string')

function longestWord(str) {
  var strSplit = str.split(" ");

  var AlongestWord = strSplit.sort(function (a, b) {
    return b.length - a.length;
  });

  return AlongestWord[0];
}

//--------------------------------------------------------------
// 4. Write a function `remove` that accepts an *array* and an *element*, and
//   returns an array with all ocurrences of *element* removed.

//   ```js
//   function remove(array, element) {
//     // your code here
//   }
//   remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
//   ```

// remove([1, 2, 3, 3, 4, 5], 3);

function remove(array, element) {
  return array.filter((x) => x != element);
}

//--------------------------------------------------------------

// 5. Write a function `evens` that accepts an array as an argument, and returns
//   an array consisting of all of the *even* numbers in that array.

// evens([1, 2, 3, 4, 5, 6, 7, 8]);

function evens(array) {
  return array.filter((x) => x % 2 == 0);
}

//--------------------------------------------------------------

// 6. Write a function `evenLengthWords` that takes an array of *strings* as an
//   argument, and returns an array of just the words that have an even length.

// evenLengthWords(['keep', 'don\'t']);

function evenLengthWords(array) {
  return array.filter((x) => x.length % 2 == 0);
}

//--------------------------------------------------------------
//ADVANCED
//--------------------------------------------------------------

// 1. Read about the `join` method on
//   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
//   and use it to implement a function that accepts a string as an argument and
//   returns that string *reversed*.

// join("sdrawkcab backwards");

// join("hello people");
function join(str) {
  return str.split(" ").reverse().join(" ");
}

//--------------------------------------------------------------

// 2. Write a function `keep` that "keeps" certain elements in an array. The
//   function will need to take *two* arguments, an array, and something else --
//   the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write `evens`, `evenLengthWords`,
//   a hypothetical `odds` function, or `oddLengthWords` *without changing the
//   `keep` function*.

// keep(['one', 'two', 'four'], evenLengthWords);

function keep(ar, calba) {
  return ar.filter(function (value) {
    return calba(ar).indexOf(value) > -1;
  });
}
