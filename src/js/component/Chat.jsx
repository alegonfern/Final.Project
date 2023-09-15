import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../store/UserContext";

function Chat() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const { isLoggedIn } = useContext(UserContext);
    const [conversations, setConversations] = useState([
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
    ]);
    const [activeConversation, setActiveConversation] = useState(
        conversations[0]
    );
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            const token = localStorage.getItem('jwtToken');
            console.log('Token JWT:', token);

            if (token) {
                fetch('http://127.0.0.1:5000/Chat', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Error al cargar datos privados.');
                        }
                    })
                    .then((data) => {
                        setData(data);
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error al cargar datos privados:', error);
                        setIsLoading(false);
                    });
            } else {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }, [isLoggedIn]);

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

        setConversations(updatedConversations);
        setNewMessage("");
    };

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    if (!data) {
        return <p>Error al cargar datos privados.</p>;
    }

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
                                conversation.id === activeConversation.id
                                    ? 'active'
                                    : ''
                            }
                        >
                            {conversation.username}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat-main">
                <div className="chat-header">
                    <h3>{activeConversation.username}</h3>
                </div>
                <div className="chat-messages">
                    {activeConversation.messages.map((message, index) => (
                        <div key={index} className="message">
                            <p>{message.text}</p>
                            <span>{message.timestamp}</span>
                        </div>
                    ))}
                </div>
                <div className="chat-footer">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
