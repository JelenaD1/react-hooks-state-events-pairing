import React from "react"
import video from "../data/video"

const VideoViews = () => {
    return (
        <h2>{video.views} Views| Uploaded {video.createdAt}</h2>
    )



}



export default VideoViews