import { createChatBotMessage } from "react-chatbot-kit";
// import "../App.css";
import Button from "../components1/Button";
import DogPicture from "../components1/DogPicture";
// import TextInput from "../components1/TextInput";
import Age from "../components1/Age";
import ExitComponent from "../components1/ExitComponent";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "firstButton",
    }),
  ],
  widgets: [
    {
      widgetName: "firstButton",
      widgetFunc: (props) => <Button props={props} />,
    },
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} props={props} />,
    },
    {
      widgetName: "Age",
      widgetFunc: (props) => <Age props={props} />,
    },
    {
        widgetName:"Exit",
        widgetFunc:(prpos) => <ExitComponent props={prpos}/>
    },
  ],
};

export default config;
