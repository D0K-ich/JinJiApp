import {ConnectionState, ConnectionStateName} from "../store/events";

export const CloseNormal	: number = 1000
export const CloseTimer		: number = 3002

export type ConnectionEvents = Record<ConnectionStateName, ConnectionState>

export interface WsMessage {
    Type : string
    Error : string

    Message : string
}