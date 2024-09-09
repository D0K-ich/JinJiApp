import {defineStore} from "pinia";
import {ConnectionState, ConnectionStateName} from "./events";

interface State {
	connection	: ConnectionState
}

export const StateStore = defineStore('state', {
	state: (): State => ({
		connection: {} as ConnectionState,
	}),

	getters : {
		isConnected	: (state : State) : boolean => {return state.connection && state.connection.Name == ConnectionStateName.Online}
	}
})