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
        console.log(response.data);

        const reply = createChatBotMessage('I will see what i can do');
        setState((state: any) => ({
            ...state,
            messages: [...state.messages, reply],
        }));

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