const Comment = ({ comment }) => {
  return (
    <div className="flex my-5">
      <div className="photo px-4 ">
        <img
          className="rounded-full object-cover"
          alt="profile"
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        />
      </div>
      <div className="comment">
        <h3 className="font-bold pb-2">{comment.snippet.topLevelComment.snippet.authorDisplayName}</h3>
        <p className="text-gray-200">{comment.snippet.topLevelComment.snippet.textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
