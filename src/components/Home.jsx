import React, { Component } from "react";
import styled from "styled-components";
import { AppContext } from "./../context/AppContextProvider";
import NavTab from "./navbar/NavTab";
import ImageContent from "./imageContent/ImageContent";

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
      <>
      <ImageContent />
      {/* <HomeImage src="wall.jpg" alt="wall" /> */}
      <NavTab />
      <Div>
        <Flex>
          {data.map((item) => (
            <div key={item.id}>
              <Img src={item.src.original} alt={item.id} />
            </div>
          ))}
        </Flex>
      </Div>
      </>
    );
  }
}

Home.contextType = AppContext;

export default Home;
