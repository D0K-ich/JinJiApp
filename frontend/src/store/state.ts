import {defineStore} from "pinia";
import {User} from "../models/users/users";

interface State {
	isConnect: boolean
}

export const StateStore = defineStore('state', {
	state: (): State => ({
		isConnect: false,
	}),
})