// ================= 11. CHECK IF ARRAY IS SORTED =================
// function for checking sorting of array elements
// sorting order - ascending

const arr1 = [2, 100, 50, 24, 78, 69];

// array sorted in ascending order
const arr2 = [2, 24, 50, 69, 78, 100];
// array sorted in descending order
const arr3 = [100, 78, 69, 50, 24, 2];

function isSorted(arr, sortOrder = 'ascending') {
  let checkSorted;
  for (let i = 0; i < arr.length - 1; i++) {
    // arr[0] < arr[1]
    // arr[1] < arr[2]
    // arr[2] < arr[3]
    // arr[3] < arr[4]
    // arr[4] < arr[5]
    if (sortOrder === 'ascending') {
      checkSorted = arr[i] < arr[i + 1];
    } else {
      checkSorted = arr[i] > arr[i + 1];
    }
  }
  return checkSorted;
}

// USING REDUCE METHOD
function isSortedReduce(arr, sortOrder = 'ascending') {
  let checkSorted;
  arr.reduce((acc, curr) => {
    if (sortOrder === 'ascending') checkSorted = acc > curr;
    else checkSorted = acc < curr;
    return acc;
  });
  return checkSorted;
}

console.log(isSorted(arr1, 'ascending')); // false
console.log(isSorted(arr2, 'ascending')); // true

console.log(isSorted(arr3, 'ascending')); // false
console.log(isSorted(arr3, 'descending')); // true

console.log(isSorted(arr1, 'ascending')); // false
console.log(isSorted(arr2, 'ascending')); // true
console.log(isSorted(arr3, 'ascending')); // false

// =========================================================
// ========= 12. COUNT THE OCCURENCES OF CHARACTER =========

function countOccurences(str, char) {
  let charCount = 0;
  // 1. remove the empty spaces
  // 2. lowercase all characters
  console.log(str);
  return str
    .trim()
    .toLowerCase()
    .split('')
    .filter(strChar => strChar === char).length;
}

const testString =
  "JavaScript is fun & simple until you come accross it's weird intricacies";
console.log(countOccurences(testString, 'e'));

// =========================================================
// ========= 13. FIND INDEX OF A TARGET IN AN ARRAY =========

// Array.indexOf() does the same job
function findIndex(arr, target) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}

const numArray = [10, 20, 30, 40, 50, 10];

console.log(findIndex(numArray, 30)); // 2
console.log(numArray.indexOf(30)); // 2

// =========================================================
// ========= 14. FILTER EVEN NUMBERS FROM AN ARRAY =========

function filterEvens(arr) {
  // return arr.filter(num => num % 2 === 0);
  const newEvenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) newEvenArr.push(arr[i]);
  }

  return newEvenArr;
}

const numArr = [1, 3, 5, 7, 2, 8, 12, 19, 22, 27];

console.log(filterEvens(numArr)); // [2, 8, 12, 22]

// ======================================================
// ========= 15. CONVERT FAHRENHEIT TO CELSIUS =========

function fahrenheitToCelsius(fah) {
  const celsius = Math.round(((fah - 32) * 5) / 9);
  return celsius;
}

console.log(fahrenheitToCelsius(33.8));
console.log(fahrenheitToCelsius(35.6));
console.log(fahrenheitToCelsius(37.4));

// ================================================
// ========= 16. COUNT VOWELS IN A STRING =========

function countVowels(str) {
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str.trim().toLowerCase().split('')) {
    if (vowels.includes(char)) vowelCount++;
  }

  return vowelCount;
}

console.log(
  countVowels(
    'JavaScript is super powerful, only if you know how to use it well!'
  )
);

// ===================================================
// ========= 17. FIND FACTORIAL OF A NUMBER =========

// Iterative approach
function factorial(n) {
  if (n === 0) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(4));

// ===================================================
// ========= 18. FIND SECOND LARGEST NUMBER IN AN ARRAY =========

function findSecondLargest(arr) {
  // simple approach: sort the array in descending order return the second element of sortedArr
  const uniqueArr = [...new Set(arr)];
  const sortArrDesc = uniqueArr.sort((a, b) => b - a);

  return sortArrDesc[1] ?? null;
}

const randomArr = [90, 78, 56, 99, 24];
console.log(findSecondLargest(randomArr));

// WITH TWO POINTER TRACKING APPROACH
function findSecondLargest2(arr) {
  const largest = -Infinity;
  const secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// ===================================================
// ========= 19. COUNT WORDS IN A SENTENCE =========

function countWords(str) {
  // /\s+/ -> split on one or more spaces
  return str.trim().split(/\s+/).length;
}

console.log(countWords('Hello, this is Aakash'));

// =======================================
// ========= 20. MERGE TWO ARRAYS =========

function mergeArrays(arr1, arr2) {
  // return [...arr1, ...arr2];
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
