import {Timing} from "../models/users/users";
import parse from 'parse-duration'

export let JinJi : WebSocket

export const CreateWebsocket = (url : string) => {
    if(JinJi) {return}
    JinJi = new WebSocket(url)

   JinJi.onmessage = (EventTarget) => {
        console.log(JSON.parse(EventTarget.data)); return EventTarget.data
    }

    // if (JinJi != undefined) {JinJi.onopen = () => {JinJi.send("Hello, 123123!")}}
}

export const CloseWebsocket = () : void => {
    if(!JinJi) {return}

    JinJi.close(1000, "Stopped")
}

export const SendWsMessage = (message : number) => {
    if (!JinJi) {return ''}

    let time = parse("1s")
    console.log(time)

    JinJi.send(JSON.stringify(<Timing>{last_duration: "10s"}))
}
