## Advanced Problems

### 1. Chained Fetches with Dynamic URLs

- Task: Using JSONPlaceholder, fetch a random user and use their ID to fetch their posts, and then for each post, fetch its comments. Display all the data on a web page.
- Objective: Practice Creating complex chained requests with dynamic data.

### 2. Custom Promise-Based AJAX Wrapper

- Task: Write a custom function myFetch(url) that wraps the native Fetch API in a Promise. This function should resolve with data on a successful fetch and reject with an error message if something goes wrong.
- Objective: Practice Writing a custom Promise wrapper for native functions.

### 3. Implementing a Debounced Search with AJAX

- Task: Create a search input that queries a public API (e.g., GitHub API) as you type, with a 500ms debounce on requests. Display results dynamically on the page.
- Objective: Practice Implementing debouncing in AJAX requests to optimize API usage.

### 4. Promise-based Throttled API Request

- Task: Implement a function throttledFetch(url, limit) that allows fetching data with a limited rate, so only limit requests are made at once. Fetch each user’s info from JSONPlaceholder but throttle the requests if limit is exceeded.
- Objective: Practice Implementing throttling with promises, useful for API rate limits.

### 5. Cancelable Fetch Request

- Task: Create a cancelableFetch(url) function that returns an object with the promise and a cancel() method. This should cancel the ongoing request if cancel() is called.
- Objective: Practice Managing long-running or unnecessary API calls, handling cancellation in promises.

### 6. Exponential Backoff Retry Mechanism

- Task: Write a function fetchWithBackoff(url) that tries fetching data. If it fails, retry with increasing wait times (e.g., 1s, 2s, 4s, etc., up to 5 retries) before giving up.
- Objective: Practice Implementing exponential backoff, a standard for handling unstable network calls.

### 7. Cascading Data Fetch with Dependency

- Task: Fetch data from multiple endpoints where each request depends on data from the previous request. For example, fetch a user's profile, use it to fetch related posts, then comments on those posts, and finally display all the comments on the page.
- Objective: Practice Handling complex, dependent API call chains with async/await.

### 8. Deep Clone an Object with Circular References

- Task: Write a function deepClone(obj) that can clone an object with nested structures and handle circular references.
- Objective: Understand recursion, handling references, and deep object cloning without external libraries.

### 9. Custom Promise.all Implementation

- Task: Write your own version of Promise.all() that takes an array of promises and returns a single promise. It should resolve when all promises in the array have resolved or reject if any promise rejects.
- Objective: Practice asynchronous programming, promises, and error handling.

### 10. LruCache Class

- Task: Implement an LruCache class with get(key) and put(key, value) methods that follows the Least Recently Used (LRU) caching algorithm.
- Objective: Work with data structures like maps and doubly linked lists. Understand caching mechanisms.

### 11. Throttle Function

- Task: Write a function throttle(fn, wait) that returns a throttled version of fn, ensuring that it’s called at most once every wait milliseconds.
- Objective: Gain experience in higher-order functions and event throttling, useful for optimizing web app performance.

### 12. Debounce Function

- Task: Implement a debounce(fn, delay) function. The function should delay the execution of fn until after delay milliseconds have passed since the last time it was invoked.
- Objective: Learn about function control techniques and user input optimization for web apps.

### 13. Event Emitter

- Task: Create a class EventEmitter that can register event listeners, emit events, and remove listeners.
- Objective: Get comfortable working with event-driven architectures.

### 14. Asynchronous Retry Mechanism

- Task: Write a function retry(fn, retries) that calls the asynchronous function fn, and if it fails, retries up to retries times before finally rejecting.
- Objective: Practice error handling and recursion with asynchronous code.

### 15. Flatten Deeply Nested Array

- Task: Write a function flattenArray(arr) that can flatten a deeply nested array of arbitrary depth, e.g., [1, [2, [3, [4]]]] becomes [1, 2, 3, 4].
- Objective: Explore recursion, handling different data structures, and array manipulation.

### 16. Function Currying

- Task: Create a function curry(fn) that converts a function fn of multiple arguments into a curried version.
- Objective: Learn about function composition and partial application, which are fundamental in functional programming.

### 17. Async Parallel Execution with Limit

- Task: Write a function asyncParallelLimit(tasks, limit) that takes an array of asynchronous tasks and runs them in parallel, but no more than limit tasks at a time.
- Objective: Practice controlling asynchronous execution flow and working with promises.

### 18. Memoization

- Task: Implement a memoize(fn) function that caches the result of expensive function calls and returns the cached result when the same inputs occur again.
- Objective: Understand function caching and performance optimization.

### 19. Binary Search Tree Operations

- Task: Implement a BinarySearchTree class with methods to insert, search, and delete nodes.
- Objective: Reinforce your understanding of tree data structures, recursion, and algorithmic efficiency.

### 20. Implement JSON.stringify

- Task: Write your own version of JSON.stringify() that can handle objects, arrays, numbers, strings, booleans, and null values.
- Objective: Understand object serialization and how JavaScript handles data types.

### 21. Lazy Evaluation

- Task: Write a class LazyEvaluator that takes a series of operations to be performed on a value but doesn't execute them until explicitly asked (similar to how a promise chain works).
- Objective: Explore delayed computation, similar to how RxJS or Lodash's \_.chain works.

### 22. Reactive System (like Vue/Reactivity)

- Task: Implement a simple reactive system where you can track changes to an object’s properties and trigger side effects when those properties are updated.
- Objective: Learn the basics of reactive programming and how modern JavaScript frameworks like Vue.js implement reactivity.

### 23. Asynchronous Retry Mechanism

- Task: Implement a function retry(func, retries, delay) that retries an asynchronous function a certain number of times before failing. Each retry should wait a given delay before attempting again.
- Objective: Practice advanced async patterns and error handling in JavaScript.

### 24. Event Emitter Class

- Task: Implement an EventEmitter class that can register event listeners, emit events, and remove listeners. It should have on(event, listener), emit(event, ...args), and off(event, listener) methods.
- Objective: Build a core JavaScript event-driven system similar to Node.js’s EventEmitter.

### 25. Throttle with Leading and Trailing Edge

- Task: Write a throttle(func, delay, {leading, trailing}) function where the leading option ensures the function is called on the leading edge of the timeout, and trailing ensures it’s called at the end of the timeout.
- Objective: Master more complex control over asynchronous behavior and function execution.

### 26. Custom bind Function

- Task: Write a function customBind(func, thisArg, ...args) that works like Function.prototype.bind(), allowing you to bind a function to a specific context and set initial arguments.
- Objective: Deepen understanding of function contexts (this), closures, and function currying.

### 27. Longest Increasing Subsequence

- Task: Write a function longestIncreasingSubsequence(arr) that returns the length of the longest strictly increasing subsequence in an array. Solve this efficiently in O(n log n) time using binary search.
- Objective: Implement dynamic programming and advanced algorithms efficiently.
