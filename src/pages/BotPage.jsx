import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../Bot/config";
import MessageParser from "../Bot/MessageParser";
import ActionProvider from "../Bot/ActionProvider";
import '../App.css'

export default function BotPage() {
  return (
    <div className="BotPage">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
