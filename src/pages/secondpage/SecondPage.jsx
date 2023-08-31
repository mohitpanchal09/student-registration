import React from "react";
import { Link } from "react-router-dom";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/configs/chatbotconfig";
import MessageParser from "../chatbot/messageparser/MessageParser";
import "./SecondPage.css";

import ActionProvider from "../chatbot/actionprovider/ActionProvider";
const SecondPage = () => {
  return (
    <div className="chatbot-outermost-cont">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      {/* <Link to="/confirmation">Go to Confirmation</Link> */}
    </div>
  );
};

export default SecondPage;
