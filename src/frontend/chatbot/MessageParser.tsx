import React from 'react';

const MessageParser = ({ children, actions }: { children: any, actions: any }) => {
    const parse = (message: string) => {
        if (message.toLowerCase().includes('hello')) {
            actions.handleGreetings();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;