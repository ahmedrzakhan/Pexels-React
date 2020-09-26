import React from "react";

import styled from "styled-components";

import cStyles from "./../../styles/common.module.css";

import styles from "./Navbar.module.css";

const Nav = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 10px;
  background: #000;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  margin-left: 20px;
`;

const Button = styled.button`
  padding: 10px 17px 10px 17px;
  border: none;
  border-radius: 3px;
  color: #fff;
`;

const Img = styled.img`
  height: 40px;
  border-radius: 10px;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Flex>
          <Img src="/pexels.png" alt="pexels" />
          <Div className={styles.fontStyle}>Pexels</Div>
        </Flex>
      </div>
      <div>
        <Button className={`${cStyles.greenBackground} ${styles.fontStyle}`}>
          Welcome
        </Button>
      </div>
    </Nav>
  );
};

export default Navbar;
