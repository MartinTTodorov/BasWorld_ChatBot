import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import styles from "./chatbot.css";
import config from "./Chatbot/config";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";


function ChatbotApp() {
    const [button, setButton] = useState(true);

    function OpenForm() {
        document.getElementById("myForm").style.display = "block";
        button = true;
        return(
            <div className={styles.chatPopup} id="myForm">
  <form action="/action_page.php" class="form-container">
    <h1>Chat</h1>

    <label for="msg"><b>Message</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" class="btn">Send</button>
    <button type="button" class="btn cancel" onclick={<CloseForm/>}>Close</button>
  </form>
</div>
        )
   
      }
      function CloseForm() {
        document.getElementById("myForm").style.display = "none";
        return (
            <button class={styles.openButton} onclick={<OpenForm />}>Chat</button>
        )

      }
  
     if(button ==false )
     return(
       <CloseForm />
     )
       
    
    if(button==true)
      return(
        <OpenForm />

      )




}


export default ChatbotApp;