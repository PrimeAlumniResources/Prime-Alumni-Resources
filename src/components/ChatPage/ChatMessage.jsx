import auth from "../../config/firebase";



function ChatMessage(props) {



  

  

  const { timestamp, message, uid, username } = props.message;
  console.log(timestamp);
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

 

   

  return (
    <div className="flex" >
      <div class="flex-shrink-0">
        <img class=" mt-8 ml-9 w-8 h-8 rounded-full" src="https://cdn3.iconfinder.com/data/icons/messenger-flat/128/07_Profile-512.png" alt="Neil image" />
      </div>
      <div className="mb-4 mx-12 mt-4 ml-2 w-fit bg-green-50 border-green-500 shadow-md shadow-slate-600 text-emerald-400 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 shadow-1xl opacity-90 shadow-emerald-100 bg-zinc-100">

        <label for="success" className="block mb-2 text-sm text-emerald-700 font-medium ">
          {username}
        </label>

        <div className={`message ${messageClass}`}>
          <p className="text-emerald-700  ml-2 mt-2">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
