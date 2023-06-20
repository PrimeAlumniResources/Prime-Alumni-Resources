import auth from "../../config/firebase";

function ChatMessage(props) {
    const { text, uid, username } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <p>{username}: {text}</p>
      </div>
    </>)
  }

export default ChatMessage;