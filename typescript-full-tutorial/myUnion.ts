// instead of any use union
let score = 33
//could be num or str

let scoree: number | string = 33 //keep it strict, don't use all dt bc that makes it any

scoree = 44
scoree = '55'


type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let bex: User | Admin = {name: 'bex', id: 33}

bex = {username: 'bc', id: 44}

//arrays
const data: number[] = [1,2,3,4] // only nums