import useDate from "../utils/useDate";
import useViews from "../utils/useViews";

const VideoCard = (props) => {
  const snippet = props?.info?.snippet;
  // console.log('snippet',snippet);
  const title = snippet?.title;
  const channelTitle = snippet?.channelTitle;
  // const description = snippet?.description;
  const publishedAt = snippet?.publishedAt;
  const img = snippet?.thumbnails?.medium?.url;
  const views = props?.info?.statistics?.viewCount;

  const publishedAtDate = useDate(publishedAt);
  const viewsCount = useViews(views);

  return (
    <div>
      <div className="mx-5 mb-5">
        <div className="w-[350px]">
          <img
            className="rounded-xl hover:rounded-none w-[-webkit-fill-available]"
            src={img}
            alt={title}
          />
          <h3 className="font-bold mt-1 text-ellipsis overflow-hidden">
            {title}
          </h3>
          <p className="text-gray-400">{channelTitle}</p>
          <div className="flex">
            <p className="text-gray-400"> {viewsCount}</p>
            <p className="text-gray-400 mx-1">•</p>
            <p className="text-gray-400">{publishedAtDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
