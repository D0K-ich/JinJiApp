export let KanopyWS : WebSocket

export const CreateWebsocket = (url : string) => {
    if(KanopyWS) {return}
    KanopyWS = new WebSocket(url)

    if (KanopyWS != undefined) {KanopyWS.onopen = () => {KanopyWS.send("Hello, 123123!")}}
}

export const CloseWebsocket = () : void => {
    if(!KanopyWS) {return}

    KanopyWS.close(1000, "Stopped")
}

