import { IoIosSearch } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import youtube from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div>
      <div className="flex justify-between items-center text-white px-4 py-2">
        <div className="left flex items-center px-2">
          {/* <CiMenuBurger className="text-2xl text-white" /> */}
          <div className="burger-menu cursor-pointer rounded-full ">
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
            <img
              src={youtube}
              alt="youtube"
              className="h-6 ml-6 cursor-pointer"
            />
          </div>
        </div>

        <div className="middle flex text-white w-2/4">
          <input
            type="text"
            placeholder="Search"
            className="search rounded-l-full w-5/6 h-10 px-4 outline outline-1 outline-gray-500 focus:outline-sky-500 "
          />

          <button className="search-btn rounded-r-full px-4 py-2 outline outline-1 outline-gray-500">
            <IoIosSearch className="text-2xl" />
          </button>
        </div>

        <div className="right flex items-center text-white">
          <BiUserCircle className="text-4xl mx-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Head;
