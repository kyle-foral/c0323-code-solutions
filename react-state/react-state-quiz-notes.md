# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  simple JavaScript functions that we can use to isolate the reusable part from a functional component
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Must be top level.
  Can't be inside conditions, loops or other nested functions.
  Must start with 'Use' then the name with a capital letter.
  Must also be in the same order everytime.
- What is the purpose of state in React?
  to contain data or information about the component
- Why can't we just maintain state in a local variable?
  Becuase a state is meant to hold data like vairables and update them.
- What two actions happen when you call a `state setter` function?
  It renders the first then updates then state.
- When does the local `state variable` get updated with the new value?
  On the next render when you call useState.

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
