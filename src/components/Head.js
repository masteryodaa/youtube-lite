import { IoIosSearch } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import youtube from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_AUTOCOMPLETE_API } from "../utils/constants";
import { AiOutlineSearch } from "react-icons/ai";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setShowSuggestions(false);
    }
  };

  const handleOnFocus = () => {
    if (searchQuery) {
      setShowSuggestions(true);
    }
  };

  const getSuggestions = async (query) => {
    const response = await fetch(YOUTUBE_SEARCH_AUTOCOMPLETE_API + query);
    const data = await response.json();
    console.log(data[0]);
    setSuggestions(data[1]);
    // update cache
    dispatch(cacheResults({ [query]: data[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        setShowSuggestions(true);
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSuggestions(searchQuery);
        }
      }
    }, 200);

    if (!searchQuery) {
      setSuggestions([]);
      setShowSuggestions(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div>
      <div className="flex justify-between items-center text-white px-4 py-2">
        <div className="left flex items-center px-2">
          {/* <CiMenuBurger className="text-2xl text-white" /> */}
          <div className="burger-menu cursor-pointer rounded-full mr-4">
            <svg
              onClick={toggleMenuHandler}
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="logo text-white">
            <Link to="/">
              <img src={youtube} alt="youtube" className="w-[100px]" />
            </Link>
          </div>
        </div>

        <div className="middle flex flex-col text-white w-2/4">
          <div className="">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onFocus={handleOnFocus}
                onBlur={() => setShowSuggestions(false)}
                onChange={handleOnChange}
                placeholder="Search"
                className="search rounded-l-full w-5/6 h-10 px-4 outline outline-1 outline-gray-500 focus:outline-sky-500 "
              />

              <button className="search-btn rounded-r-full px-4 py-2 outline outline-1 outline-gray-500">
                <IoIosSearch className="text-2xl" />
              </button>
            </div>

            {showSuggestions && (
              <div className="suggestion flex flex-wrap text-black fixed mt-2 w-[41%] bg-white rounded-lg">
                <ul className="suggestion-list my-2 w-[-webkit-fill-available]">
                  {suggestions.map((suggestion, id) => (
                    <li
                      key={id}
                      className="suggestion-item font-bold flex items-center py-2 hover:cursor-default hover:bg-gray-200"
                    >
                      <AiOutlineSearch className="mx-4 ml-6" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="right flex items-center text-white">
          <BiUserCircle className="text-4xl mx-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Head;
