import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }: { createChatBotMessage: any, setState: any, children: any }) => {
    const handleGreetings = () => {
        const greetingFeedback = createChatBotMessage('Well hello there! How can I help you today?');
        setState((state: any) => ({
            ...state,
            messages: [...state.messages, greetingFeedback],
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleGreetings,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;