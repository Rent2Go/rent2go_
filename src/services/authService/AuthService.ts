import { SignInRequest } from './../../models/requests/auth/SignInRequest';
import { TokenResponse } from "../../models/responses/auth/LoginResponse";
import axiosInstance from "../../utils/axiosInsterceptors";


class AuthService{
   signUp(signUpRequest:SignInRequest){
        return axiosInstance.post<String>("/signup", signUpRequest);
    }

    signIn(signInRequest:SignInRequest){
         return axiosInstance.post<TokenResponse>("/signin", signInRequest);
    }
       
 
}
    

export default AuthService;