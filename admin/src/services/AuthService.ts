import { signUpRequest } from './../../../src/models/requests/auth/SignupRequest';
import { SignInRequest } from './../../../src/models/requests/auth/SignInRequest';
import axiosInstance from '../utils/axiosInsterceptors';




class AuthService{
   signUp(signUpRequest:signUpRequest){
        return axiosInstance.post("/signup", signUpRequest);
    }

    signIn(signInRequest:SignInRequest){
         return axiosInstance.post("/signin", signInRequest);
    }
}
export default new AuthService();