import React, { useState } from "react";
import ChatbotToggle from "./components/ChatbotToggle";
import ChatbotMain from "./components/ChatbotMain";
import "./styles.css";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
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

  return (
    <div className="chatbot">
      {!showChatbot ? (
        <ChatbotToggle setShowChatbot={setShowChatbot} />
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
