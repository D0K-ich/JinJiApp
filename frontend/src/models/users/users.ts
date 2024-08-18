export interface User {
    uuid : string
    avatar : any

    name   : string
    email  : string
    state  : string
    phone  : string

    level 	: number

    tariffId    : number

    balance      : number

    last_online  : string

    services            : any
    achievements         : any
    friends				: any
}

export interface Image {
    redirect_path: string
    path_image: string
}

export interface Message {
    content: string
    sender: string
    time: number
}

export interface AnimeDescription {
    content: string
    img_path: string
    rating: number
    age: number
    genre: string[]
}

export interface VoiceActing {
    voice_acting: string[]
}

export interface Genre {
    genre: string[]
}

export interface Tipe {
    tipe: string[]
}

export interface Status {
    status: string[]
}

export interface Timing {
    new_duration: string
    last_duration: string
}

export interface AiAnime {
    img_path: string
}