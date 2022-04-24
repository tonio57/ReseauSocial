export interface UserLoginInterface {
    email: string
    password: string
}

export interface ResponseServer {
    id: number
    niveau: number
    email: string
    password: string
    token: string
}