import { useEffect, useState } from "react";
import { CHANNEL_INFO } from "../utils/constants";
import useDate from "../utils/useDate";

const SearchItem = (props) => {
  const item = props?.item;
  const snippet = item?.snippet;
  const title = snippet?.title;
  const channelTitle = snippet?.channelTitle;
  const description = snippet?.description;
  const publishedAt = snippet?.publishedAt;
  const thumbnail = snippet?.thumbnails?.medium?.url;

  const viewsCount = useDate(publishedAt);

  const [channelInfo, setChannelInfo] = useState({});
  const [channelThumbnail, setChannelThumbnail] = useState("");

  useEffect(() => {
    fetch(CHANNEL_INFO + item?.snippet?.channelId).then((response) => {
      response.json().then((data) => {
        setChannelInfo(data.items[0]);
        setChannelThumbnail(data.items[0].snippet.thumbnails.default.url);
      });
    });
  }, [item]);

  return (
    item && (
      <div className="my-10 ml-5">
        <div className="searchcard flex">
          <div className="searchcard__thumbnail">
            <img
              src={thumbnail}
              alt="thumbnail"
              className="w-[360px] h-[201px] mr-4 rounded-xl"
            />
          </div>
          <div className="searchcard__info ">
            <div className="searchcard__info__title">
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="text-gray-400 text-sm">14M views • {viewsCount}</p>
              <div className="creator flex items-center my-3">
                <img
                  src={channelThumbnail}
                  alt="creator"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-gray-400 text-sm">{channelTitle}</p>
              </div>
              <h2 className="text-gray-400 text-sm">{description}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SearchItem;
