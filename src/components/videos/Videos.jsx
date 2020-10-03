import React, { Component } from "react";

import { AppContext } from "./../../context/AppContextProvider.jsx";
import NavTab from "./../navbar/NavTab";
import ImageContent from "./../imageContent/ImageContent";
import RenderVideos from "./../render/RenderVideos";

class Videos extends Component {
  render(props) {

    const { videos: data } = this.context;
    console.log("data", data);
    return (
      <>
        <ImageContent {...this.props} />
        <NavTab />
        <RenderVideos data={data} />
      </>
    );
  }
}

Videos.contextType = AppContext;

export default Videos;
