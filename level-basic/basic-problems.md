## Basic Problems

### 1. Basic Promise Creation

- Task: Create a function checkAge(age) that returns a promise. If age is greater than or equal to 18, resolve with "Eligible to vote," else reject with "Not eligible to vote."
- Objective: Practice Working with promise resolution and rejection.

### 2. Chaining Promises

- Task: Write a function fetchData() that simulates fetching two pieces of data. First, fetch "User Info," and once resolved, fetch "User Preferences." Chain both promises.
- Objective: Practice Chaining multiple promises and understanding sequence in promises.

### 3. Using Async/Await with Simple Timeout

- Task: Create an async function countDown(seconds) that uses a setTimeout in a promise to wait for each second, then console logs the countdown.
- Objective: Practice Combining async/await with setTimeout to simulate delay.

### 4. Basic AJAX Request with Fetch API

- Task: Use the Fetch API to get data from a public API, like JSONPlaceholder's /users endpoint. Log each user's name to the console.
- Objective: Practice Using fetch to make GET requests.

### 5. Reverse a String

- Task: Write a function reverseString(str) that takes a string and returns the string reversed. For example, "hello" should return "olleh".
- Objective: Practice string manipulation and loops.

### 6. Find the Largest Number in an Array

- Task: Write a function findLargest(arr) that takes an array of numbers and returns the largest number.
- Objective: Learn to work with arrays, loops, and conditional statements.

### 7. Check if a String is a Palindrome

- Task: Write a function isPalindrome(str) that checks if a given string is a palindrome (a string that reads the same forward and backward), ignoring spaces and case.
- Objective: Practice string manipulation and condition checking.

### 8. Capitalize the First Letter of Each Word

- Task: Write a function capitalizeWords(str) that capitalizes the first letter of each word in a sentence. For example, "hello world" becomes "Hello World".
- Objective: String manipulation using split(), map(), and join().

### 9. Remove Duplicates from an Array

- Task: Write a function removeDuplicates(arr) that takes an array and removes all duplicate values. Return the new array with only unique values.s
- Objective: Practice array manipulation and understanding how to work with sets or loops.

### 10. Sum of Array Elements

- Task: Write a function sumArray(arr) that calculates the sum of all elements in an array.
- Objective: Work with arrays and loops to sum numbers.

### 11. Check if Array is Sorted

- Task: Write a function isSorted(arr) that checks if an array is sorted in ascending order. Return true if sorted, otherwise false.
- Objective: Practice array traversal and comparison.

### 12. Count the Occurrences of a Character

- Task: Write a function countOccurrences(str, char) that takes a string and a character, and returns the number of times the character appears in the string.
- Objective: Work with loops, conditionals, and string manipulation.

### 13. Find Index of a Target in an Array

- Task: Write a function findIndex(arr, target) that returns the index of the target value in the array. If the target value isn't found, return -1.
- Objective: Practice working with arrays, loops, and conditionals.

### 14. Filter Even Numbers from an Array

- Task: Write a function filterEvens(arr) that returns a new array with only the even numbers from the given array.
- Objective: Learn to filter arrays and practice using loops or filter().

### 15. Convert Fahrenheit to Celsius

- Task: Write a function fahrenheitToCelsius(f) that converts a given temperature in Fahrenheit to Celsius. The formula is C = (F - 32) \* 5/9.
- Objective: Work with simple arithmetic and function creation.

### 16. Count Vowels in a String

- Task: Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in the string.
- Objective: Practice string traversal and character comparison.

### 17. Find Factorial of a Number

- Task: Write a function factorial(n) that returns the factorial of a number n. Factorial of a number is the product of all numbers from 1 to n. For example, factorial(5) is 5 _ 4 _ 3 _ 2 _ 1 = 120.
- Objective: Understand loops and recursive function calls.

### 18. Find Second Largest Number in an Array

- Task: Write a function findSecondLargest(arr) that returns the second-largest number in an array.
- Objective: Practice array traversal and condition handling.

### 19. Count Words in a Sentence

- Task: Write a function countWords(str) that returns the number of words in a given sentence. Assume words are separated by spaces.
- Objective: Practice string splitting and array manipulation.

### 20. Merge Two Arrays

- Task: Write a function mergeArrays(arr1, arr2) that merges two arrays into one and returns the combined array.
- Objective: Work with arrays and the concat() method.

### 21. Find the Minimum and Maximum in an Array

- Task: Write a function minMax(arr) that returns an object with the minimum and maximum numbers in an array.
- Objective: Learn array traversal and comparison operations.

### 22. Fibonacci Sequence

- Task: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence. For example, the Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8... and fibonacci(5) should return 5.
- Objective: Practice recursion or iterative loops and understand sequence generation.

### 23. Remove Falsy Values from Array

- Task: Write a function removeFalsy(arr) that removes all "falsy" values (false, 0, '', null, undefined, NaN) from an array.
- Objective: Learn to work with array filtering and understand JavaScript's truthy and falsy values.

