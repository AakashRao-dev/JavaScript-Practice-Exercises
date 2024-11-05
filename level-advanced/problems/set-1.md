# Set of 10 Problems [1-10]

## Problems

### 1. Chained Fetches with Dynamic URLs

Using JSONPlaceholder, fetch a random user and use their ID to fetch their posts, and then for each post, fetch its comments. Display all the data on a web page.

### 2. Custom Promise-Based AJAX Wrapper

Write a custom function myFetch(url) that wraps the native Fetch API in a Promise. This function should resolve with data on a successful fetch and reject with an error message if something goes wrong.

### 3. Implementing a Debounced Search with AJAX

Create a search input that queries a public API (e.g., GitHub API) as you type, with a 500ms debounce on requests. Display results dynamically on the page.

### 4. Promise-based Throttled API Request

Implement a function throttledFetch(url, limit) that allows fetching data with a limited rate, so only limit requests are made at once. Fetch each user’s info from JSONPlaceholder but throttle the requests if limit is exceeded.

### 5. Cancelable Fetch Request

Create a cancelableFetch(url) function that returns an object with the promise and a cancel() method. This should cancel the ongoing request if cancel() is called.

### 6. Exponential Backoff Retry Mechanism

Write a function fetchWithBackoff(url) that tries fetching data. If it fails, retry with increasing wait times (e.g., 1s, 2s, 4s, etc., up to 5 retries) before giving up.

### 7. Cascading Data Fetch with Dependency

Fetch data from multiple endpoints where each request depends on data from the previous request. For example, fetch a user's profile, use it to fetch related posts, then comments on those posts, and finally display all the comments on the page.

### 8. Deep Clone an Object with Circular References

Write a function deepClone(obj) that can clone an object with nested structures and handle circular references.

### 9. Custom Promise.all Implementation

Write your own version of Promise.all() that takes an array of promises and returns a single promise. It should resolve when all promises in the array have resolved or reject if any promise rejects.

### 10. LruCache Class

Implement an LruCache class with get(key) and put(key, value) methods that follows the Least Recently Used (LRU) caching algorithm.
