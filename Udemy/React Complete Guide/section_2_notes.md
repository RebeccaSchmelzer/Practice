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
`
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
`