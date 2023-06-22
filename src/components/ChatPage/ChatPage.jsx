import React from "react";
import auth, { firestore } from "../../config/firebase";
import {
  collection,
  docRef,
  getDocs,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState([]);

  const user = useSelector(store => store.user);
  const fb_user = auth.currentUser;

  console.log("AUTH:", fb_user);
  
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
        username: user.username
      });

    setMessageInput('')
    fetchMessages();
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="h-[85vh] m-16 mt-12">
      <div className="h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-auto">
        {messages && messages.map((msg) => 
       
        <ChatMessage key={msg.id} message={msg} />)}
      </div>

      <form className="mt-4">
        <label for="chat" className="sr-only">
          Your message
        </label>
        <div className="flex mx-8 items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800">
         
          <textarea
            id="chat"
            rows="1"
            className="block m-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            onClick={postMessage}
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
