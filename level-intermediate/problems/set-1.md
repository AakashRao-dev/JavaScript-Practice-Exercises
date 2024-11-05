# Set of 10 Problems [1-10]

## Problems

### 1. Sequential API Calls Using Promises

Fetch a user list from JSONPlaceholder. After getting the users, fetch each user's posts using another API call and log each user's name with their posts.

### 2. Error Handling in Async/Await

Create a function fetchWithRetry(url, retries) that fetches data from a URL. If the request fails, retry up to a specified number of times before logging an error.

### 3. Parallel API Requests with Async/Await

Using JSONPlaceholder, fetch data for /users, /posts, and /comments simultaneously. Log the combined data to the console.

### 4. Creating a Loader with AJAX

Using Fetch API, make a GET request to fetch data from a slow API (e.g., JSONPlaceholder /photos endpoint). Display a loader on the page while waiting for the data to arrive, and hide the loader once data is available.

### 5. Sort an Array of Objects by a Property

Write a function sortByProperty(arr, prop) that takes an array of objects and a property name and returns the array sorted by that property. For example, sorting [{name: "John", age: 25}, {name: "Jane", age: 22}] by age should return [ {name: "Jane", age: 22}, {name: "John", age: 25} ].

### 6. Calculate the Hamming Distance

Write a function hammingDistance(str1, str2) that returns the Hamming distance between two strings of equal length. The Hamming distance is the number of differing characters. For example, hammingDistance("karolin", "kathrin") returns 3.

### 7. Find Missing Number in an Array

Write a function findMissingNumber(arr) that takes an array containing numbers from 1 to n, but one number is missing. The function should find and return the missing number. For example, [1, 2, 3, 5] should return 4.

### 8. Find All Pairs with a Given Sum

Write a function findPairs(arr, sum) that returns all pairs of numbers from the array that add up to the given sum. For example, findPairs([1, 2, 3, 4, 5], 6) should return [[1, 5], [2, 4]].

### 9. Convert Nested Objects to Flattened Object

Write a function flattenObject(obj) that takes a deeply nested object and returns a flattened object. For example, {a: {b: {c: 1}}} becomes { "a.b.c": 1 }.

### 10. Group Anagrams Together

Write a function groupAnagrams(words) that groups words that are anagrams of each other. For example, ["eat", "tea", "tan", "ate", "nat", "bat"] should return [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']].
