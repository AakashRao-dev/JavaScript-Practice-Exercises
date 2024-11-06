'use strict';

// ============= 1. BASIC PROMISE CREATION =============
/*
const checkAge = age => {
  return new Promise((resolve, reject) => {
    age >= 18
      ? resolve('Eligible to Vote 🎉')
      : reject('Not Eligible to Vote. 😢');
  });
};

// USING THEN HANDLER
checkAge(21)
  .then(res => console.log(res))
  .catch(err => console.error(err));

// USING ASYNC/AWAIT
(async () => {
  try {
    const res = await checkAge(21);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
*/

// ================================================
// ============= 2. CHAINING PROMISES =============

/*
const userInfo = userId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ userId: 1, name: 'Alan Kuzmo' });
    }, 1000);
  });
};

const userPreferences = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ theme: 'dark', notification: true });
    }, 1000);
  });
};

function fetchData() {
  userInfo()
    .then(userInfo => {
      console.log(userInfo);
      return userPreferences(userInfo.userId);
    })
    .then(userPreferences => {
      console.log('Final Data:', userPreferences);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
fetchData();
*/

// ==================================================================
// ============== 3. SIMULATE COUNTDOWN USING PROMISES ==============

/*
// Creates a delay
function delay(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

async function countDown(sec) {
  while (sec > 0) {
    console.log(sec);
    await delay(1);
    sec--;
  }
  console.log("Time's up!");
}
countDown(22);
*/

// ==================================================================
// ============== 4. BASIC AJAX REQUEST WITH FETCH API ==============

/*
const getUserData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  data.forEach(user => console.log(user.name));
};

getUserData();
*/

// =================================================
// ============== 5. REVERSE A STRING ==============

/*
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');
reverseString('Aakash Rao');
*/

// ===========================================================
// ============== 6. LARGEST NUMBER IN AN ARRAY ==============

/*
function findLargest(arr) {
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
}

console.log(findLargest([5, 12, 71, 16, 20])); // 71
console.log(findLargest([991, 42, 1002, 48])); // 1002
*/

// ==================================================================
// ============== 7. CHECK IF A STRING IS A PALINDROME ==============

/*
function isPalindrome(str) {
  const splitString = str.toLowerCase().split('');
  const reversedString = str.toLowerCase().split('').reverse();

  for (let i = 0; i < str.length; i++) {
    if (splitString[i] !== reversedString[i]) {
      return 'Not a Palindrome String 😢';
    }
  }

  return "Hell yeah! It's a Palindrome String 🎉";
}

console.log(isPalindrome('Level'));
*/

// =========================================================
// ============== 8. CAPLITALIZE FIRST LETTER ==============

/*
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(str => str[0].toUpperCase() + str.slice(1))
    .join(' ');
}

console.log(capitalizeWords('hello world')); // 'Hello World'
*/

// =============================================================
// ============== 9. REMOVE DUPLICATES FROM ARRAY ==============

/*
function removeDuplicates(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

removeDuplicates([5, 5, 4, 7, 10]); // [5, 4, 7, 10]
*/

// =============================================================
// ================= 10. SUM OF ARRAY ELEMENTS =================

/*
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

sumArray([1, 2, 3, 4, 5]); // 15
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
*/
