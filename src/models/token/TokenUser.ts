export interface TokenUser {
    id:number,
    firstname: string,
    phoneNumber: string,
    lastname: string,
    role: string,
    sub: string,
    iat: Date,
    exp: Date

}