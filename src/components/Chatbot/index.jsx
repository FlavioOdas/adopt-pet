import React, { useState } from "react";
import ChatbotToggle from "./components/ChatbotToggle";
import ChatbotMain from "./components/ChatbotMain";
import gatito from "../../assets/gatito-white.png";

import "./styles.css";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatbotMinimized, setChatbotMinimized] = useState(false);
  const [chatbotData, setChatbotData] = useState({
    petData: {
      type: null,
      gender: null,
      size: null,
      apto: null,
      otherAnimals: null,
      children: null,
    },
  });

  if (chatbotMinimized) {
    return (
      <div
        onClick={() => setChatbotMinimized(false)}
        className="chatbot-minimized-image"
      >
        <img src={gatito} alt="chatbot" />
      </div>
    );
  }

  return (
    <div className="chatbot">
      {!showChatbot ? (
        <ChatbotToggle
          setShowChatbot={setShowChatbot}
          setChatbotMinimized={setChatbotMinimized}
        />
      ) : (
        <ChatbotMain
          setShowChatbot={setShowChatbot}
          chatbotData={chatbotData}
          setChatbotData={setChatbotData}
        />
      )}
    </div>
  );
};

export default Chatbot;
