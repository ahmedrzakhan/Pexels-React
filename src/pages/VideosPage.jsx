import React from 'react'

import Videos from "./../components/videos/Videos";

const VideoPage = (props) => {
    return (
        <div>
            <Videos {...props} />
        </div>
    )
}

export default VideoPage