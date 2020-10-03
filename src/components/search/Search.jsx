import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  getPhotos = async (query) => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=75`,
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
      console.log("response get photos by query", response);
    } catch (err) {
      console.log("err get photos by query", err);
    }
  };

  componentDidMount() {
    console.log(this.props)
    const { match } = this.props;
    const query = match.params.query;
    // this.getPhotos(query);
  }

  render() {
    console.log("t", this.state);
    return <div>Search</div>;
  }
}

export default Search;
