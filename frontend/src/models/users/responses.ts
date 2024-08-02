import {User} from "./users";

export interface UserInfoResponse {
    user : User
}

export interface MessageDjin {
    context     : string
    date_time   : number
}

export interface DialogDjin {
    header      : string
    sub_header  : string
    time        : number
}