import React, { Component } from "react";
import { AppContext } from "../../context/AppContextProvider";
import NavTab from "../navbar/NavTab";
import ImageContent from "../imageContent/ImageContent";
import RenderPhotos from "../render/RenderPhotos";


class Home extends Component {
  render() {
    const { photos: data } = this.context;

    return (
      <>
      <ImageContent picture {...this.props} />
      <NavTab />
      <RenderPhotos data={data} />
      </>
    );
  }
}

Home.contextType = AppContext;

export default Home;
