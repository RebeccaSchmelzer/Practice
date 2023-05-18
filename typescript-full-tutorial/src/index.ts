console.log('typescript is here');

class User {
    email: string
    name: string
    city: string = '' //not in constructor
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const rebecca = new User('r@c', 'rebecca')

rebecca.city = 'vancouver'

export {}