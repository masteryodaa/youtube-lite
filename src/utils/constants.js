const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_DATA_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_AUTOCOMPLETE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENT_THREADS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?order=relevance&part=snippet&maxResults=50&textFormat=plainText&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const YOUTUBE_SEARCH_RESULTS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const CHANNEL_INFO =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const YOUTUBE_VIDEO_INFO =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const LIVE_CHAT_COUNT = 50;
