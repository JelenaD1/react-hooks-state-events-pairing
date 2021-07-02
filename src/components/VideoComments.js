import React, {useState} from "react"
import video from "../data/video"

const VideoComments = () => {

    const getElements = video.comments.map((object) => {
        return (
            <>
            <p>{object.user}</p>
            <p>{object.comment}</p>
            </>
        )    
    })



    //When the user clicks the "Hide Comments" button, 
    //the comments should be removed from the page,
    // and the button text should change to "Show Comments".
    // When the button is clicked again, it should toggle back to showing the comments.


    const  [isHidden, setIsHidden] = useState(true)

    const handleClick = () => {
        console.log("hello")
        setIsHidden (!isHidden)
        
        
        
     }

    return (
    <>
    <br/>

    <button onClick={handleClick}>{isHidden ? "Hide Comments" : "Show Comments"}</button>  
    <hr></hr> 
    <h3>2 Comments</h3>
    {isHidden ? <h4>{getElements}</h4> : null}
    
   

    </>
    

    )

}



export default VideoComments