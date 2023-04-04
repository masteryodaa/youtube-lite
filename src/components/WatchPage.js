import { useEffect, lazy, Suspense, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_VIDEO_INFO } from "../utils/constants";
import Livechat from "./Livechat";
// import CommentSection from "./CommentSection";
const CommentSection = lazy(() => import("./CommentSection"));

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [videoId] = useSearchParams();
  const [videoinfo, setVideoinfo] = useState({});

  useEffect(() => {
    fetch(YOUTUBE_VIDEO_INFO + videoId.get("v")).then((response) => {
      response.json().then((data) => {
        setVideoinfo(data.items[0]);
        document.title = data.items[0].snippet.title;
      });
    });
  }, [videoId]);

  return (
    <div className="text-white w-full">
      <div className="video-container">
        <iframe
          className="rounded-2xl w-[62vw] h-[72vh] sm:w-[62vw] sm:h-[72vh] md:w-[62vw] md:h-[72vh] lg:w-[62vw] lg:h-[72vh] xl:w-[62vw] xl:h-[72vh] 2xl:w-[62vw] 2xl:h-[72vh] md:flex md:items-center md:justify-center mb-10"
          // width="940"
          // height="530"
          src={
            "https://www.youtube.com/embed/" + videoId.get("v") //+ "?autoplay=1"
          }
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="livechat-box text-white w-[450px] ml-5">
          <Livechat />
        </div>
      </div>

      <div className="comments w-[62vw] h-[72vh] sm:w-[62vw] sm:h-[72vh] md:w-[62vw] md:h-[72vh] lg:w-[62vw] lg:h-[72vh] xl:w-[62vw] xl:h-[72vh] 2xl:w-[62vw] 2xl:h-[72vh]">
        {/* <CommentSection /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <CommentSection />
        </Suspense>
      </div>
    </div>
  );
};

export default WatchPage;
