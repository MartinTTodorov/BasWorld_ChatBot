import React, {useState, useEffect} from "react";
import axios from "axios";
import newMessage from "./NewMessage";
import "./Greeter.css"
import Chatbot from "react-chatbot-kit";


const Greeter = () => {
    const [message, setMessage] = useState("Hello, how can I help you today?");
    const [display, setDisplay] = useState(false);


    // const saveMessage = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:8080/converastion", message).then()
    // }

    const greet = (e) => {
        setMessage("Hello, how can I help you today?")
    }

    const addMessageToState = (messages) => {
    };

    function displayChat() {
        setDisplay(!display);
    }

    return (
        // <div className="chatbot">
        //     <button className="start" onClick={greet}>Start converastion</button>
        //     <div className="convo">{message}</div>
        //     <input placeholder="Type your question here" className="input" type="text"/>
        //     <button className="send" onClick={addMessageToState(message)}>Send</button>
        // </div>
        <>
            <div className="chat-container">
                <section className={display ? "coversation chatbox" : "normal-coversation"}>
                    <section className="chat-window">
                        <article className="msg-container msg-remote">
                            <div className="msg-box">
                                <img className="user-img" id="user-0" src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro" />
                                <div className="flr">
                                    <div className="messages">
                                        <p className="msg" id="msg-0">{message}</p>
                                    </div>
                                    {/*<span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">3 minutes ago</span></span>*/}
                                </div>
                            </div>
                        </article>
                    </section>
                    <newMessage message = {message}/>


                    <section className="chat-input">
                        <input type="text" autocomplete="on"
                               placeholder="Type a message"/>
                        <button onClick={newMessage('heloooo')}>
                            <svg viewBox="0 0 24 24">
                                <path fill="rgba(0,0,0,.38)"
                                      d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z"/>
                            </svg>
                        </button>
                    </section>
                </section>
                <button className="popButton" onClick={displayChat}>{display ? "Close" : "Start a chat"}</button>
            </div>
        </>

    );


}

export default Greeter;