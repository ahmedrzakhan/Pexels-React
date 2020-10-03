import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import styles from "./SearchBox.module.css";
import cStyles from "./../../../styles/common.module.css";

const Box = styled.div`
  background: #fff;
  height: 25px;
  width: 90%;
  padding: 15px;
  border: none;
  border-radius: 7px;
  margin: 15px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 17px;
  outline: none;
`;

class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleKeyDown = (e) => {
    const { value } = this.state;
    const { history } = this.props;
    if (e.key === "Enter") {
        history.push(`/search/videos/${value}`);
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div className={cStyles.alignCenter}>
        <Box>
          <Input
            placeholder="Search for free photos and videos"
            name="value"
            value={value}
            onChange={this.handelChange}
            onKeyDown={this.handleKeyDown}
          />
          <Link to={`/search/${value}`} key={`/search/${value}`}>
            <FiSearch className={styles.iconStyle} />
          </Link>
        </Box>
      </div>
    );
  }
}

export default SearchVideo;
