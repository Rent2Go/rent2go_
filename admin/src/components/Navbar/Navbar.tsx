import React, { useEffect, useState } from "react";
import { IoMdSearch, IoIosNotifications } from "react-icons/io";

import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { UserModel } from "../../models/responses/users/GetUser";
import { useAuth } from "../../contexts/AuthContext";

import "./navbar.css";
type Props = {};

const Navbar = (props: Props) => {
  const auth = useAuth();
  const email = auth.authInformation.user.email;
  const [user, setUser] = useState<UserModel>();

  const getUserByEmail = async (email: string) => {
    await UserService.getByEmail(email).then((res: any) => {
      setUser(res.data.data);
    });
  };

  useEffect(() => {
    if(email ){
      getUserByEmail(email)
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
       <div className="authContainer">
       <span>{auth.authInformation.user.firstname} {auth.authInformation.user.lastname}</span>
       
       </div>
        
        <div className="navbar__right">
          <span className="notification">
            <IoIosNotifications />
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <Link to="/profile">
              {user?.imageUrl ? (
                <img
                  src={`${user.imageUrl}`}
                  alt="profile"
                />
              ) : (
                <img
                  src="/assets/images/userImages/user-default.jpg"
                  alt="default-img"
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
