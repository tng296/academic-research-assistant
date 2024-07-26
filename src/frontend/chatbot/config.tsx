import { createChatBotMessage } from 'react-chatbot-kit';
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";

const botName = 'ResearchAI';

const config: IConfig = {
    initialMessages: [
        createChatBotMessage(`Hello! I am your personal Research Assistant. How may I assist you?`, {})],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },

};

export default config;