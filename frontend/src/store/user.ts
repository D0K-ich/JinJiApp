import {User} from "../models/users/users";
import {defineStore} from 'pinia'
import {Endpoints} from "../models/users/requests";
import network from "../network/network";
import {UserInfoResponse} from "../models/users/responses";

interface State {
    // transactions		: Transaction[]
    filter_transactions : string

    user				: User

    // tariffs				: Tariff[]

    // promocodes			: Promocode[]
}

export const UsersStore = defineStore('users', {
    state: (): State => ({
        // transactions: [],
        filter_transactions: "",

        user: <User>{},

        // tariffs: [],

        // promocodes: [],
    }),

    getters : {
        UserList() {
            return new Promise((resolve, reject) => {
                network.BillingPost<UserInfoResponse>(Endpoints.Billing.List, {})
                    .then((r) => {
                        if (r.user != null) {
                            this.user = r.user
                            return resolve(r)
                        }
                        this.user = <User>{}
                        resolve(r)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
    }
})