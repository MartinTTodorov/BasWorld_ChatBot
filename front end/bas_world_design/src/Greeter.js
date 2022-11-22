import React, {useState,useEffect} from "react";
import axios from "axios";
// import {useEffect} from ".";
import "./Greeter.css";
import ChatBot from 'react-simple-chatbot';



const Greeter = () => {
    // const [message, setMessage] = useState(`Hello ${greeter(name)}, how can I help you today?`);
    const [display, setDisplay] = useState(false);
    const [name, setName] = useState(sessionStorage.getItem("userName"));

    useEffect(() => {
        sessionStorage.getItem("userName")==null ? setName("Guest") : setName(sessionStorage.getItem("userName"))
            
        
      },[]);

     function loggedUser ()  {
        if (name == undefined){
            return "Guest";
        }
        return name;
    }


    // const saveMessage = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:8080/converastion", message).then()
    // }

    // const greet = (e) => {
    //     setMessage(`Hello ${name}, how can I help you today?`)
    // }

    function greeter (username)  {
        if (username == undefined){
            return "";
        }
        return username;
    }


    const addMessageToState = (messages) => {
    };

    function displayChat() {
        setDisplay(!display);
    }


    //const steps = [];

    // for (let index = 0; index < array.length; index++) {
    //     steps.push[
    //         {
    //             id: '0',
    //             message:'Hello! Welcome to Bas World',
    //             trigger: '1',
    //         }
    //     ]
    // }

   

    let steps = [];
        steps=[
            {
              id: '1',
              message: `Hello ${loggedUser()} ! My name is Bassy the chat bot! Here are some frequantly asked questions?`,
              trigger: '2',
            },
            {
              id: '2',
              options: [
                { value: 1, label: 'FAQ 1', trigger: '3' },
                { value: 2, label: 'FAQ 2', trigger: '4' },
                { value: 3, label: 'FAQ 3', trigger: '5' },
                { value: 4, label: 'nito edno', trigger: '6' },
              ],
            },
            
            {
              id: '3',
              message: 'FAQ 1 answer!'
            },
            {
              id: '4',
              message: 'FAQ 2 answer!'
            },
            {
              id: '5',
              message: 'FAQ 3 answer!'
            },{
                id: '6',
                message: 'Here are some topics!',
                trigger: '7'
                  
            }]



           

            
            
            
            
            steps.push(
                {
                    id: '7',
                    options: [
                        // { value: 5, label: 'FAQ 1', trigger: '8' },
                        // { value: 6, label: 'FAQ 2', trigger: '8' },
                        // { value: 7, label: 'FAQ 3', trigger: '8' },
                        // { value: 8, label: 'nito edno', trigger: '8' },
                    ]
                }
                )
                
                for (let index = 1; index < 5; index++) {
                    steps[6].options.push(
                        { value: index, label: 'Topic', trigger: '8' }
                    )
                }
            
            steps.push(
                {
                    id: '8',
                    message: 'this is the end',
                    end: true
                }
            )
        
    

    

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