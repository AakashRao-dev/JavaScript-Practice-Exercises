# Set of 10 Problems [21-27]

## Problems

### 21. Lazy Evaluation

Write a class LazyEvaluator that takes a series of operations to be performed on a value but doesn't execute them until explicitly asked (similar to how a promise chain works).

### 22. Reactive System (like Vue/Reactivity)

Implement a simple reactive system where you can track changes to an object’s properties and trigger side effects when those properties are updated.

### 23. Asynchronous Retry Mechanism

Implement a function retry(func, retries, delay) that retries an asynchronous function a certain number of times before failing. Each retry should wait a given delay before attempting again.

### 24. Event Emitter Class

Implement an EventEmitter class that can register event listeners, emit events, and remove listeners. It should have on(event, listener), emit(event, ...args), and off(event, listener) methods.

### 25. Throttle with Leading and Trailing Edge

Write a throttle(func, delay, {leading, trailing}) function where the leading option ensures the function is called on the leading edge of the timeout, and trailing ensures it’s called at the end of the timeout.

### 26. Custom bind Function

Write a function customBind(func, thisArg, ...args) that works like Function.prototype.bind(), allowing you to bind a function to a specific context and set initial arguments.

### 27. Longest Increasing Subsequence

Write a function longestIncreasingSubsequence(arr) that returns the length of the longest strictly increasing subsequence in an array. Solve this efficiently in O(n log n) time using binary search.
