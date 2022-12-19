import React, {useState,useEffect} from "react";
import axios from "axios";
import "./stylesChat.css";



const Chat = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState(sessionStorage.getItem("userName"));
  const [topic, setTopic] = useState("None");


useEffect(() => {
    sessionStorage.getItem("userName")==undefined ?
    setName("Guest") : setName(sessionStorage.getItem("userName"))

  },[]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages(oldArray => [...oldArray, {message:sendMessage, user:"user", time: new Date().toLocaleTimeString()}]);
    setSendMessage("");
    setMessages(oldArray => [...oldArray, {message: "I dont know what to say" , user:"bot", time: new Date().toLocaleTimeString()}]);


    // userService.login(data)
    // .then(message=>onMessageReceived(message))
    
};
  useEffect(() => {
    var objDiv = document.getElementById("314");
    objDiv.scrollTop = objDiv.scrollHeight;

  });
       

const chatBoxBas =(message)=> (
    <div className="itemCht">
                <div className="iconCht">
                    <i className="fa fa-user">{name.charAt(0).toUpperCase()}</i>
                </div>
                <div className="msgCht">
                    <p style={{marginBottom:0,wordBreak:"keep-all"}}>{message.message}</p>
                    <p style={{fontSize:" 12px",margin:0,paddingTop:0,float:'right'}}>{message.time}</p>
                </div>               
            </div>
    
          
);
const chatBoxUser =(message)=> (
  <div className="itemCht right">
                <div className="msgCht">
                <p style={{marginBottom:0,wordBreak:"keep-all"}}>{message.message}</p>
                    <p style={{fontSize:" 12px",margin:0,paddingTop:0,float:'left'}}>{message.time}</p>
                </div>
            </div>        
);
const initialQuestion = (
    <div>
        <div className="itemCht right">
                <div className="msgCht">
                <p style={{marginBottom:0,wordBreak:"keep-all"}}>{`Hello ${name} ! My name is Bassy the chat bot! Here are some frequently asked questions? Before we start pls select one of the topics below`} </p>
                    <p style={{fontSize:" 12px",margin:0,paddingTop:0,float:'right'}}>{new Date().toLocaleTimeString()}</p>
                      
                </div>               
            </div>
            
            <div className="itemCht right">
                <div className="msgChtBtn">
                      <button type="button" className="btn btn-primary" onClick={()=>setTopic("Order")} >Order</button>
                      <button type="button" className="btn btn-primary" onClick={()=>setTopic("Account")} >Account</button>
                      <button type="button" className="btn btn-primary" onClick={()=>setTopic("Vehicle")} >Vehicles</button>
                      <button type="button" className="btn btn-primary" onClick={()=>setTopic("Payment")} >Payment</button>
                </div>               
            </div>
    </div>    
       
  ); 

    

    return (
        
        <div className='cbCht'>
        <div className="wrapperCht">
            <div className="titleCht">Live Chat Service</div>
            <div className="boxCht" id="314"> 
            {initialQuestion}     
            {messages.map((message)=> <div key = {message.message+message.time}>{message.user=="bot" ? chatBoxUser(message):chatBoxBas(message)}</div>)}                   
            </div>
            
            <div className="typing-areaCht">
                <div className="input-fieldCht">
                    <input type="text" placeholder="Type your message" value={sendMessage} onChange={(event) => setSendMessage(event.target.value)} required ></input>
                    <button onClick={handleSubmit} >Send</button>
                </div>
            </div>
        </div>
        </div>

    );


}

export default Chat;

