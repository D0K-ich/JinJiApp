import {User} from "../models/users/users";
import {defineStore} from 'pinia'
import {Endpoints} from "../models/users/requests";
import network from "../network/network";
import {DialogDjin, MessageDjin, UserInfoResponse} from "../models/users/responses";

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