import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentSection from "./CommentSection";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [videoId] = useSearchParams();
  // console.log(videoId.get("v"));

  return (
    <div className="text-white">
      {/* <h1>{videoId.get("v")}</h1> */}

      <div className="video-container flex ml-12 mt-7 ">
        <iframe
          className="rounded-2xl w-[62vw] h-[72vh] sm:w-[62vw] sm:h-[72vh] md:w-[62vw] md:h-[72vh] lg:w-[62vw] lg:h-[72vh] xl:w-[62vw] xl:h-[72vh] 2xl:w-[62vw] 2xl:h-[72vh]"
          // width="940"
          // height="530"
          src={
            "https://www.youtube.com/embed/" + videoId.get("v") + "?autoplay=1"
          }
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="comments w-[62vw] h-[72vh] sm:w-[62vw] sm:h-[72vh] md:w-[62vw] md:h-[72vh] lg:w-[62vw] lg:h-[72vh] xl:w-[62vw] xl:h-[72vh] 2xl:w-[62vw] 2xl:h-[72vh]">
        <CommentSection />
      </div>
    </div>
  );
};

export default WatchPage;
