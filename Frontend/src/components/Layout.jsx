import React from "react";
import "../styles/Layout.styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { adminMenu } from "./../Data/Data.js";
import { useSelector } from "react-redux";
import userMenu from "./../Data/Data.js";
import { Badge, message } from "antd";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  // logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // doctor menu
  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "fa-solid fa-list",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];

  // rendering menu list
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>DOC APP</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item`} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket" />
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content" style={{ cursor: "pointer" }}>
                <Badge
                  count={user && user.notification.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <i class="fa-solid fa-bell"></i>
                </Badge>
                <Link to="/profile">{user?.name || "Guest"}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
