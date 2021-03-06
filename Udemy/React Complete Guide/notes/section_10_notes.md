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

## useState vs. useReducer
- when useState becomes too complicated, multiple states to keep track of
- uS
    - main state manager
    - great for indep pieces of data
    - great for simple state updates
    - only low coupling
- uR
    - great for more power
    - more complex state updating logic, always guaranteed newst data
    - considered if you have related pieces of state/data

## context
- allows you to access state info whithout creating prop chains

## context limitations
- not for component configs
- for the button, button should be reusable but of context is used to make sure that user is always logged out onclick, context will not be able to be used other then for that
- not optimized for high freq changes, so state changes multiple times per second
- redux is for this

## rules of hooks
1. react hooks are only used in react functions
2. dont call hooks in nested functions or any block statements
3. add everything u refer to inside the depens of useEffect
4. only add react hooks in top level