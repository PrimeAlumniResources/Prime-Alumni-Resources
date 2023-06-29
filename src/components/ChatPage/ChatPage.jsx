import React from "react";
import auth, { firestore } from "../../config/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";

function ChatPage() {

  const dispatch = useDispatch()

  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState([]);

  const user = useSelector(store => store.user);
  const profile = useSelector(store => store.profile)
  const fb_user = auth.currentUser;

  const fetchMessages = async () => {
    const messagesRef = collection(firestore, "messages");
    const q = query(messagesRef, orderBy('timestamp'), limit(50));

    const querySnapshot = await getDocs(q).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setMessages(newData);
      console.log(messages);
    })
  };

  const postMessage = async () => {
    event.preventDefault();

    const docRef = await addDoc(collection(firestore, "messages"), {
      message: messageInput,
      timestamp: serverTimestamp(),
      uid: fb_user.uid,
      username: profile.username
    });

    setMessageInput('')
    fetchMessages();
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE' });
  }, []);

  useEffect(() => {
    fetchMessages();
  }, []);



  return (
    <div className=" bg-gray-50 pt-10 h-screen ">
      <div className=" h-3/4 w-10/12  ml-16 border border-gray-200 rounded-lg shadow shadow-2xl opacity-90 shadow-emerald-100 bg-zinc-100 pt-10 overflow-auto">
        {messages && messages.map((msg) =>

          <ChatMessage key={msg.id} message={msg} />)}
      </div>

      <form className="mt-10" onSubmit={postMessage}>
        <label for="chat" className=" sr-only">
          Your message
        </label>
        <div className="flex mx-8 items-center px-3 py-2 rounded-lg shadow-3xl focus:ring-emerald-300  shadow-emerald-300 bg-white">

          <textarea
            id="chat"
            rows="1"
            className=" shadow-1xl opacity-90 shadow-emerald-200 bg-white block m-2 p-2.5 w-full text-sm focus:ring-emerald-300 text-emerald-400 focus:border-emerald-300 bg-white rounded-lg   focus:ring-emerald-400   dark:placeholder-gray-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-300 dark:text-emerald-300 "
            placeholder="Your message..."
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-emerald-300 rounded-full cursor-pointer hover:bg-emerald-300 dark:text-emerald-300 "
            
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatPage;
