import React from 'react';
import Axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }: { createChatBotMessage: any, setState: any, children: any }) => {
    const [userQuery, setUserQuery] = React.useState('');
    const handleGreetings = () => {
        const greetingFeedback = createChatBotMessage('Well hello there! How can I help you today?');
        setState((state: any) => ({
            ...state,
            messages: [...state.messages, greetingFeedback],
        }));
    };
    const handleResearchRequest = async (userQuery: any) => {
        console.log(userQuery);
        setUserQuery(userQuery);

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