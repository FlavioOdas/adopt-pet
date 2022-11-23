import React, { useState, useEffect, useRef, useMemo } from "react";
import gatito from "../../../../../../assets/gatito-white.png";
import animalPlaceholder from "../../../../../../assets/animal-paw.png";
import exit from "../../../../../../assets/exit.svg";
import texting from "../../../../../../assets/waiting-texting.gif";
import "../../../../styles.css";

const ChatbotMatch = ({
  animalMatch,
  setShowChatbot,
  foundAnimalsFiltered,
  setFoundAnimals,
}) => {
  const [messageLoading, setMessageLoading] = useState(false);

  const animalStory = useMemo(() => animalMatch?.historia, [animalMatch]);

  const animalId = useMemo(
    () => animalMatch?.profile.split("?")[1],
    [animalMatch]
  );

  const [chat, setChat] = useState([
    `Oi, eu sou ${animalMatch.gender.toLowerCase() === "macho" ? "o" : "a"} ${
      animalMatch.name
    }!`,
  ]);

  const [animalInfoOpen, setAnimalInfoOpen] = useState(false);

  const [chatEnded, setChatEnded] = useState(false);

  useEffect(() => {
    setChat([
      `Oi, eu sou ${animalMatch.gender.toLowerCase() === "macho" ? "o" : "a"} ${
        animalMatch.name
      }!`,
    ]);
    setChatEnded(false);
  }, [foundAnimalsFiltered]);

  useEffect(() => {
    if (chat.length < 2) {
      setMessageLoading(true);
      setTimeout(() => {
        setChat([...chat, animalStory]);
        setMessageLoading(false);
      }, 2000);
    } else {
      setChatEnded(true);
    }
  }, [chat]);

  useEffect(() => {
    if (chatEnded)
      setChat([...chat, "Clique na minha foto para saber mais sobre mim!"]);
  }, [chatEnded]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, messageLoading, chatEnded]);

  const handleNewAnimal = () => {
    setFoundAnimals(foundAnimalsFiltered);
  };

  return (
    <div className="chatbot-main">
      <div
        onClick={() => setAnimalInfoOpen(true)}
        className={`chatbot-header ${
          animalMatch.gender === "Macho" ? "male" : "female"
        }`}
      >
        <div className="chatbot-header-info">
          <div
            className="chatbot-header-image match"
            style={{
              backgroundImage: `url("${
                animalMatch.image ?? animalPlaceholder
              }")`,
            }}
          />
          <div className="chatbot-header-name animal-match">
            <h3>{animalMatch.name.toLowerCase()}</h3>
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
        {animalInfoOpen ? (
          <div className="animal-info">
            <div className="animal-info-go-back">
              <button onClick={() => setAnimalInfoOpen(false)}>
                <img src={exit} alt="Voltar" />
              </button>
            </div>
            <div className="animal-info-image">
              {animalMatch.image && (
                <img src={animalMatch.image} alt="animal" />
              )}
            </div>
            <ul className="animal-info-data">
              <li>
                <strong>Sou:</strong> {animalMatch.gender}
              </li>
              {animalMatch?.castrado && (
                <li>
                  <strong>{animalMatch.castrado}</strong>
                </li>
              )}
              {animalMatch?.vacinado && (
                <li>
                  <strong>{animalMatch.vacinado}</strong>
                </li>
              )}
              {animalMatch?.children.length && (
                <li>
                  <strong>
                    {animalMatch.children ? "Convivo" : "Não convivo"}
                  </strong>{" "}
                  bem com crianças
                </li>
              )}
              <li>
                <strong>
                  {animalMatch?.otherAnimals ? "Convivo" : "Não convivo"}
                </strong>{" "}
                bem com outros animais
              </li>
              <li>
                <strong>{animalMatch?.apto ? "Vivo" : "Não vivo"}</strong> bem
                em apartamento
              </li>
            </ul>
            <div
              className={`animal-info-button ${
                animalMatch.gender === "Macho" ? "male" : "female"
              }`}
            >
              <div className="chatbot-link">
                <a
                  target="_top"
                  href={`https://gaarcampinas.org/pretermo.php?${animalId}`}
                >
                  Quero adotar!
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div id="chatbot-body-inner" className="chatbot-body-inner">
            {chat?.map((chatMessage, index) => {
              return (
                <div key={index} className={`chatbot-message`}>
                  <div
                    className="chatbot-message-image match animal-match"
                    style={{
                      backgroundImage: `url("${
                        animalMatch.image ?? animalPlaceholder
                      }")`,
                    }}
                    onClick={() => setAnimalInfoOpen(true)}
                  />
                  <div className="chatbot-message-text">
                    <p>{chatMessage}</p>
                  </div>
                </div>
              );
            })}
            {messageLoading && (
              <div className={`chatbot-message waiting`}>
                <div
                  className="chatbot-message-image match animal-match"
                  style={{
                    backgroundImage: `url("${
                      animalMatch.image ?? animalPlaceholder
                    }")`,
                  }}
                  onClick={() => setAnimalInfoOpen(true)}
                />
                <div className="chatbot-message-waiting">
                  <img
                    src={texting}
                    alt="texting"
                    className="chatbot-message-texting"
                  />
                </div>
              </div>
            )}
            {chatEnded && (
              <div className="chatbot-link">
                <a
                  target="_top"
                  href={`https://gaarcampinas.org/pretermo.php?${animalId}`}
                >
                  Quero adotar!
                </a>
              </div>
            )}
            {foundAnimalsFiltered.length > 0 && chatEnded && (
              <div className="chatbot-link secondary">
                <button onClick={() => handleNewAnimal()}>
                  Conhecer outro animal
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotMatch;
