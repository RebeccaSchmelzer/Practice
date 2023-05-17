let greetings: string = "rebecca"


console.log(greetings);

//num
let userId: number = 334455 //dont have to define type, bc the functions show that it already knows what u defined it as
//userId == 3344 NO GOOD



//bool
let isLoggedIn: boolean = false

//any
//here any is being shown as any
// this is bad, bc it doesnt know what type it could be - could be anything
//automatic inference doesnt work here, make the values infered as whatever u need
let newHero: string; //now it has to be a string
let hero;

function getHero() {
    return 'thor' 
}

hero = getHero()

export {}