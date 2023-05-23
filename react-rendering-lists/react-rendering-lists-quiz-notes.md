# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When we want to frequently adjusted the list.
- Why is it important for React components to be data-driven?
  Becuase react will always keep re-rendering components when it is called each time.
- Where in the component code would a list of React components typically be built?
  Outside of the function
- What `Array` method is commonly used to create a list of React components?
  Map method
- Why do components in a list need to have unique keys?
  for performance improvements
  helps react know which items have been changed.
- What is the best value to use as a "key" prop when rendering lists?
  a string that resembles the item or items
  or the ID

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
