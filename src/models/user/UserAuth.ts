export interface UserAuthModel {
    isAuthenticated: boolean,
    user: {
        firstname: string,
        phoneNumber: string,
        lastname: string,
    }
    role: string


}