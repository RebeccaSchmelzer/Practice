interface User {
    email: string,
    uId: number,
    gId?: string,
    starttrial: () => string
}
//loose form of class, superficial view, doesnt tell u what to do inside it
//helps a lot with bulky code
//? for optional

const rebecca: User = {email: 'he', uId: 22, starttrial: () => {
    return 'hello'
}}

export {}