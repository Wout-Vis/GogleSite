import React from "react";
import ChatbotComponent from "./ChatbotComponent";

export default function Chatbot() {
  function botEventHandler() {}

  return (
    <div>
      <ChatbotComponent eventHandler={botEventHandler} />
    </div>
  );
}
