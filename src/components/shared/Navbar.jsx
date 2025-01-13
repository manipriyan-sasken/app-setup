"use client";
import { useState } from "react";
import Link from "next/link";
import { Tooltip as ReactTooltip } from "react-tooltip";
import SubMenu from "./SubMenu";

const Navbar = () => {
  const [isSubMenu, setIsSubMenu] = useState(false);
  let list = [
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
    { name: "Dashboard", icon: "dash-icon.svg", path: "/home" },
  ];

  const showMenu = () => {
    setIsSubMenu(true);
  };

  return (
    <div
      className="p-3 w-20 tap-nav absolute"
      style={{ height: "calc(100vh)" }}
    >
      {isSubMenu && (
        <div className="absolute" style={{ marginLeft: "4rem" }}>
          <SubMenu />
        </div>
      )}
      <div
        className="h-10 flex items-center justify-center"
        style={{
          height: "3.5rem",
          backgroundColor: "var(--navbar-bg)",
          borderRadius: "6px 6px 0 0",
        }}
      >
        <img src="/images/re-logo.svg" />
      </div>
      <ul
        className="overflow-auto scroll-nav nav-ul"
        style={{
          height: "calc(100% - 16rem)",
          backgroundColor: "var(--navbar-bg)",
        }}
      >
        {list.map((menu, i) => (
          <li
            className="h-10 flex justify-center items-center mb-4 hover:navbar-menu-hov"
            key={i}
          >
            <Link href={menu.path}>
              <img
                src={`/images/${menu.icon}`}
                className="nav-menu-ttip cursor-pointer"
                data-tooltip-content="content"
                // onClick={showMenu}
              />
            </Link>
          </li>
        ))}
      </ul>
      <ul
        className="pt-4 flex items-center flex-col"
        style={{
          height: "11.5rem",
          backgroundColor: "var(--navbar-bg)",
          borderRadius: "0 0 6px 6px",
        }}
      >
        <li className="h-10 flex justify-center items-center mb-4 hover:navbar-menu-hov">
          <Link href="/support">
            <img
              src={`/images/gold-re.svg`}
              className="nav-menu-ttip cursor-pointer"
              data-tooltip-content="content"
            />
          </Link>
        </li>
        <li className="h-10 flex justify-center items-center mb-4 hover:navbar-menu-hov">
          <img
            src={`/images/notification.svg`}
            className="nav-menu-ttip cursor-pointer"
            data-tooltip-content="content"
          />
        </li>
        <li
          className="h-10 w-10 flex justify-center items-center hover:navbar-menu-hov profile-icon relative"
          style={{ background: "#0046BC" }}
        >
          <p className="mb-0">Z</p>
          <div className="profile-status" style={{ background: "green" }}></div>
        </li>
      </ul>
      <ReactTooltip
        place="right"
        anchorSelect=".nav-menu-ttip"
        className="custom-ttip"
      />
    </div>
  );
};

export default Navbar;
