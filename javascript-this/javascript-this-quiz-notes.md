# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
this is the object or proprty that it's being called on.
- What does it mean to say that `this` is an "implicit parameter"?
It's a window/global parameter can that be used without calling it in the parameters.
- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
When it's called
- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
It's refering to the firstName property of the character object. (Mario)
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
It's a me Mario. Becuase it's still being called under the same object.
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
character.greet. It's not calling the 'character' object but the hello const which has nothing about 'this' in it.
- How can you tell what the value of `this` will be for a particular function or method **definition**?
By following the code and seeing what it would be trying to reference at the time of defining it.
- How can you tell what the value of `this` is for a particular function or method **call**?
Based on what to the left of the dot upon being called.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
