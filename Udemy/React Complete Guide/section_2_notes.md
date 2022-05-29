## diff b/w let and const
- let can be changed
- const cannot

## arrow functions
- diff then norm functions, no issues with this keyword
- () holds params

## exports and imports
- deafult export: is the norm
- named export is like react-dom, import {(and can rename)} from where ever

## classes
- constructor is instantiated like below, give properties using this keyword.
- classes can also inherit
```javascript
class person {
    constructor() {
        this.name = "max"
    }
    printmyname(){
        console.log(this.name)
    }
}
const person = new Person()
person.printmyname()
```
- use `extends` to fit a super class on top of the lower class.
- needs to have `super()` in the constructor and `extends` in the def to be able to call the other class.

## classes, props and methods
- props are like vars to objects, methods are functions to objects/classes
- with ES6, you have to add a prop in the constructor but with ES7 you can do it outside.
- methods are sim, with ES6, just a normal () function, but you can use an arrow function with ES7
    - advan of this is with arrow function, no need for this. keyword.

```javascript
class person {
    constructor() {
        name = "max"
    }
    printmyname = () => {
        console.log(this.name)
    }
}
const person = new Person()
person.printmyname()
```
- above is the ES7 version of the code, no need to use this. in the constructor

## spread and rest
- The spread operator allows you to pull elements out of an 
array (=> split the array into a list of its elements) or pull the 
properties out of an object. 

## js basic built ins
- map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
- filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
- concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
- slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice