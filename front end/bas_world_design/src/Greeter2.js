import React, {useState, useEffect} from "react";
import axios from "axios";
import ChatBot from "react-simple-chatbot";

export default function Greeter2() {

    const [display, setDisplay] = useState(false);
    const [name, setName] = useState(sessionStorage.getItem("userName"));
    const [topics, setTopics] = useState(['Account', 'Order']);
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
        console.log(topics)
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
        return (
            <div>{answer}</div>
        )
    }


    var idNumber = 1;
    var idNextStep = idNumber + 1;


    let steps = [];
    steps = [
        {
            id: '1',
            message: `Hello ${loggedUser()} ! My name is Bassy the chat bot! How can I be helpful today?.`,
            trigger: 7,
            //end: true
        },
        {
            id: '7',
            options: [
                {value: 1, label: 'Topic 1', trigger: 8},
                {value: 2, label: 'Topic 2', trigger: 8},
                {value: 3, label: 'Topic 3', trigger: 8},
            ]
        },
        {
            id: '8',
            options: [
                {value: 1, label: 'Question 1', trigger: 9},
                {value: 2, label: 'Question 2', trigger: 9},
                {value: 3, label: 'Question 3', trigger: 9},
            ]
        },
        {
            id: 9,
            message: "Answer",
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
        // {
        //     id: '2',
        //     options: [
        //
        //
        //         { value: 1, label: 'Number 1', trigger: 3},
        //         { value: 2, label: 'Number 2', trigger: 3},
        //         { value: 3, label: 'Number 3', trigger: 3},
        //     ],
        // },
        // {
        //     id: 3,
        //     message: "hellou"
        // }
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
        {
            id: '2',
            user: true,
            validator: (value) => {
                Tests(value);
                return true;
            },
            trigger: '3',
        },
        {
            id: '3',
            component: (<GetAnswer/>),
            //asMessage: true,
            //message: GetAnswer(),
            //message: "fuck",
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
                {value: 2, label: 'No', trigger: '6'}
            ]
        },
        {
            id: 6,
            message: "I hope I was helpful. Wish you a nice day."
        }
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
    //         options: getOptions(),
    //     },
    //     {
    //         id: 3,
    //         message: "fuck u",
    //
    //     }
    // )


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