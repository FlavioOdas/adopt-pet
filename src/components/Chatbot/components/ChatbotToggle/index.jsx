import React from "react";
import gatito from "../../../../assets/gatito-white.png";
import exit from "../../../../assets/exit.svg";
import "../../styles.css";

const ChatbotToggle = ({ setShowChatbot }) => {
  return (
    <div className="chatbot-toggle">
      <div className="chatbot-toggle-image">
        <img src={gatito} alt="chatbot" />
      </div>
      <div className="chatbot-toggle-header">
        <button className="chatbot-toggle-exit">
          <img src={exit} alt="exit" />
        </button>
      </div>

      <div className="chatbot-toggle-body">
        <div className="chatbot-toggle-title">
          <h3>Está procurando um amigo?</h3>
        </div>
        <div className="chatbot-toggle-button">
          <button onClick={() => setShowChatbot(true)}>Quero adotar!</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotToggle;
