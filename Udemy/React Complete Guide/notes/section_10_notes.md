## introducing side effects
- so usestate is used to render ui and react to user input
- side effects are for anything that is not related to putting things on the screen

## useeffect hook
- first is a function that should be executed after every component evaluation IF the specified dependencies changed
- second is the dependencies of the effect - the function only runs if the depens are changed

## what not to add to dependencies
- You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

- You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

- You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

## useReducer
- useState becomes tough when state becomes rlly complex and if u have multiple states and depens and multiple changes
- useReducer can be tougher to set up but easier to work with