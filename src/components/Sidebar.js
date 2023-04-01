import { AiFillHome } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { CgMusicNote } from "react-icons/cg";
import { GiClapperboard } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { BsBroadcast } from "react-icons/bs";
import { RiTrophyLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="sidebar-items w-[250px] text-white text-lg font-medium p-5">
      <ul>
        <Link to="/">
          <li>
            <AiFillHome className="mr-2" /> Home
          </li>
        </Link>
        <li>
          <FaGooglePlay className="mr-2" />
          Shorts
        </li>
        <li>
          <MdSubscriptions className="mr-2" />
          Subscriptions
        </li>
      </ul>

      <p className="mt-6">Explore</p>
      <ul>
        <li>
          <BsFire className="mr-2" />
          Trending
        </li>
        <li>
          <CgMusicNote className="mr-2" />
          Music
        </li>
        <li>
          <SiYoutubegaming className="mr-2" />
          Gaming
        </li>
        <li>
          <RiTrophyLine className="mr-2" />
          Sports
        </li>
        <li>
          <GiClapperboard className="mr-2" />
          Movies
        </li>
        <li>
          <BiNews className="mr-2" />
          News
        </li>
        <li>
          <BsBroadcast className="mr-2" />
          Live
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
