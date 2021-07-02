import React, { useState } from "react"



const VideoLikes = () => {



    const [upvotes, setUpvotes] = useState(9210)
    console.log(upvotes)
    const [downvotes, setDownVotes] = useState(185)

    const handleLikes = () => {
        setUpvotes(upvotes +1)
    } 

    const downVotes = () => {
        setDownVotes(downvotes +1)
    }
    return (
     <>

    <button onClick={handleLikes}>{upvotes}👍 </button>
    <button onClick={downVotes}>{downvotes}👎</button>

    </>

    )
    
}

export default VideoLikes