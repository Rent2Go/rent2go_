import React, { useContext } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

type Props = {}

const Login = (props: Props) => {
  const authContext: any = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>

      
    </div>
  )
}

export default Login