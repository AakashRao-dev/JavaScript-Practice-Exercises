## Intermediate Problems

### 1. Sequential API Calls Using Promises

- Task: Fetch a user list from JSONPlaceholder. After getting the users, fetch each user's posts using another API call and log each user's name with their posts.
- Objective: Practice Making multiple API calls sequentially and chaining promises.

### 2. Error Handling in Async/Await

- Task: Create a function fetchWithRetry(url, retries) that fetches data from a URL. If the request fails, retry up to a specified number of times before logging an error.
- Objective: Practice Implementing error handling and retries in async/await.

### 3. Parallel API Requests with Async/Await

- Task: Using JSONPlaceholder, fetch data for /users, /posts, and /comments simultaneously. Log the combined data to the console.
- Objective: Practice Running multiple requests in parallel using Promise.all.

### 4. Creating a Loader with AJAX

- Task: Using Fetch API, make a GET request to fetch data from a slow API (e.g., JSONPlaceholder /photos endpoint). Display a loader on the page while waiting for the data to arrive, and hide the loader once data is available.
- Objective: Practice Handling loading states and UI updates with AJAX.

### 5. Sort an Array of Objects by a Property

- Task: Write a function sortByProperty(arr, prop) that takes an array of objects and a property name and returns the array sorted by that property. For example, sorting [{name: "John", age: 25}, {name: "Jane", age: 22}] by age should return [ {name: "Jane", age: 22}, {name: "John", age: 25} ].
- Objective: Practice sorting arrays of objects and handling dynamic properties.

### 6. Calculate the Hamming Distance

- Task: Write a function hammingDistance(str1, str2) that returns the Hamming distance between two strings of equal length. The Hamming distance is the number of differing characters. For example, hammingDistance("karolin", "kathrin") returns 3.
- Objective: String comparison and handling equal length constraints.

### 7. Find Missing Number in an Array

- Task: Write a function findMissingNumber(arr) that takes an array containing numbers from 1 to n, but one number is missing. The function should find and return the missing number. For example, [1, 2, 3, 5] should return 4.
- Objective: Learn to manipulate arrays and use arithmetic properties to solve the problem efficiently.

### 8. Find All Pairs with a Given Sum

- Task: Write a function findPairs(arr, sum) that returns all pairs of numbers from the array that add up to the given sum. For example, findPairs([1, 2, 3, 4, 5], 6) should return [[1, 5], [2, 4]].
- Objective: Practice finding pairs and using nested loops or hash maps to optimize performance.

### 9. Convert Nested Objects to Flattened Object

- Task: Write a function flattenObject(obj) that takes a deeply nested object and returns a flattened object. For example, {a: {b: {c: 1}}} becomes { "a.b.c": 1 }.
- Objective: Work with recursion and object key manipulation.

### 10. Group Anagrams Together

