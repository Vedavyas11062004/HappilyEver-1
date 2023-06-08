import { createChatBotMessage } from "react-chatbot-kit";
// import "../App.css";
import Button from "../components1/Button";
import InputFeild from "../components1/InputFeild";
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
      widgetName: "InputFeild",
      widgetFunc: (props) => <InputFeild {...props} props={props} />,
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
