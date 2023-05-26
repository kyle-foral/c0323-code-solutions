# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  just before a component mounts on the DOM or the render method is called
- What is a React Effect?
  allows you to perform side effects in your components
- When should you use an Effect and when should you not use an Effect?
  If there is no external system involved
- When do Effects run?
  when its mounted
  when the depencies are updated
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  a list of dependencies of your side-effect: being props or state values
  you declare them with an empty array
- Why would you want to clean up from an Effect?
  to avoid memory leaks
  help save memory
- How do you clean up from an Effect?
  useEffect(() => { // Your effect return () => { // Cleanup }; }, [])
- When does the cleanup function run?
  when we "switch" effects

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
