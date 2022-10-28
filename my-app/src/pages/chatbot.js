import React from "react";
import Chatbot from "react-chatbot-kit";
import "./chatbot.css";
import config from "./Chatbot/config";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";

function ChatbotApp() {
    return (
        <div className="Chatbot">
                <Chatbot
                 config={config}
                 actionProvider={ActionProvider}
                 messageParser={MessageParser}
                 />
        </div>
    )
}

export default ChatbotApp;