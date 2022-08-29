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