import React from 'react'
import {NavLink} from "react-router-dom"
import "./sidebar.css"
import sidebarLinks from '../../assets/data/sidebarLinks'
type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
        <img src="" alt='logo'/>
        </div>
        <div className="sidebar__content">
          <div className="menu">
          <ul className="nav__list">
            {sidebarLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
          </div>
        </div>
    </div>
  )
}

export default Sidebar