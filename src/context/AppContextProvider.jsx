import React, { Component } from "react";

import axios from "axios";

export const AppContext = React.createContext();

class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      videos:[]
    };
  }

  getPhotos = async () => {
    try {
      const response = await axios.get(
        "https://api.pexels.com/v1/search?query=animals&per_page=75",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_PEXELS_KEY,
          },
        }
      );

      this.setState({
        photos: response.data.photos,
      });
      console.log("response get photos", response);
    } catch (err) {
      console.log("err get photos", err);
    }
  };

  getVideos = async () => {
    try {
      const response = await axios.get(
        "https://api.pexels.com/videos/search?query=animals&per_page=75",
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
      console.log("response get videos", response);
    } catch (err) {
      console.log("err get videos", err);
    }
  };

  componentDidMount() {
    // this.getPhotos();
    // this.getVideos();
  }

  render() {
    const { photos, videos } = this.state;
    return (
      <AppContext.Provider value={{ photos, videos }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
