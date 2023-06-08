import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useAuth } from "../Context";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const auth = useAuth();

  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleClick = () => {
    const usermsg = createClientMessage("Got it!");
    const botMessage = createChatBotMessage("Enter your name", {
      widget: "dogPicture",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, usermsg, botMessage],
    }));
  };
  const handleSubmit = ({ name }) => {
    const userMsg = createClientMessage(`${auth.user}`);
    const botMsg = createChatBotMessage("Enter your age: ", {
      widget: "Age",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMsg, botMsg],
    }));
  };
  const handleExit = () => {
    const userMsg = createClientMessage(`${auth.age}`);
    const botMsg = createChatBotMessage("Thank you!", {
      widget: "Exit",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMsg, botMsg],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello, handleClick, handleSubmit, handleExit },
        });
      })}
    </div>
  );
};

export default ActionProvider;
