import React, { Component } from "react";
import axios from "axios";

import RenderVideos from "./../render/RenderVideos";


class SearchVideos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

  getVideos = async (query) => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/videos/search?query=${query}&per_page=75`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_PEXELS_KEY,
          },
        }
      );

      this.setState({
        videos: response.data.videos,
      });
      console.log("response get videos by query", response);
    } catch (err) {
      console.log("err get videos by query", err);
    }
  };

  componentDidMount() {
    const { match } = this.props;
    const query = match.params.query;
    this.getVideos(query);
  }

  render() {
      const { videos: data } = this.state
    return (
        <RenderVideos data={data} />
    )
  }
}

export default SearchVideos;
