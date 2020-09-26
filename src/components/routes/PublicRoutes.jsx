import React from 'react'

import { Route, Switch } from "react-router-dom";

import HomePage from "./../../pages/HomePage";
import DiscoverPage from "./../../pages/DiscoverPage";
import VideosPage from "./../../pages/VideosPage";

const PublicRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/pages/discover" render={() => <DiscoverPage />} />
            <Route path="/pages/videos" render={() => <VideosPage />} />

        </Switch>
    )
}

export default PublicRoutes