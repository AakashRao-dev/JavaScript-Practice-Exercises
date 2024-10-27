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
