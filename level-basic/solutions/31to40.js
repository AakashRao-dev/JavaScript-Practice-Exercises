// ========= 31. CHECK FOR BALANCED PARANTHESIS =========

function isBalanced(str) {
  const leftPar = '(';
  const rightPar = ')';
  const arrPar = str.split('');

  let leftParCount = 0;
  let rightParCount = 0;

  for (let i = 0; i < arrPar.length; i++) {
    if (arrPar[i] === leftPar) leftParCount++;
    if (arrPar[i] === rightPar) rightParCount++;
  }

  return leftParCount === rightParCount ? 'Balanced' : 'Not Balanced';
}

console.log(isBalanced('(()'));
console.log(isBalanced('(())'));

// ======================================================
// === 32. COUNT THE FREQUENCY OF WORDS IN A STRING ===

// TODO: Learn & Practice RegeExp
function wordFrequency(str) {
  const freq = {};
  const stringLowercase = str.toLowerCase();

  const words = stringLowercase.replace(/[^\w\s]/g, '').split(/\s+/);

  for (const word of words) {
    if (word) {
      freq[word] = freq[word] ? freq[word] + 1 : 1;
    }
  }

  return freq;
}

console.log(wordFrequency('hello world, hello'));

// =========================================================
// ========= 33. FIND ALL PERMUTATIONS OF A STRING =========

// TODO: Come back after learning Recursion & Backtracking
function stringPermutations(str) {
  const arrString = str.toLowerCase().split('');
}

// ======================================================
// ============ 34. MOVE ZEROS TO THE END ===============

function moveZeros(arr) {
  const nonZeros = arr.filter(num => num !== 0);
  const zerosCount = arr.length - nonZeros.length;
  const zeros = Array(zerosCount).fill(0);

  return [...nonZeros, ...zeros];
}

console.log(moveZeros([0, 1, 0, 3, 12]));

// ===================================================
// ====== 35. FIND THE DIFFERENCE OF 2 ARRAYS ======

function arrayDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return [...set1.difference(set2)];
}

console.log(arrayDifference([1, 3, 5, 7, 9], [1, 4, 9]));

// ======================================================
// ====== 36. CONVERT A NUMBER TO ROMAN NUMERICALS ======

function toRoman(num) {
  const romanMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';

  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      result += romanMap[i].numeral;
      num -= romanMap[i].value;
    }
  }

  return result;
}

console.log(toRoman(33));
console.log(toRoman(50));
console.log(toRoman(2055));

// ======================================================
// ================== 37. CAESAR CIPHER ==================

function caserCipher(str, shift) {
  // 1. loop through each char
  // 2. Check if it’s a letter (A–Z or a–z).
  // 3. Convert it to its ASCII code (charCodeAt()).
  // 4. Apply the shift:
  // For uppercase: shift within range 65–90 ('A' to 'Z')
  // For lowercase: shift within range 97–122 ('a' to 'z')
  // 5. Convert back to character (String.fromCharCode()).
}

caserCipher();

// ======================================================
// ====== 38. FIND ALL SUBARRAYS WITH A GIVEN SUM ======

function findSubarrrayWithSUm(arr, targetSum) {}
