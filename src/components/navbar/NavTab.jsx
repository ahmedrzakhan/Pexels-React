import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import styles from "./Navbar.module.css";

const links = [
  {
    to: "/",
    title: "Welcome",
  },
  {
    to: "/pages/discover",
    title: "Discover",
  },
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
        <Link className={styles.linkStyle} to={to} key={to}>
          {title}
        </Link>
      ))}
    </Nav>
  );
};

export default NavTab;
