import { signUpRequest } from './../../../src/models/requests/auth/SignupRequest';
import { SignInRequest } from './../../../src/models/requests/auth/SignInRequest';
import axiosInstance from '../utils/axiosInsterceptors';




class AuthService{
    signIn(signInRequest:SignInRequest){
         return axiosInstance.post("/admins/signin", signInRequest);
    }
}
export default new AuthService();