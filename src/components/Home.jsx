import React, { Component } from "react";
import styled from "styled-components";
import { AppContext } from "./../context/AppContextProvider";

const Div = styled.div`
  padding: 30px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img`
  border-radius: 3px;
  width: 400px;
  margin: 25px;
`;

class Home extends Component {
  render() {
    const { photos: data } = this.context;
    return (
      <Div>
        <Flex>
          {data.map((item) => (
            <div key={item.id}>
              <Img src={item.src.original} alt={item.id} />
            </div>
          ))}
        </Flex>
      </Div>
    );
  }
}

Home.contextType = AppContext;

export default Home;
