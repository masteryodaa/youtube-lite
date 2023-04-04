import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS } from "../utils/constants";
import SearchItem from "./SearchItem";

const Search = () => {
  const [search_query] = useSearchParams();

  //   change title of page to search query
  useEffect(() => {
    document.title = search_query.get("search_query");
  }, [search_query]);

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(YOUTUBE_SEARCH_RESULTS + search_query.get("search_query")).then(
      (response) => {
        response.json().then((data) => {
          //   console.log(data.items[0]);
          setResults(data.items);
        });
      }
    );
  }, [search_query]);

  return (
    <div className="text-white">
      {results?.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id.videoId} key={item.id.videoId}>
            <SearchItem item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default Search;
