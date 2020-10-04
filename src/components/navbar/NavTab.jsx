import React from "react";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";

import styles from "./Navbar.module.css";
import cStyles from "./../../styles/common.module.css";

const links = [
  {
    to: { pathname: "/" },
    title: "Welcome",
  },
  // {
  //   to: "/pages/discover",
  //   title: "Discover",
  // },
  {
    to: "/pages/videos",
    title: "Videos",
  },
];

const Nav = styled.div`
  padding: 20px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  box-shadow: 1px 1px 1px 0.5px #ccc;
`;

const NavTab = () => {
  return (
    <Nav>
      {links.map(({ to, title }) => (
        <NavLink
          exact
          activeStyle={{
            color: "#0064f9",
          }}
          className={`${styles.linkStyle} ${cStyles.boldFont}`}
          to={to}
          key={to}
        >
          {title}
        </NavLink>
      ))}
    </Nav>
  );
};

export default NavTab;
