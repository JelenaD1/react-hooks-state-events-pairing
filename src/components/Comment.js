import React, { useState } from "react"

const Comment = ({comments}) => {

    const [likes, setLikes] = useState(0)
    const upVotes = () => setLikes(likes +1)
  

    const[downLikes, setDownLikes] = useState(0)

    const downVotes = () => setDownLikes(downLikes +1)

    return (
        <>
        <p>{comments.user}</p>
        <p>{comments.comment}
          <button onClick={upVotes}>👍{likes}</button> 
          <button onClick={downVotes}>👎{downLikes}</button>
        </p>
        </>
    )       

}



export default Comment