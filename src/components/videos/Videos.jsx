import React, { Component } from "react";
import styled from "styled-components";

import { AppContext } from "./../../context/AppContextProvider.jsx";
import NavTab from "./../navbar/NavTab";
import ImageContent from "./../imageContent/ImageContent";

const Div = styled.div`
  padding: 30px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Video = styled.video`
  border-radius: 3px;
  width: 400px;
  height: 400px;
  margin: 25px;
`;

class Videos extends Component {
  render() {
    const { videos: data } = this.context;
    console.log("data", data);
    return (
      <>
        <ImageContent item={data[0]} />
        <NavTab />
        <Div>
          <Flex>
            {data.map((item) => (
              <div key={item.id}>
                <Video controls alt={item.video_files[0].id}>
                  <source
                    src={item.video_files[0].link}
                    type={item.video_files[0].file_type}
                  />
                </Video>
              </div>
            ))}
          </Flex>
        </Div>
      </>
    );
  }
}

Videos.contextType = AppContext;

export default Videos;
