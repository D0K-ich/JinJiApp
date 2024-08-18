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

export interface Status {
    status      : string
}

export interface Search {
    status      :string
}


export interface AuthResponse {
    user_id     : string
    auth_token  : string
}