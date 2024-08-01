import {User} from "../models/users/users";
import {defineStore} from 'pinia'
import {Endpoints} from "../models/users/requests";
import network from "../network/network";
import {UserInfoResponse} from "../models/users/responses";

interface State {
    User: User
}

export const UsersStore = defineStore('users', {
    state: (): State => ({
        User: <User>{},
    }),

    actions : {
        UserList() {
            return new Promise((resolve, reject) => {
                network.BillingPost<UserInfoResponse>(Endpoints.Users.Get, {
                    "_module" : "profile",
                    "_subject": "profile",
                    "_action": "get",
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


        MessengNeiro(message : string) {
            return new Promise((resolve, reject) => {
                network.BillingPost<UserInfoResponse>(Endpoints.Users.Nuemesage, {
                    _module : "user",
                    _subject: "messages",
                    _action: "new",
                    user_message : message
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


        UpdateUser() {
            return new Promise((resolve, reject) => {
                network.BillingPost<UserInfoResponse>(Endpoints.Users.Get, {
                    "_module" : "profile",
                    "_subject": "profile",
                    "_action": "get",
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