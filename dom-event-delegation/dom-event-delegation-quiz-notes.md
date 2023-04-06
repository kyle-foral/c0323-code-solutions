# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
The object in which the event is taking place
- Why is it possible to listen for events on one element that actually happen its descendent elements?
Due to event bubbling
- What DOM element property tells you what type of element it is?
event.target.tagName
- What does the `element.closest()` method take as its argument and what does it return?
It takes a selecgor as an argument and returns the closest element or itself.
- How can you remove an element from the DOM?
remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
By adding an addEventListener to the parent of the list.

## Notes

All student notes should be written here.
.tagname needs to match or return in CAPS
example .tagName === 'BUTTON'

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
