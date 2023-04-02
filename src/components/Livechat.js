import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LivechatMessage from "./LivechatMessage";
import { addMessage } from "../utils/chatSlice";
import { IoSendSharp } from "react-icons/io5";
// import useQuote from "../utils/useQuote";

const Livechat = () => {
  const dispatch = useDispatch();

  const chats = useSelector((store) => store.chat.messages);

  //   const quote = useQuote();

  const getQuote = async () => {
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const data = await response.json();
    dispatch(addMessage(data[0]));
    // console.log(chats.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getQuote();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const chatBox = document.querySelector(".livechat");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [chats]);

  const [msg, setMsg] = useState("");

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(addMessage({ author: "Ujjwal Kumar", quote: msg }));
    setMsg("");
  };

  return (
    <div className="livechat h-72vh sm:h-[72vh]  md:h-[72vh] lg:h-[72vh] xl:h-[72vh] 2xl:h-[72vh]">
      <div className="font-bold text-xl m-4">Livechat</div>
      <div className="h-[-webkit-fill-available] pb-[50px]">
        <div className="flex flex-col-reverse h-full overflow-y-scroll">
          {/* <LivechatMessage name="John Doe" msg="Hello World" /> */}

          {chats?.map((chat, id) => (
            <LivechatMessage key={id} name={chat.author} msg={chat.quote} />
          ))}
        </div>
        <div className="newchat flex px-5">
          <input
            type="text"
            className="newchat-input"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleOnClick(e);
              }
            }}
          />
          <button className="sendbtn pl-5" onClick={handleOnClick}>
            <IoSendSharp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Livechat;
