// ========= 21. FIND THE MIN & MAX IN ARRAY =========

// 1. sort array in desceding order
// return the first & last element as min & max
function minMax(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const min = sortedArr[0];
  const max = sortedArr[sortedArr.length - 1];

  return { minimum: min, maximum: max };
}

console.log(minMax([1, 3, 48, 32, 21, 84, 23])); // { minimum: 1, maximum: 84 }

// TWO POINTER APPROACH
function minMax2(arr) {
  let left = 0;
  let right = arr.length - 1;

  let minVal = arr[0];
  let maxVal = arr[0];

  while (left <= right) {
    if (arr[left] < minVal) minVal = arr[left];
    if (arr[left] > maxVal) maxVal = arr[left];

    if (arr[right] < minVal) minVal = arr[right];
    if (arr[right] > maxVal) maxVal = arr[right];

    left++;
    right--;
  }

  return { minimum: minVal, maximum: maxVal };
}

console.log(minMax2([99, 1, 3, 48, 32, 21, 84, 23])); // { minimum: 1, maximum: 99 }

// ==========================================
// ========= 22. FIBONACCI SEQUENCE =========

function fibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let sum;

  if (n === 1) return num1;
  if (n === 2) return num2;

  if (n > 2) {
    for (let i = 3; i <= n; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
}

console.log(fibonacci(5));

// ================================================
// ====== 23. REMOVE FALSY VALUES FROM ARRAY ======

// falsy values: [false, 0, '', null, undefined, null]
function removeFalsy(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i]);
  }

  return newArr;
}

console.log(removeFalsy([0, 'hello', false, 42, '', null, 'world']));

// =============================================
// ============ 24. CHUNK AN ARRAY ============

function chunkArray(arr, size) {
  const arrayClone = arr.slice(0);
  const arrayChunked = [];

  while (arrayClone.length > 0) {
    const tempArr = arrayClone.splice(0, size);
    arrayChunked.push(tempArr);
  }

  return arrayChunked;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 3));

console.log(chunkArray([1, 2, 3, 4, 5], 1));
console.log(chunkArray([1, 2, 3, 4, 5], 4));
console.log(chunkArray([1, 2, 3, 4, 5], 7));

// =========================================================
// ====== 25. FIND THE FIRST NON REPEATING CHARACTER ======

// find the first non-repeating character
// ONLY CHECKS FOR ALPHA_NUMERIC CHARS
function firstNonRepeatingChar(str) {
  const charObj = str
    .trim()
    .toLowerCase()
    .split('')
    .filter(char => /[a-z0-9]/.test(char))
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

  for (const [key, value] of Object.entries(charObj)) {
    if (value === 1) return key;
  }

  return null;
}

console.log(firstNonRepeatingChar('aabbcdd'));
console.log(firstNonRepeatingChar('abcabcde'));
console.log(firstNonRepeatingChar('aabbcc'));
console.log(firstNonRepeatingChar('abcd'));
console.log(firstNonRepeatingChar('xxyyzz1'));

console.log(firstNonRepeatingChar('AaBbCcD'));
console.log(firstNonRepeatingChar('aA'));

// =========================================================
// =============== 26. FLATTEN A NESTED ARRAY ===============

// Simple recursive approach using spread operator
function flattenArray(nestedArr) {
  let result = [];

  for (const item of nestedArr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([[1, 2], [3, [4, 5]], [6]]));
console.log(flattenArray([0, 1, [2, [3, [4, 5]]]]));
console.log(flattenArray([1, [2, [3, [4, [5, [6]]]]]]));
console.log(flattenArray([[[[]]]]));
console.log(flattenArray([1, [], [2, [], [3, []]]]));

// ====================================================================
// =============== 27. FIND INTERSECTION OF TWO ARRAYS ===============

// Simplest approach using Set
function arrayIntersection(arr1, arr2) {
  const uniqueArr1 = new Set(arr1);
  const uniqueArr2 = new Set(arr2);

  return [...uniqueArr1.intersection(uniqueArr2)];
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 2, 4]));

// ==================================================================
// =============== 28. CONVERT STRING TO TITLE CASE  ===============

function toTitleCase(str) {
  if (typeof str !== 'string') return;

  return str
    .trim()
    .toLowerCase()
    .split(' ')
    .filter(str => str !== '')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(toTitleCase('hello, my name is aakash!'));

// ==================================================================
// =============== 29. FIND LONGEST WORD IN STRING  ===============

function longestWord(str) {
  const strArr = str.split(' ');
  let longest = '';

  for (const word of strArr) {
    longest = word.length > longest.length ? word : longest;
  }

  return longest;
}

console.log(longestWord('The quick brown fox kilogram'));

// ============================================================
// =============== 30. ROTATE ARRAY TO THE LEFT  ===============

function rotateLeft(arr, k) {
  const slicedArr1 = arr.slice(0, k);
  const slicedArr2 = arr.slice(k);

  return [...slicedArr2, ...slicedArr1];
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
