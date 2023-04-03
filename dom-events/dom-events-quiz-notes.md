# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
For debugging and checking how the code runs.
- What is the purpose of events and event handling?
To bind an action to a node.
- Are all possible parameters required to use a JavaScript method or function?
Not all the time.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener
- What is a callback function?
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- What object is passed into an event listener callback when the event fires?
The event object.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
You could check and find out more by checking the console. event.target is just targeting the event object.
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
The 2nd one is calling the function as if it were empty with no argument.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
