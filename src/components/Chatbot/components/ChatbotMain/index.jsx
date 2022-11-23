import React, { useState, useEffect, useRef } from "react";
import gatito from "../../../../assets/gatito-white.png";
import exit from "../../../../assets/exit.svg";
import texting from "../../../../assets/waiting-texting.gif";
import messages from "../../../../mocks/messages.json";
import animals from "../../../../mocks/animals.json";
import "../../styles.css";
import ChatbotMatch from "./components/ChatbotMatch";

const ChatbotMain = ({ setShowChatbot, chatbotData, setChatbotData }) => {
  const defaultMessage = messages.find((message) => message.id === "default");

  const [chat, setChat] = useState(
    defaultMessage.messages.filter(
      (message) => message.trigger === "start-first"
    )
  );

  const [messageLoading, setMessageLoading] = useState(false);

  const [chatEnded, setChatEnded] = useState(false);

  const [animalMatch, setAnimalMatch] = useState(null);

  const [foundAnimals, setFoundAnimals] = useState([]);

  const [foundAnimalsFiltered, setFoundAnimalsFiltered] = useState([]);

  useEffect(() => {
    if (chat.at(-1).next !== null) {
      setMessageLoading(true);
      setTimeout(() => {
        const messsageToAdd = defaultMessage.messages.find(
          (message) => message.trigger === chat.at(-1).next
        );
        setChat([...chat, messsageToAdd]);
        setMessageLoading(false);
      }, 1500);
    }

    if (chat.at(-1).trigger === "ending") {
      setChatEnded(true);
    } else if (chat.at(-1).trigger === "start-first") {
      setChatEnded(false);
    }
  }, [chat]);

  useEffect(() => {
    if (!chatEnded) return;

    setFoundAnimals(
      animals.filter((animal) => {
        if (chatbotData.petData.type === "Canina") {
          return (
            animal.type === chatbotData.petData.type &&
            animal.size === chatbotData.petData.size &&
            animal.otherAnimals === chatbotData.petData.otherAnimals &&
            animal.children === chatbotData.petData.children &&
            animal.apto === chatbotData.petData.apto &&
            animal.gender === chatbotData.petData.gender &&
            animal.available
          );
        } else {
          return (
            animal.type === chatbotData.petData.type &&
            animal.otherAnimals === chatbotData.petData.otherAnimals &&
            animal.children === chatbotData.petData.children &&
            animal.apto === chatbotData.petData.apto &&
            animal.gender === chatbotData.petData.gender &&
            animal.available
          );
        }
      })
    );
  }, [chatEnded]);

  useEffect(() => {
    if (foundAnimals.length > 0) {
      const currentAnimal = Math.floor(Math.random() * foundAnimals.length);

      setAnimalMatch(foundAnimals[currentAnimal]);

      setFoundAnimalsFiltered(
        foundAnimals.filter((_, index) => index !== currentAnimal)
      );
    }
  }, [foundAnimals]);

  const fetchNextMessage = (trigger, data, label) => {
    const messsageToAdd = defaultMessage.messages.find(
      (message) => message.trigger === trigger
    );

    setChatbotData((currentState) => ({
      petData: { ...currentState.petData, [data]: label },
    }));
    setChat([...chat, messsageToAdd]);
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, messageLoading, chatEnded, animalMatch]);

  return (
    <>
      <div className="chatbot-main">
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-header-image">
              <img src={gatito} alt="chatbot" />
            </div>
            <div className="chatbot-header-name">
              <h3>Gamora</h3>
              <span>Online</span>
            </div>
          </div>
          <div className="chatbot-header-exit">
            <button onClick={() => setShowChatbot(false)}>
              <img src={exit} alt="exit" />
            </button>
          </div>
        </div>
        <div id="chatbot-body" className="chatbot-body">
          <div id="chatbot-body-inner" className="chatbot-body-inner">
            {chat?.map(
              (chatMessage, index) =>
                chatMessage.message && (
                  <div key={index} className={`chatbot-message`}>
                    <div className="chatbot-message-image">
                      <img src={gatito} alt="chatbot" />
                    </div>
                    <div className="chatbot-message-text">
                      <p>{chatMessage?.message}</p>
                    </div>
                  </div>
                )
            )}
            {messageLoading && (
              <div className={`chatbot-message waiting`}>
                <div className="chatbot-message-image">
                  <img src={gatito} alt="chatbot" />
                </div>
                <div className="chatbot-message-waiting">
                  <img
                    src={texting}
                    alt="texting"
                    className="chatbot-message-texting"
                  />
                </div>
              </div>
            )}
            {chat.at(-1).options !== null && (
              <div className="chatbot-message-options">
                {chat.at(-1).options.map((option, index) => (
                  <button
                    key={index}
                    className={`chatbot-option`}
                    onClick={() =>
                      fetchNextMessage(
                        option.trigger,
                        option.property,
                        option.label
                      )
                    }
                  >
                    {option.value}
                  </button>
                ))}
              </div>
            )}

            {chatEnded &&
              (animalMatch ? (
                <div className={`chatbot-message`}>
                  <div className="chatbot-message-image">
                    <img src={gatito} alt="chatbot" />
                  </div>
                  <div className="chatbot-message-text">
                    <p>
                      Encontrei um amigo perfeito para você, ele te chamou!
                      Tenho que ir, preciso achar mais lares para meus outros
                      amigos!
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className={`chatbot-message`}>
                    <div className="chatbot-message-image">
                      <img src={gatito} alt="chatbot" />
                    </div>
                    <div className="chatbot-message-text">
                      <p>
                        Ainda não encontramos um amigo para você, mas você pode
                        dar uma olhada em outros amigos
                      </p>
                    </div>
                  </div>
                  <div className="chatbot-link">
                    <a
                      target="_top"
                      href="http://gaarcampinas.org/queroadotar.php"
                    >
                      CONHECER OUTROS AMIGOS
                    </a>
                  </div>
                </>
              ))}

            {chatEnded && (
              <div className="chatbot-message-exit">
                <p>Gamora saiu do chat</p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      {chatEnded && animalMatch && (
        <ChatbotMatch
          animalMatch={animalMatch}
          setShowChatbot={setShowChatbot}
          foundAnimalsFiltered={foundAnimalsFiltered}
          setFoundAnimals={setFoundAnimals}
        />
      )}
    </>
  );
};

export default ChatbotMain;