### 24. Chunk an Array

- Task: Write a function chunkArray(arr, size) that splits an array into chunks of the specified size. For example, chunkArray([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]].
- Objective: Practice array manipulation and handling edge cases.

### 25. Find the First Non-Repeating Character

- Task: Write a function firstNonRepeatingChar(str) that returns the first non-repeating character in a string. If all characters are repeating, return null.
- Objective: Work with string traversal and frequency counting.

### 26. Flatten a Nested Array

- Task: Write a function flattenArray(arr) that takes a nested array (array containing arrays) and returns a single flat array. For example, [[1, 2], [3, [4, 5]], [6]] becomes [1, 2, 3, 4, 5, 6].
- Objective: Learn recursion or array methods like reduce() to flatten arrays.

### 27. Find the Intersection of Two Arrays

- Task: Write a function arrayIntersection(arr1, arr2) that returns an array containing elements common to both input arrays.
- Objective: Work with arrays, sets, and filtering techniques.

### 28. Convert a String to Title Case

- Task: Write a function toTitleCase(str) that converts a string to title case, where the first letter of each word is capitalized. For example, "hello world" becomes "Hello World".
- Objective: String manipulation using methods like split(), map(), and join().

### 29. Find the Longest Word in a String

- Task: Write a function longestWord(str) that finds the longest word in a sentence. For example, "The quick brown fox" returns "quick".
- Objective: Practice string splitting, array traversal, and condition checking.

### 30. Rotate Array to the Left

- Task: Write a function rotateLeft(arr, k) that rotates an array to the left by k steps. For example, [1, 2, 3, 4, 5] rotated left by 2 steps becomes [3, 4, 5, 1, 2].
- Objective: Work on array manipulation and shifting elements.

### 31. Check for Balanced Parentheses

- Task: Write a function isBalanced(str) that checks whether a string of parentheses is balanced. For example, "(())" is balanced, but "(()" is not.
- Objective: Use stacks to manage opening and closing parentheses and string traversal.

### 32. Count the Frequency of Words in a String

- Task: Write a function wordFrequency(str) that takes a string and returns an object with the frequency of each word. For example, "hello world hello" should return {hello: 2, world: 1}.
- Objective: Use objects to store counts and practice string manipulation.

### 33. Find All Permutations of a String

- Task: Write a function stringPermutations(str) that returns all possible permutations of a string. For example, "abc" should return ["abc", "acb", "bac", "bca", "cab", "cba"].
- Objective: Work with recursion to generate permutations.

### 34. Move Zeros to the End

- Task: Write a function moveZeros(arr) that moves all zeros in the array to the end while keeping the order of the other elements. For example, [0, 1, 0, 3, 12] becomes [1, 3, 12, 0, 0].
- Objective: Practice array manipulation and maintaining relative order.

### 35. Find the Difference of Two Arrays

- Task: Write a function arrayDifference(arr1, arr2) that returns an array of elements that are present in one array but not the other.
- Objective: Practice array filtering and using sets.

### 36. Convert a Number to Roman Numerals

- Task: Write a function toRoman(num) that converts a number to its Roman numeral equivalent. For example, toRoman(29) returns "XXIX".
- Objective: Understand number systems and build a mapping system.

### 37. Caesar Cipher

- Task: Write a function caesarCipher(str, shift) that applies a Caesar cipher to a string by shifting the letters by a given number. For example, "abc" with a shift of 2 becomes "cde".
- Objective: Practice working with character codes (charCodeAt() and fromCharCode()).

### 38. Find All Subarrays with a Given Sum

- Task: Write a function findSubarraysWithSum(arr, targetSum) that finds all contiguous subarrays in the input array that add up to the targetSum.
- Objective: Practice array traversal and handling edge cases.

### 39. Find the Most Frequent Element in an Array

- Task: Write a function mostFrequent(arr) that finds the most frequent element in an array. For example, [1, 2, 2, 3, 3, 3] should return 3.
- Objective: Use objects or maps to store frequency counts.

### 40. Sum of Digits Until Single Digit

- Task: Write a function sumDigits(num) that keeps summing the digits of a number until it results in a single digit. For example, sumDigits(1234) results in 1 + 2 + 3 + 4 = 10, then 1 + 0 = 1.
- Objective: Practice recursion or iterative solutions involving mathematical operations.

### 41. Find the GCD of Two Numbers

- Task: Write a function gcd(a, b) that returns the greatest common divisor (GCD) of two numbers.
- Objective: Understand and implement the Euclidean algorithm using loops or recursion.

### 42. Check if Two Strings are Anagrams

- Task: Write a function areAnagrams(str1, str2) that checks whether two strings are anagrams (contain the same characters in a different order).
- Objective: Work with string sorting or frequency counting.

### 43. Binary Search

- Task: Write a function binarySearch(arr, target) that implements the binary search algorithm on a sorted array to find the index of the target value. Return -1 if not found.
- Objective: Practice search algorithms and work with array indices efficiently.
