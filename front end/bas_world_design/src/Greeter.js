import React, {useState, useEffect} from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {useEffect} from ".";
import "./Greeter.css";
import ChatBot from 'react-simple-chatbot';
import ChatComponent from "./Components/ChatComponent";


function Greeter () {
    const [display, setDisplay] = useState(false);
    const [name, setName] = useState(sessionStorage.getItem("userName"));
    const [userMessage, setUserMessage] = useState("");
    const [botResponse, setResponse] = useState("");
    const [qTopics, setQTopics] = useState([]);

    let input = "";
    let topics = [];

    function setTopics(topic1, topic2){
        topics = [topic1, topic2];
    }

    useEffect(() => {
        sessionStorage.getItem("userName") == null ? setName("Guest") : setName(sessionStorage.getItem("userName"))

        getTopics()
    }, []);

    function loggedUser() {
        if (name == undefined) {
            return "Guest";
        }
        return name;
    }

    function getTopics(){
        axios.get("http://localhost:9091/faq/topics").then(res => setTopics([1, 2]))
            console.log(topics)
    }



    function displayChat() {
        setDisplay(!display);
    }




    function Tests(input1) {

        input = input1;
        console.log(input);
        //return {input};
    }


    var idNumber = 1;
    var idNextStep = idNumber + 1;


    let steps = [];
    steps = [
        {
            id: 1,
            message: `Hello ${loggedUser()} ! My name is Bassy the chat bot! Here are some topics your question might be related to.`,
            //trigger: 2,
            //end: true
        },
        // {
        //     id: 2,
        //     user: true,
        //     trigger: '3',
        // },
        // {
        //     id: '3',
        //     message: 'hello',
        //     trigger: '4',
        // },
        // {
        //     id: '4',
        //     user: true,
        //     validator: (value) => {
        //         Tests(value);
        //         return true;
        //     },
        //     trigger: '5',
        // },
        // {
        //     id: '5',
        //     user: true,
        //     asMessage: true,
        //     end: true
        // }
        // {
        //   id: '2',
        //   options: [
        //     { value: 1, label: 'FAQ 1', trigger: '3' },
        //     { value: 2, label: 'FAQ 2', trigger: '4' },
        //     { value: 3, label: 'FAQ 3', trigger: '5' },
        //     { value: 4, label: 'Neither', trigger: '6' },
        //   ],
        // },

        // {
        //   id: '3',
        //   message: 'FAQ 1 answer!',
        //   trigger: '8'
        // },
        // {
        //   id: '4',
        //   message: 'FAQ 2 answer!',
        //   trigger: '8'
        // },
        // {
        //   id: '5',
        //   message: 'FAQ 3 answer!',
        //     trigger: '8'
        // },
        // {
        //     id: '6',
        //     message: 'Please choose a topic!',
        //     trigger: '7'

        // },
        // // {
        // //     id: 'extra',
        // //     options:[
        // //         { value: 1, label: 'Yes', trigger: '2' },
        // //         { value: 2, label: 'No', trigger: '10' },
        // //     ],
        // // }
    ]

    // steps.push(
    //     {
    //         id: 2,
    //
    //     }
    // )


    // steps.push(
    //     {
    //         id: '7',
    //         options: [

    //         ]
    //     }
    //     )

    //     for (let index = 1; index < 5; index++) {
    //         steps[6].options.push(
    //             { value: index, label: 'Topic ' + index, trigger: '8' }
    //         )
    //     }

    // steps.push(
    //     {
    //         id: '8',
    //         message: 'Do you have any more questions?',
    //         trigger: '9'
    //     },
    //     {
    //         id: '9',
    //         options:[
    //             { value: 1, label: 'Yes', trigger: '6' },
    //             { value: 2, label: 'No', trigger: '10' },
    //         ],
    //     },
    //     {
    //         id: '10',
    //         message: 'Thank you for reaching out to Bassy! Have a great day!',
    //         end: true
    //     }
    // )


    return (

        <>
            <div className="chat-container">
                <segment className={display ? "coversation chatbox" : "normal-coversation"}>
                    <ChatBot steps={steps} cache={true}/>

                </segment>
                {/* <button className="popButton" onClick={displayChat}>{display ? "Close" : "Start a chat"}</button> */}
                <ChatComponent/>
            </div>
        </>

    );


}

export default Greeter;