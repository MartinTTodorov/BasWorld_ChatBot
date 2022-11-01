import React, {useState} from "react";
import axios from "axios";
import {useEffect} from ".";
import "./Greeter.css";
import ChatBot from 'react-simple-chatbot';

const Greeter = () => {
    const [message, setMessage] = useState("");
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

    function displayChat(){
        setDisplay(!display);
    }


    const steps = [
        {
            id: '0',
            message:'Hello! Welcome to Bas World',
            trigger: '1',
        },
        {
            id: '1',
            user: true,
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3'
        },
        {
            id: '3',
            user: true,
            trigger: '4'
        },
        {
            id: '4',
            user: true,
            trigger: '5'
        },
        {
            id: '5',
            user: true,
            trigger: '6'
        },
        {
            id: '6',
            user: true,
            trigger: '7'
        },
        {
            id: '7',
            user: true,
            end: true
        }
    ];
    

    return (
        // <div className="chatbot">
        //     <button className="start" onClick={greet}>Start converastion</button>
        //     <div className="convo">{message}</div>
        //     <input placeholder="Type your question here" className="input" type="text"/>
        //     <button className="send" onClick={addMessageToState(message)}>Send</button>
        // </div>
        <>
            <div className="chat-container">
                <segment className={display ? "coversation chatbox" : "normal-coversation"}>
                    <ChatBot steps={steps}/>
                </segment>
                <button className="popButton" onClick={displayChat}>{display ? "Close" :"Start a chat"}</button>
            </div>
        </>
    );


}

export default Greeter;