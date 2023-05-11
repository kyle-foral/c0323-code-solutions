# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  enable asynchronous, and await is used to indicate that the runtime should wait until the promise is settled.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async function, JavaScript will pause the function execution until the promise settles
  With then() , the rest of the function will continue to execute but JavaScript won't execute the . then() callback until the promise settles.
- When do you use `async`?
  enables the use of ordinary try / catch blocks around asynchronous code
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use it before the call of the function.
  You do not just in on a synchronous function.
- How do you handle errors with `await`?
  by using try-catch blocks, similar to how you would handle errors in synchronous code
- What do `try`, `catch` and `throw` do? When do you use them?
  The try statement defines a code block to run
  The catch statement defines a code block to handle any error
  The throw statement defines a custom error.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  your test will complete before the promise returned from fetchData resolves or rejects
  nothing will happen
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I think the try and catch method would be cleaner once i get a better understanding of it.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
