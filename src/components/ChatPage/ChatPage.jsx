import React from 'react';
import {firestore} from '../../config/firebase'
import {collection, doc, getDocs, query, orderBy, limit} from "firebase/firestore";
import { useState } from 'react';
import { useEffect } from 'react';

import ChatMessage from './ChatMessage';

function ChatPage() {

    const [messages, setMessages] = useState([])

    //fetchMessages is an async function that retrieves the docs (messages) from the firestore (firebase database)
    //and then parses the data down into an array 
    //which is then set into the "messages" react state
    const fetchMessages = async () => {
       
        await getDocs(collection(firestore, "messages"))
            .then((querySnapshot)=>{            
                console.log(querySnapshot.docs[0].data());   
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setMessages(newData);                
                console.log(messages);
            })
       
    }

    useEffect(()=>{
        fetchMessages();
    }, [])

    return(
        <div>
            <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>
        </div>
        
    )
}

export default ChatPage;