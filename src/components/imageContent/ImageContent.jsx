import React from "react";
import styled from "styled-components";
import styles from "./ImageContent.module.css";
import cStyles from "./../../styles/common.module.css"

const Div = styled.div`
  position: relative;
`;

const Absolute = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
`;

const ImageContent = () => {
  return (
    <Div>
      <img src="wall.jpg" className={styles.imageStyle} alt="wall" />
      <Absolute>
        <div className={`${cStyles.alignCenter} ${styles.bigFont} ${styles.letterSpacing}`}>
        The best free stock photos & videos shared by talented creators.
        </div>
      </Absolute>
    </Div>
  );
};

export default ImageContent;
