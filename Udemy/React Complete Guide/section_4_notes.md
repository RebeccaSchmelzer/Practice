# handling events, state, components
## event listeners
- function() within an onclick executes when the line of code is parsed, just calling function as in onClick{function} will only point to the function and will return when actually clicked.
- functions called by elements in return statement should in in Handler.

## state!
- react never repeats after rendering, but to update, you need a way to tell react to reeval a component
- useState - hook: will allow us to define values as state where changes will reflect in the component again when its called.
- these hooks can only be called inside react fcns
- it also returns a function which we can then call to assign a new value to that variable. So we'll not be assigning values like this with the equal sign, instead, we will be assigning new values by calling a function. That's just how this state variable thing works. 

- for that useState actually returns an array where the first value is the variable itself, you could say, the value itself. 
- the second element in the array is that updating function. 
- use a modern JavaScript feature called array destructuring, which looks like this,
```javascript
const [title, setTitle] = useState(props.title)
```
- The first element is a point at that managed value, starting value. So initially at props title, the value stored in props title
- second element here is a function which we can later call to set a new title
- so to change the data on an event change, assign setTitle as new data within that called function.

 