import React from "react";
import styled from "styled-components";

import Search from "./searchBox/SearchBox";
import styles from "./ImageContent.module.css";
import cStyles from "./../../styles/common.module.css";

const Div = styled.div`
`;

const Absolute = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
`;

const ImageContent = (props) => {
  const { picture } = props;
  return (
    <>
      <Div>
        {picture ? (
          <img src="wall.jpg" className={styles.imageStyle} alt="wall" />
        ) : (
          <video autoPlay>
            <source src="/videos/waves.mp4" type="video/mp4" />
          </video>
        )}

        <Absolute>
          <div
            className={`${cStyles.alignCenter} ${styles.bigFont} ${styles.letterSpacing}`}
          >
            The best free stock photos & videos shared by talented creators.
          </div>
        <Search {...props} />
        </Absolute>
      </Div>
    </>
  );
};

export default ImageContent;
