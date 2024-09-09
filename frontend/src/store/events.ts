export enum ConnectionStateName {
    Unknown		= 'unknown',
    Online		= 'online',
    Offline		= 'offline',
    Error		= 'error',
    // Connecting	= 'connecting',
    // Abandon		= 'abandon',
}
export interface ConnectionState {
    Name		: ConnectionStateName
    Code		: number
    Message		: string
    IsReconnect	: boolean
}

