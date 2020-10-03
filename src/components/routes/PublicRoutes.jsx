import React from "react";

import { Route, Switch } from "react-router-dom";

import HomePage from "./../../pages/HomePage";
import DiscoverPage from "./../../pages/DiscoverPage";
import VideosPage from "./../../pages/VideosPage";
import SearchPage from "./../../pages/SearchPage";
import SearchVideosPage from "./../../pages/SearchVideosPage";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <HomePage {...props} />} />
      <Route path="/pages/discover" render={() => <DiscoverPage />} />
      <Route path="/pages/videos" render={(props) => <VideosPage {...props} />} />
      <Route
        path="/search/:query"
        render={(props) => <SearchPage {...props} />}
      />
      <Route
        path="/search/videos/:query"
        render={(props) => <SearchVideosPage />}
      />
    </Switch>
  );
};

export default PublicRoutes;
