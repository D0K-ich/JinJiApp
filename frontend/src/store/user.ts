import {User} from "../models/users/users";
import {defineStore} from 'pinia'
import {Endpoints} from "../models/users/requests";
import network from "../network/network";
import {
    AuthResponse,
    DialogDjin,
    MessageDjin, Search,
    Status,
    UserInfoResponse
} from "../models/users/responses";

interface State {
    User: User
}

export const UsersStore = defineStore('users', {
    state: (): State => ({
        User: <User>{},
    }),

    actions : {
        UserInfo() {
            return new Promise((resolve, reject) => {
                network.UserPost<UserInfoResponse>(Endpoints.Users.Get, {
                    "name" : "name" //todo
                })
                    .then((r) => {
                        if (r.user != null) {
                            this.User = r.user
                            return resolve(r)
                        }
                        this.User = <User>{}
                        resolve(r)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },


        NewMessageDjin(message : string) : Promise<MessageDjin>  {
            return new Promise((resolve, reject) => {
                network.UserPost<MessageDjin>(Endpoints.Users.NewMessage, {user_message : message})
                    .then((r) => {
                        resolve(r)
                        return r
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        DialogList() : Promise<DialogDjin[]>  {
            return new Promise((resolve, reject) => {
                network.UserPost<DialogDjin[]>(Endpoints.Users.NewMessage, {user_id : this.User.uuid})
                    .then((r) => {
                        resolve(r)
                        return r
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        SendMailCode(mail :string) : Promise<Status>  {
            return new Promise((resolve, reject) => {
                network.UserPost<Status>(Endpoints.Users.SendCode, {user_mail : mail})
                    .then((r) => {
                        resolve(r)
                        return r
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        RecoverPass() : Promise<Status>  {
            return new Promise((resolve, reject) => {
                network.UserPost<Status>(Endpoints.Users.RecoverPass, {})
                    .then((r) => {
                        resolve(r)
                        return r
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        NewProfile(mail :string,pass :string,nick :string) : Promise<AuthResponse>  {
            return new Promise((resolve, reject) => {
                network.UserPost<AuthResponse>(Endpoints.Users.NewUser, {user_mail : mail, user_pass : pass, user_nick :nick })
                    .then((r) => {
                        resolve(r)
                        return r
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        OldUser(old_nick :string, old_password :string) : Promise<AuthResponse>  {
            return new Promise((resolve, reject) => {
                network.UserPost<AuthResponse>(Endpoints.Users.SerchProfile, {user_OldNick : old_nick, user_OldPassword : old_password})
                    .then((r) => {
                        resolve(r)
                        return r
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        SendCodeCheck(code :number) : Promise<AuthResponse>  {
            return new Promise((resolve, reject) => {
                network.UserPost<AuthResponse>(Endpoints.Users.CheckCode, {user_code : code})
                    .then((r) => {
                        resolve(r)
                        return r
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },


        SearchUser(search :string) : Promise<Search>  {
            return new Promise((resolve, reject) => {
                network.UserPost<Search>(Endpoints.Users.CheckCode, {user_search : search})
                    .then((r) => {
                        resolve(r)
                        return r
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        UpdateUser() { //todo
            return new Promise((resolve, reject) => {
                network.UserPost<UserInfoResponse>(Endpoints.Users.Get, {
                    "name" : "name"
                })
                    .then((r) => {
                        if (r.user != null) {
                            this.User = r.user
                            return resolve(r)
                        }
                        this.User = <User>{}
                        resolve(r)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
    }
})

export {}