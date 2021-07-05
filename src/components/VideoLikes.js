import React, { useState } from "react"



const VideoLikes = ({upVotess, downVotess}) => {



    const [upvotes, setUpvotes] = useState(upVotess)
    console.log(upvotes)
    const [downvotes, setDownVotes] = useState(downVotess)

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