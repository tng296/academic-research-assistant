import React from 'react';
import Axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }: { createChatBotMessage: any, setState: any, children: any }) => {
    const [message, setMessage] = React.useState('');

    const handleGreetings = () => {
        const greetingFeedback = createChatBotMessage('Well hello there! How can I help you today?');
        setState((state: any) => ({
            ...state,
            messages: [...state.messages, greetingFeedback],
        }));
    };

    const handleResearchRequest = async (message: any) => {
        setMessage(message);
        const response = await Axios.post('http://localhost:3001/api', { message });
        console.log("response from backend", response.data.content);
        if (response.data.content.includes("Research Paper Request")) {
            const RequestReply = createChatBotMessage("Sure! Here is the link to the research paper: https://www.google.com");
            setState((state: any) => ({
                ...state,
                messages: [...state.messages, RequestReply],
            }));
        }
        else if (response.data.content.includes("Idea")) {
            const IdeaReply = createChatBotMessage("Sure i can help you with your idea");
            setState((state: any) => ({
                ...state,
                messages: [...state.messages, IdeaReply],
            }));
        }
        else {
            const NonSenseReply = createChatBotMessage("I'm sorry, I don't understand that.");
            setState((state: any) => ({
                ...state,
                messages: [...state.messages, NonSenseReply],
            }));
        }
    };
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleGreetings,
                        handleResearchRequest
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;