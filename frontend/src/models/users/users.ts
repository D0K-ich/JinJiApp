export interface User {
    uuid : string
    avatar : any

    name   : string
    email  : string
    state  : string
    phone  : string

    level 	: number

    tariffId    : number

    balance      : number

    last_online  : string

    services            : any
    achievements         : any
    friends				: any
}