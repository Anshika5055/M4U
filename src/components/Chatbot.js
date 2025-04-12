import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi Foodie, how can I assist you?",
      sender: "bot",
      timestamp: new Date().toLocaleString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [showAgentOptions, setShowAgentOptions] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message with timestamp
    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Reset agent options
    setShowAgentOptions(false);

    // First, show the "I will connect you" message
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I will connect you to one of my agents.",
          sender: "bot",
          timestamp: new Date().toLocaleString(),
        },
      ]);

      // Then show the agent options
      setShowAgentOptions(true);

      // Finally, show the thank you message after a longer delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thankuuu Foodies😍🤤,Let's chat again soon ,Till add Some Food In Your Belly🍕😂",
            sender: "bot",
            timestamp: new Date().toLocaleString(),
          },
        ]);
      }, 4000); // 10 second delay to ensure it appears after agent options
    }, 1000);
  };

  const connectToAgent = (number) => {
    const whatsappUrl = `https://wa.me/91${number}?text=Hey! I’m having a bit of trouble with M4U — can you assist?`;
    window.open(whatsappUrl, "_blank");

    // Add a message confirming the action with timestamp
    setMessages((prev) => [
      ...prev,
      {
        text: `Connecting you to agent via WhatsApp...`,
        sender: "bot",
        timestamp: new Date().toLocaleString(),
      },
    ]);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: isOpen ? "450px" : "50px",
        height: isOpen ? "600px" : "50px",
        backgroundColor: "#f8f9fa",
        borderRadius: "50px",
        border: "1px solid black", // Added black border
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s",
        overflow: "hidden",
      }}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background:
              "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(94, 126, 234, 1) 0%, rgba(147, 68, 210, 1) 100%)",
            color: "white",
            borderRadius: "50%",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          💬
        </button>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          {/* Header with close button */}
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="textalign"> Meals4U (M4U)</div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "black",
                fontSize: "20px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              ❌
            </button>
          </div>

          {/* Chat messages */}
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    backgroundColor:
                      msg.sender === "user" ? "#000000" : "#e9ecef",
                    color: msg.sender === "user" ? "white" : "black",
                    maxWidth: "80%",
                  }}
                >
                  <div>{msg.text}</div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      opacity: 0.7,
                      marginTop: "3px",
                      textAlign: msg.sender === "user" ? "right" : "left",
                    }}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Agent options */}
            {showAgentOptions && (
              <div style={{ marginTop: "10px" }}>
                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Connect with an agent:
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <button
                    onClick={() => connectToAgent("8168036606")}
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px 12px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    Agent 1: Order Issue
                  </button>
                  <button
                    onClick={() => connectToAgent("9485965439")}
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px 12px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    Agent 2: Menu Related
                  </button>
                  <button
                    onClick={() => connectToAgent("8708719044")}
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px 12px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    Agent 3: Refund Related
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Input box */}
          <div
            style={{
              padding: "10px",
              display: "flex",
              borderTop: "1px solid #ccc",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                marginLeft: "5px",
                backgroundColor: "#000000",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
