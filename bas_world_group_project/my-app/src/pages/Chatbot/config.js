import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../../components/Options/Options";
const config = {
  botName: "BasWorldChatBot",
  initialMessages: [createChatBotMessage(`Hello world`)],
};

export default config;
