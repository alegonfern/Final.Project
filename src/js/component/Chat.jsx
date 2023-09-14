import React, { useState } from "react";

const conversations = [
    {
        id: 1,
        username: "Usuario1",
        avatar: "avatar1.png",
        messages: [
            { text: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
            { text: "¡Bien, gracias!", timestamp: "10:05 AM" },
        ],
    },
    {
        id: 2,
        username: "Usuario2",
        avatar: "avatar2.png",
        messages: [
            { text: "¡Hola! ¿Qué tal?", timestamp: "11:00 AM" },
            { text: "Todo bien por aquí.", timestamp: "11:05 AM" },
        ],
    },
];

function Chat() {
    const [activeConversation, setActiveConversation] = useState(conversations[0]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;

        const updatedConversations = conversations.map((conversation) => {
            if (conversation.id === activeConversation.id) {
                const newMessageObj = {
                    text: newMessage,
                    timestamp: new Date().toLocaleTimeString(),
                };
                return {
                    ...conversation,
                    messages: [...conversation.messages, newMessageObj],
                };
            }
            return conversation;
        });

        conversations = updatedConversations;
        setNewMessage("");
    };

    return (
        <div className="chat-room">
            <div className="chat-sidebar">
                <h3>Conversaciones</h3>
                <ul>
                    {conversations.map((conversation) => (
                        <li
                            key={conversation.id}
                            onClick={() => setActiveConversation(conversation)}
                            className={
                                conversation.id === activeConversation.id ? "active" : ""
                            }
                        >
                            <img src={conversation.avatar} alt={conversation.username} />
                            {conversation.username}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat-messages">
                <h3>Chat con {activeConversation.username}</h3>
                {activeConversation.messages.map((message, index) => (
                    <div key={index} className="message">
                        <div className="avatar">
                            <img src={activeConversation.avatar} alt={activeConversation.username} />
                        </div>
                        <div className="message-content">
                            <span className="timestamp">{message.timestamp}</span>
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Enviar</button>
            </div>
        </div>
    );
}

export default Chat;