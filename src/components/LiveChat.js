import React, {useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utilis/chatSlice';
import { LIVE_CHAT, LIVE_MESSAGES } from '../utilis/constant';
import { useSearchParams } from 'react-router-dom';

const LiveChat = () => {
    const [searchParam] = useSearchParams()
    const [messages, setMessages] = useState([]);
    const [liveChatId, setLiveChatId] = useState(null);


    useEffect(() => {    
        const fetchLiveChatId = async () => {
        const url  = LIVE_CHAT.replace("VIDEO_ID", searchParam.get("v"));
        const data = await fetch(url)
        const json = await data.json();
        const liveChatId = json.items[0]?.liveStreamingDetails?.activeLiveChatId;
                setLiveChatId(liveChatId);
            };
        fetchLiveChatId();
    }, []);
    useEffect(() => {
        if (!liveChatId) return;

        const fetchMessages = async () => {
            const chaturl = LIVE_MESSAGES.replace("LIVECHAT_ID",liveChatId);
            const chatData = await fetch(chaturl)
            const chatjson= await chatData.json();
            const chatMessages = chatjson.items;
            setMessages((prevMessages) => {
                const updatedMessages =   [...prevMessages, ...chatMessages]
                // Keep only the latest 50 messages
               // return updatedMessages.length > 10 ? updatedMessages.slice(10) : updatedMessages;
               return updatedMessages.slice(-50);
            } );
        };

        const intervalId = setInterval(fetchMessages, 1000); // Fetch messages every 5 seconds
        return () => clearInterval(intervalId);
    }, [liveChatId]);

  return (
    <div className='h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
      <div>
      { messages && messages.map((c, i) => 
               <ChatMessage key={i} 
               profileImageUrl={c.authorDetails?.profileImageUrl}
               name={c.authorDetails?.displayName} 
               message={c.snippet?.displayMessage} />
        )}
      </div>
      <div className='w-full p-2 ml-2 border border-black'>
        <input className="w-64" type="text" />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
      </div>
   
    </div>
  )
}

export default LiveChat
