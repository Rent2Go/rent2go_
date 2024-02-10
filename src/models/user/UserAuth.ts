export interface UserAuthModel {
    isAuthenticated: boolean,
    user: {
        firstname: string,
        phoneNumber: string,
        lastname: string,
        email?:string,
    }
    role: string


}