function objectOrArray(collection) {
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
}

function myEach(collection, callback) {
  //     Iterates over the collection of elements, passing each element in turn to the callback function. Returns the original, unmodified, collection.

  // Example function calls:

  // myEach([1, 2, 3], alert);
  // => alerts each number in turn and returns the original collection

  // myEach({one: 1, two: 2, three: 3}, alert);
  // => alerts each number value in turn and returns the original collection

  // my code below
  const newCollection = objectOrArray(collection);

  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }

  return collection;
}

function myMap(collection, callback) {
  // Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.

  // Example function calls:

  // myMap([1, 2, 3], function(num){ return num * 3; });
  // => [3, 6, 9]

  // myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
  // => [3, 6, 9]

  const newCollection = objectOrArray(collection);
  let newArray = [];

  for (let idx = 0; idx < newCollection.length; idx++) {
    newArray.push(callback(newCollection[idx]));
  }

  return newArray;
}

function myReduce(collection, callback, acc) {
  //     Reduce iterates through a collection of values and boils it down into a single value. acc (short for accumulator) starts at the value that's passed in as an argument, and with each successive step is updated to the return value of callback. If a start value is not passed to myReduce, the first value in the collection should be used as the start value.

  // The callback is passed three arguments: the current value of acc, the current element/value in our iteration, and a reference to the entire collection.

  // Hint: For the case when a start value for the accumulator is not passed in as an argument, think about how you'll need to adjust your function to account for the fact that the first element of the collection has already been accounted for.

  // Example function calls:

  // myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
  // => 16

  // myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
  // => 6

  let newCollection = objectOrArray(collection);
  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  for (let i = 0; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
}

function myFind(collection, predicate) {
  // Looks through each value in the collection, returning the first one that passes a truth test (predicate) or undefined if no value passes the test. The function should return as soon as it finds an acceptable element, without traversing the rest of the collection.

  // Example function calls:

  // myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  // => 2

  // myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });
  // => 4

  const newCollection = objectOrArray(collection);

  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) return newCollection[i];
  }

  return undefined;
}

function myFilter(collection, predicate) {
  // Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). If no matching values are found, it should return an empty array.

  // Example function call:

  // myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  // => [2, 4, 6]

  // myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })
  // => []

  const newCollection = objectOrArray(collection);

  const newArr = [];

  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) newArr.push(newCollection[i]);
  }

  return newArr;
}

function mySize(collection) {
  // Return the number of values in the collection.

  // Example function calls:

  // mySize({one: 1, two: 2, three: 3});
  // => 3

  // mySize([]);
  // => 0

  const newCollection = objectOrArray(collection);
  return newCollection.length;
}

function myFirst(array, n = false) {
  //     Returns the first element of an array. Passing n will return the first n elements of the array.

  // Example function calls:

  // myFirst([5, 4, 3, 2, 1]);
  // => 5

  // myFirst([5, 4, 3, 2, 1], 3);
  // => [5, 4, 3]
  return n ? array.slice(0, n) : array[0];
}

function myLast(array, n = false) {
  // Returns the last element of an array. Passing n will return the last n elements of the array.

  // Example function calls:

  // myLast([5, 4, 3, 2, 1]);
  // => 1

  // myLast([5, 4, 3, 2, 1], 3);
  // => [3, 2, 1]

  return n
    ? array.slice(array.length - n, array.length)
    : array[array.length - 1];
}

const myKeys = function (obj) {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
};

const myValues = function (obj) {
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
};
