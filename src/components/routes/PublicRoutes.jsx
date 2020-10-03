import React from 'react'

import { Route, Switch } from "react-router-dom";

import HomePage from "./../../pages/HomePage";
import DiscoverPage from "./../../pages/DiscoverPage";
import VideosPage from "./../../pages/VideosPage";
import SearchPage from "./../../pages/SearchPage";

const PublicRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} />} />
            <Route path="/pages/discover" render={() => <DiscoverPage />} />
            <Route path="/pages/videos" render={() => <VideosPage />} />
            <Route path="/search/:query" render={() => <SearchPage />} />
        </Switch>
    )
}

export default PublicRoutes