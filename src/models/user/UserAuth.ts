export interface UserAuthModel {
    isAuthenticated: boolean,
    user: {
        id:number,
        firstname: string,
        phoneNumber: string,
        lastname: string,
        email?:string,
    }
    role: string


}