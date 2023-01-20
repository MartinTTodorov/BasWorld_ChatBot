import React, {useState, useEffect} from "react";
import axios from "axios";
import ChatBot from "react-simple-chatbot";
import StarRating from "./StarRating";
import StartLiveChatComponent from './Components/StartLiveChatComponent.js';

export default function Greeter2() {

    const [display, setDisplay] = useState(false);
    const [name, setName] = useState(sessionStorage.getItem("userName"));
    const [topics, setTopics] = useState(['Account', 'Order']);
    // this.state = {
    //     topic: ''
    // };

    
    


    //const [answer, setAnswer] = useState("");


    let input = "";
    let answer = "";
    //let topics = [];

    // function setTopics(topic1, topic2){
    //     topics = [topic1, topic2];
    // }

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

    function getTopics() {
        axios.get("http://localhost:9091/faq/topics").then(res => setTopics(res.data))
        console.log(topics)
    }

    function Tests(input1) {

        input = input1;
        console.log(input);
        //return {input};
    }

    function Tests2(input1) {

        answer = input1;
        console.log(answer);
        //return {answer};
    }


    function displayChat() {
        setDisplay(!display);
    }

    function getOptions() {
        let arr = [];
        for (let i = 0; i < topics.length; i++) {
            arr.push({
                value: i,
                label: topics[i],
                trigger: 3
            })
        }

        return arr;
    }

    function getOptions2() {
        for (let i = 0; i < topics.length; i++) {
            return (<div>{topics[i]}</div>)
        }
    }


    function getQuestions(topic) {
        axios.get(`http://localhost:9091/faq/${topic}`).then(res => console.log(res.data))
    }


    function GetAnswer() {
        axios.post(`http://localhost:9091/faq/topic?question=${input}`).then(res => Tests2(res.data))
        console.log(answer)
        return (
            <div className="answer">{answer}</div>
        )
    }


    var idNumber = 1;
    var idNextStep = idNumber + 1;


    let steps = [];
    steps = [
        {
            id: '1',
            message: `Hello ${loggedUser()} ! My name is Bassy the chat bot! How can I be helpful today?.`,
            trigger: "topic",
        },
        {
            id: 'topic',
            options: [
                {value: 'topic1', label: 'Account', trigger: "Q1"},
                {value: 'topic2', label: 'Delivery', trigger: "Q2"},
                {value: 'topic3', label: 'Bids', trigger: "Q3"},
            ]
        },
        {
            id: 'Q1',
            options: [

                {value: 1, label: 'How can I reset my password?', trigger: 9},
                {value: 2, label: 'Can I delete my account?', trigger: "a2"},
                {value: 3, label: 'Can I create another account?', trigger: "a3"},
            ]
            
        },
        {
            id: 'Q2',
            options: [

                {value: 1, label: 'How long does the delivery take?', trigger: "a4"},
                {value: 2, label: 'How much does the delivery cost?', trigger: "a5"},
            ]
            
        },
        {
            id: 'Q3',
            options: [

                {value: 1, label: 'Can I cancel my active bid?', trigger: "a6"},
                {value: 2, label: 'Can I change the pick-up date on my bid?', trigger: "a7"},
            ]
            
        },
        {
            id: 9,
            message: "Go to your account settings ",
            trigger: 10
        },
        {
            id: "a2",
            message: "Yes you can always delete your account",
            trigger: 10
        },
        {
            id: "a3",
            message: "Yes you can, but it can not be with the same email. What you can do is also change the credentials of your current profile.",
            trigger: 10
        },
        {
            id: "a4",
            message: "3-5 working days",
            trigger: 10
        },
        {
            id: "a5",
            message: "Depends on the delivery address",
            trigger: 10
        },
        {
            id: "a6",
            message: "Yes, as long as your bid has not been accepted.",
            trigger: 10
        },
        {
            id: "a7",
            message: "Yes, if the order confirmation process has not been finished.",
            trigger: 10
        },
        {
            id: '10',
            message: "Was that helpful",
            trigger: '11'
        },
        {
            id: '11',
            options: [
                {value: 1, label: 'Yes', trigger: 4},
                {value: 2, label: 'No', trigger: 4},
            ]
        },
        //Get user input
        {
            id: '2',
            user: true,
            validator: (value) => {
                Tests(value);
                return true;
            },
            trigger: '3',
        },
        //Provide answer
        {
            id: '3',
            component: <GetAnswer/>,
            trigger: '4'
        },
        {
            id: '4',
            message: "Would you like to ask me anything else?",
            trigger: '5'

        },
        {
            id: 5,
            options: [
                {value: 1, label: 'Yes', trigger: '2'},
                {value: 2, label: 'No', trigger: '6'},
                {value: 3, label: 'Live support', trigger: 'live support'},
            ]
        },
        {
            id: 'live support',
            component: (<StartLiveChatComponent/>),
        },
        {
            id: 6,
            component: (<StarRating/>),
            end: true,
        }
    ]

    

    return (

        <>
            <div className="chat-container">
                <segment className={display ? "coversation chatbox" : "normal-coversation"}>
                    <ChatBot steps={steps}/>

                </segment>
                <button className="popButton" onClick={displayChat}>{display ? "Close" : "Start a chat"}</button>
            </div>
        </>

    );


}