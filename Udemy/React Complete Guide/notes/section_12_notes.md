## how react works
### react
- a js lib for building user interfaces
- just a lib to manage components, state and finds out how to get those changed, hands all that info to the interface its working with, reactDOM

### reactdOM
- interface to the web
- bring the stuff onto the screen

### what react cares about - components
- props: data from parent component
- state: internal data
- context: component-wide data

- components that use these are updates by react, react lets the dom know about this so it can handle it

### how does reactDOM work?
- react determines how the component tree currently looks like and what it should look like and the dom receives the DIFFERENCES and then manipulates the real dom
- remember, re-eval does not mean re-rendering, components are re-evaled, and real dom is only updated in places where it needs to 
- comps are re-evaled when props are passed - and realdom changes are only made for differences b/w evals

### virtual dom diffing
- only the change is highlighted in the dom and inserts the differences, not re-rendering the entire component

### a first summary
- in react, u work with function components - return jsx code
- in components work with state, context or props
- react takes result of this eval and compares to the prev, and then hands the diffs to the real dom
- when re-eval, reruns all components
- use react.memo to specify which component to re-eval
- usecallback tell react to store a function and not recreate it when the surrounding function runs again as long as certain dependencies dont change

### how react handles state updates
ex/
- thru schedules
- react schedules a state update with new data
- react actually can postpone that state update - depending on priority
- after state change is processed then it will update component
ex//
setState((prev) => !prev)
- for every state change where you depend on the previous state, you get the latest state
- this above gets priority, if you were to not use that you would just need to re-rendr the component and react makes its own priority
- when setting state within a const in a component, the state is not updated immedietely but only scheduled for when the component re-renders

### optimizing with useMemo()
- use React.memo() to avoid uneccessary re-evals
- wrap around export statement for entire component
- runs initially, but then doesnt run anymore
- will re-run when parent component re-runs
- usecallback to store function objects and only rebuild them when some inputs changes
- useMemo hook
    - allows u to memoize to store any data u want to store, justv liike usecallback for functions
    - this hook needs a function as a first argument
    - function should return what you want to store
    - second arg, array of depends - ensure stored value is updated whenever one of the values youre using in there changes.
    - so whatever could change in your return statement should be in the depends