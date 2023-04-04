import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_DATA_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    document.title = "YouTube";
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_DATA_API);
    const data = await response.json();
    // console.log(data.items);
    setVideos(data.items);
  };

  return (
    <div className="text-white flex flex-wrap my-5 ml-5 px-15">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