- Task: Write a function groupAnagrams(words) that groups words that are anagrams of each other. For example, ["eat", "tea", "tan", "ate", "nat", "bat"] should return [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']].
- Objective: Practice working with strings, sorting, and grouping.

### 11. Sum of All Subsets

- Task: Write a function sumOfSubsets(arr) that calculates the sum of all subsets of a given array. For example, for [1, 2], the subsets are [], [1], [2], [1, 2], so the total sum is 6.
- Objective: Use recursion or bit manipulation to generate subsets.

### 12. Implement Array Difference without filter()

- Task: Write a function arrayDiff(arr1, arr2) that returns an array of elements in arr1 that are not in arr2. Do this without using the filter() method.
- Objective: Reinforce understanding of loops, conditionals, and manual filtering.

### 13. Implement Array.prototype.map

- Task: Write your own implementation of the map() function that works similarly to Array.prototype.map(). It should take a callback function and return a new array with each element transformed according to the callback.
- Objective: Deepen understanding of higher-order functions and how array methods work internally.

### 14. Implement Array.prototype.reduce

- Task: Write your own version of the reduce() function. It should take a callback and an initial value and accumulate the array’s values based on the callback logic.
- Objective: Understand how the reduce() function works internally and implement it manually.

### 15. Frequency Counter

- Task: Write a function frequencyCounter(arr) that takes an array and returns an object representing the frequency of each element in the array.
- Objective: Practice working with objects and arrays, and think about time complexity optimization.

### 16. FizzBuzz

- Task: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
- Objective: Practice conditional logic, loops, and basic string output.

### 17. Flatten a Two-Dimensional Array

- Task: Write a function flatten2DArray(arr) that flattens a 2D array into a 1D array. For example, [[1, 2], [3, 4], [5, 6]] becomes [1, 2, 3, 4, 5, 6].
- Objective: Understand how to manipulate nested arrays and use higher-order functions like reduce().

### 18. Factorial with Recursion

- Task: Write a function factorial(n) that calculates the factorial of a number using recursion.
- Objective: Learn recursion and how to break problems into smaller parts.

### 19. Count Unique Values in Sorted Array

- Task: Write a function countUniqueValues(arr) that counts the number of unique values in a sorted array.
- Objective: Use the two-pointer technique and understand array traversal.

### 20. Reverse a String Recursively

- Task: Write a function reverseString(str) that reverses a string using recursion.
- Objective: Practice recursion and string manipulation.

### 21. Count Unique Values in Sorted Array

- Task: Write a function countUniqueValues(arr) that counts the number of unique values in a sorted array.
- Objective: Use the two-pointer technique and understand array traversal.

### 22. Reverse a String Recursively

- Task: Write a function reverseString(str) that reverses a string using recursion.
- Objective: Practice recursion and string manipulation.

### 23. Valid Parentheses

- Task: Write a function isValidParentheses(str) that checks if the input string has valid parentheses. For example, ()[]{} is valid, but (] is not.
- Objective: Practice using stacks and string traversal.

### 24. Check for Palindrome Permutation

- Task: Write a function isPalindromePermutation(str) that checks if any permutation of the input string is a palindrome. For example, "civic" is a palindrome and "ivicc" is a permutation of a palindrome.
- Objective: Practice string manipulation and counting character frequencies.

### 25. Find Maximum Subarray Sum (Kadane’s Algorithm)

- Task: Write a function maxSubArraySum(arr) that returns the largest sum of any contiguous subarray in the array. For example, [-2,1,-3,4,-1,2,1,-5,4] returns 6 for the subarray [4,-1,2,1].
- Objective: Implement Kadane’s algorithm to solve the problem efficiently.

### 26. Generate All Subsets of an Array

- Task: Write a function generateSubsets(arr) that returns all possible subsets of an array. For example, generateSubsets([1, 2]) returns [[], [1], [2], [1, 2]].
- Objective: Work with recursion and bitwise operations (optional) to generate subsets.

### 27. Rotate a Matrix by 90 Degrees

- Task: Write a function rotateMatrix(matrix) that rotates a 2D matrix by 90 degrees. For example, rotating [[1,2,3], [4,5,6], [7,8,9]] should result in [[7,4,1], [8,5,2], [9,6,3]].
- Objective: Work with 2D arrays and practice matrix manipulation.

### 28. Find Longest Substring without Repeating Characters

- Task: Write a function longestSubstring(str) that returns the length of the longest substring without repeating characters. For example, longestSubstring("abcabcbb") returns 3 for substring "abc".
- Objective: Work with sliding window algorithms and string traversal.

### 29. Product of All Other Numbers

- Task: Write a function productOfOthers(arr) that returns a new array such that each element at index i is the product of all elements in the input array except for the element at index i. Do this without using division.
- Objective: Practice array manipulation and efficient traversal.

### 30. Reorder Array According to Indexes

- Task: Write a function reorderArray(arr, indexes) that reorders the elements of an array according to a given array of indexes. For example, reorderArray([10, 20, 30], [2, 0, 1]) should return [20, 30, 10].
- Objective: Work with index manipulation and arrays.

### 31. Find All Possible Combinations of Array Elements

- Task: Write a function combinations(arr) that returns all possible combinations of elements from the array. For example, combinations([1, 2, 3]) returns [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
- Objective: Recursion or bitwise operations to generate combinations.

### 32. Find the Majority Element in an Array

- Task: Write a function majorityElement(arr) that finds the element that appears more than half the time in an array. If no such element exists, return null.
- Objective: Work with frequency counting or implement the Boyer-Moore Voting Algorithm.
