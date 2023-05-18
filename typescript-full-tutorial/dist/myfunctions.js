"use strict";
//problem with this is the any type!!
//num could be any, so you could return a str or a bool or something
//type needs to be more strict
// function addTwo(num) {
//     return num + 2
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addTwo(5)
function addTwoBetter(num) {
    return num + 2;
}
addTwoBetter(5);
//function getUpper(val) { //bad - needs a defined type
//     return val.toUpperCase()
// }
//function signup(name, email, password){} //can sign up with any type, need to specify
function betterSignup(name, email, password) { } //better
// function getVal(myVal: number) { //how do we return more than one type?
//     if (myVal >5) {
//         return true
//     }
//     return '200k'
// }
const getHell = (s) => {
    return '';
};
const heros = ['thor', 'spoderman'];
heros.map(hero => {
    return `hero is ${hero}`;
});
function consoleError(errmeg) {
    console.log(errmeg);
}
function handleError(errmeg) {
    throw new Error(errmeg);
}
