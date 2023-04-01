import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div className="">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Main;
