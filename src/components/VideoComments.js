import React, {useState} from "react"
import video from "../data/video"
import Comment from "./Comment"

const VideoComments = () => {

    const[addComments, setAddComments] = useState(video.comments)

    const handleRemove = (id) => {
        const newArray = addComments.filter((comment) => comment.id !== id)
        setAddComments(newArray)
    }

   
    const getElements = addComments.map((object) => {
        return (
            <>
            <Comment key={object.id} comments={object} />
            <button  onClick={() => handleRemove(object.id)}>Remove Comment</button>
            </>
        )    
    })

    const handleChange = (e) => {
        const userInput = e.target.value

     const newArrayList = video.comments.filter((comment) => userInput === comment.user)
     if (userInput !== "All") {setAddComments(newArrayList)} else {
         setAddComments(video.comments)
     }

    }

    

    const displayComments = (event) => {
        event.preventDefault()
        const inputValue = event.target.searchbar.value
        const filter = video.comments.filter((comment) => inputValue === comment.user)
        setAddComments(filter)
        console.log(addComments)
        if (filter.length === 0) {
            window.alert(`${inputValue} is not available`)
            setAddComments(addComments)
        
        }
    }


        



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
    <>
        <form onSubmit={displayComments}>
        <label htmlFor="search"></label>
        <input 
          type="text"
          name="searchbar"
          placeholder="Search by username"
        />
        <button type="submit">Search</button>
        </form>

        <select onChange={handleChange}> 
            <option>All</option>
            {video.comments.map((comment) => 
            <option>{comment.user}</option>)}
                
                
            
        </select>
      
        </>
    {isHidden ? <h4>{getElements}</h4> : null}
    </>
    )

}



export default VideoComments