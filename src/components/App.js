import video from "../data/video.js";
import Header from "./Header"
import VideoViews from "./VideoViews.js"
import VideoLikes from "./VideoLikes"
import VideoComments from "./VideoComments"


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />

      <Header />
      <VideoViews />
      <VideoLikes />
      <VideoComments
      />

    
    </div>
  );
}

export default App;
