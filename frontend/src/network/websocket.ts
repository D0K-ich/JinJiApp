import {ConnectionState, ConnectionStateName} from "../store/events";
import {CloseNormal, CloseTimer, ConnectionEvents, WsMessage} from "./events";
import {config} from "./config";
import mitt, {Emitter} from "mitt";
import {StateStore} from "../store/state";

export let JinJi : Websocket

export const CreateWebsocket = () => {
    if(JinJi) {return}
    JinJi = new Websocket()

   // JinJi.onmessage = (EventTarget) => {
   //      console.log(JSON.parse(EventTarget.data)); return EventTarget.data
   //  }

    // if (JinJi != undefined) {JinJi.onopen = () => {JinJi.send("Hello, 123123!")}}
}
//
// export const CloseWebsocket = () : void => {
//     if(!JinJi) {return}
//
//     JinJi.close(1000, "Stopped")
// }

// export const SendWsMessage = (message : number) => {
//     if (!JinJi) {return ''}
//
//     let time = parse("1s")
//     console.log(time)
//
//     JinJi.send(JSON.stringify(<Timing>{last_duration: "10s"}))
// }

export const ConnectionBus	: Emitter<ConnectionEvents>		= mitt<ConnectionEvents>()
// export const ServerBus		: Emitter<ServerIncomingEvents>	= mitt<ServerIncomingEvents>()

const getNowSec = () : number => {return Math.floor(Date.now() / 1000)}
class Websocket {
    private socket				: WebSocket | undefined
    private wasConnected		: boolean = false
    private connState 			: ConnectionStateName = ConnectionStateName.Unknown
    private lastOk				: number = getNowSec()
    private lastWsTimer 		: NodeJS.Timeout | undefined

    constructor() {
        this.openWs()
        this.lastWsTimer = setInterval(() : void => {this.check(this.lastOk)}, 5000) // << run check connection observer
    }

    private updateLastWsOk() {this.lastOk = getNowSec()}

    private openWs() : void {
        const self : this = this

        if(self.socket) {
            self.socket.close(CloseNormal)
            self.socket = undefined
        }

        self.socket = new WebSocket(config.serverWsUrl());
        self.socket.onopen = () : void => {
            self.updateLastWsOk()
            StateStore().connection.Name = ConnectionStateName.Online
            self.connState = ConnectionStateName.Online
            ConnectionBus.emit(self.connState, <ConnectionState>{
                 Name		: self.connState,
                 Code		: 0,
                 Message		: self.wasConnected ? 'reconnect' : 'connect',
                 IsReconnect	: true,
            })	// self.StateBus.em.connState, self.wasConnected)
             // self.wasConnected = ue	// order important
        }
        self.socket.onmessage = (mevent: MessageEvent) => {
            self.updateLastWsOk()

            const em : WsMessage = JSON.parse(mevent.data);
            if(!em) {console.error("(ws) >> Empty incomming message");return}

            if(em.Type === 'ping') {return}

            if(em.Type === "error" && self.socket) {
                // self.socket.close(CloseNormal)
                // self.socket = undefined

                return
            }
        }

        self.socket.onclose = (e : CloseEvent) : void => {
            self.connState = ConnectionStateName.Offline		// self.StateBus.emit(self.connState, e.code)
            StateStore().connection.Name = ConnectionStateName.Offline
            ConnectionBus.emit(self.connState, <ConnectionState>{
                Name		: self.connState,
                Code		: e.code,
                Message		: 'close',
                IsReconnect	: self.wasConnected,
            })
            if(e.code === CloseNormal) {return}
        }

        self.socket.onerror = (e) => {
            console.error("socket error", e)
            self.connState = ConnectionStateName.Error
            ConnectionBus.emit(self.connState, <ConnectionState>{
                Name		: self.connState,
                Code		: 0,
                Message		: String(e),
                IsReconnect	: self.wasConnected,
            })	// self.StateBus.emit(self.connState, e)
        }
    }

    private check(last_ok : number) {
        const self : this = this

        const now : number = Math.floor(Date.now() / 1000)

        if(self.connState === ConnectionStateName.Online && last_ok + 6 > now) {this.lastOk += 6;console.log("ok");return}		// all ok

        //retry to connect
        if(self.socket) {
            self.socket.close(CloseTimer)
            self.socket = undefined
        }
        this.openWs()
    }

    Stop() : void {
        if(this.socket) {
            this.socket.close(CloseNormal)
            this.socket = undefined
        }
        clearInterval(this.lastWsTimer)
        this.wasConnected = false
        this.lastWsTimer = undefined
        this.lastOk = 0
    }

    // ViteHR() {
    // 	console.info(">>>>> ViteHR close socket <<<<<")
    // 	this.socket.close(CloseViteHR)
    // 	this.connState = ConnectionStateName.Offline
    // 	clearInterval(this.lastWsTimer)
    // }
}
