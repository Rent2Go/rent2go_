class TokenService {


    getToken() {

       return localStorage.getItem("token")
    }

    setToken(token: string) {

        localStorage.setItem("token", token)
    }
    removeToken(token: string) {

        localStorage.removeItem(token)
    }

    // TokenService Methods

    //------------------------------------------------------------------------------------------------//
    // refreshToken Service Methods

    getRefreshToken() {

       return localStorage.getItem('refreshToken')
    }

    setrefreshToken(refreshToken: string) {

        localStorage.setItem("refreshToken", refreshToken)
    }
    removerefreshToken(refreshToken: string) {

        localStorage.removeItem(refreshToken)
    }

}

export default new TokenService();


