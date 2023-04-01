import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENT_THREADS_API } from "../utils/constants";
import Comment from "./Comment";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [videoId] = useSearchParams();

  useEffect(() => {
    fetchComments();
  }, []);

  //   useEffect(() => {
  //     console.log("comments: ", comments);
  //   }, [comments]);

  const fetchComments = async () => {
    console.log("url: ", YOUTUBE_COMMENT_THREADS_API + videoId.get("v"));

    const response = await fetch(
      YOUTUBE_COMMENT_THREADS_API + videoId.get("v")
    );
    const data = await response.json();
    setComments(data.items);
    console.log("comments: ", data);
  };

  return (
    <div className="text-white ml-6">
      {comments && <h1 className="text-2xl font-bold ml-6 my-10">Comments</h1>}

      {comments &&
        comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentSection;
