import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import '../Components/ChatComponent.css';
import jwtDecode from 'jwt-decode';

const ENDPOINT = "http://localhost:9091/ws";

function ChatComponent() {

  var username = sessionStorage.getItem('userName');
  

  const [content, setContent] = useState('');
  const [stompClient, setStompClient] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const role = jwtDecode(sessionStorage.getItem("accessToken")).roles;

    function toggleChat() {
    setIsOpen(!isOpen);
    }


  useEffect(() => {
    const socket = SockJS(ENDPOINT);
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/greetings', (data) => {
        console.log(data);
        onMessageReceived(data);
      });
    });
    setStompClient(stompClient);
  }, []);

  function sendMessage() {

    if(role != "admin"){
      const messageSend = {
        username: `Administartor`,
        content,
      };
      stompClient.send('/app/hello', {}, JSON.stringify(messageSend));
    }
    else{
      const messageSend = {
        username: `${username}`,
        content,
      };
      stompClient.send('/app/hello', {}, JSON.stringify(messageSend));
    }


  }

  function onMessageReceived(data) {
    console.log("hello");
    const result = JSON.parse(data.body);
    setChatMessages((oldMessages) => [...oldMessages, result]);
    console.log(chatMessages);
  }




  return (
    <div className="chat-component">
      <div className="chat-section">
        <div className="chat-message"> Chat </div>
        <ul className="chat-messages">
          {chatMessages.map((chat, index) => (

            <li key={index}>
              <div className="chat-message">{chat.username}: {chat.content}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-input">
        <input onChange={(event) => setContent(event.target.value)} />
        <button className="chat-button"onClick={sendMessage}>→</button>
      </div>
    </div>

    // <div>
    //     <button onClick={toggleChat}>Toggle Chat</button>
    //     <div className="chat-toggle-circle"></div>
    //     {isOpen ? (
    //         <div className="chat-conteiner chat-toggle-open">
    //             <div className="chat-conteiner">
    //   <div className="chat-section">
    //     <div className="chat-message"> Chat </div>
    //     <ul className="chat-messages">
    //       {chatMessages.map((chat, index) => (
    //         <li key={index}>
    //           <div>{chat.username}: {chat.content}</div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="chat-input">
    //     <input onChange={(event) => setContent(event.target.value)} />
    //     <button onClick={sendMessage}>♥</button>
    //   </div>
    // </div>
    //         </div>
    //     ) : null}
    // </div>
  );
}

export default ChatComponent;
