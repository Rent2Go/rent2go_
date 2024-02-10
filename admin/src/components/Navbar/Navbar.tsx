import React, { useEffect, useState } from "react";
import { IoMdSearch, IoIosNotifications } from "react-icons/io";

import "./navbar.css";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { UserModel } from "../../models/responses/users/GetUser";
import { useAuth } from "../../contexts/AuthContext";
type Props = {};

const Navbar = (props: Props) => {


  const auth =  useAuth()
 const email = auth.authInformation.user.email|| '';
 const [user,setUser] = useState<UserModel>();
 console.log(user?.imageUrl);
 

 const getUserByEmail = async(email:string)=>{

  await UserService.getByEmail(email)
  .then((res:any)=>{
      setUser(res.data.data)
  })
 }

 useEffect(() => {
  getUserByEmail(email)
 }, [email])
 

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="search__box">
          <input type="search" className="form-control" placeholder="search or type" />
          <span>
            <IoMdSearch />
          </span>
        </div>
        <div className="navbar__right">
          <span className="notification">
            <IoIosNotifications />
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <Link to="/profile"><img className="img-rounded" src={user?.imageUrl} alt="profile"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
