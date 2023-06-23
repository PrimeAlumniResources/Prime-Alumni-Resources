import auth from "../../config/firebase";

function ChatMessage(props) {
  const { timestamp, message, uid, username } = props.message;
  console.log(timestamp);
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className="mb-4 mx-12 mt-4 w-fit bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-green-500">
      <label for="success" className="block mb-2 text-sm font-medium ">
        {username}
      </label>

      <div className={`message ${messageClass}`}>
        <p className="text-white ml-4 mt-2">{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
