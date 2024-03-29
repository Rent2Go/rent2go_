import { SignInRequest } from './../../models/requests/auth/SignInRequest';
import axiosInstance from "../../utils/axiosInsterceptors";
import { signUpRequest } from '../../models/requests/auth/SignupRequest';


class AuthService{
   signUp(signUpRequest:signUpRequest){
        return axiosInstance.post("/signup", signUpRequest);
    }

    signIn(signInRequest:SignInRequest){
         return axiosInstance.post("/signin", signInRequest);
    }
    
       
 
}
    

export default new AuthService();