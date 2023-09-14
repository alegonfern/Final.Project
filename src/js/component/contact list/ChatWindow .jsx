import React, { useState } from 'react';
import ChatForm from './ChatForm';
import Chat from './Chat';

const ChatWindow = () => {
  const [chats, setChats] = useState([]);

  const addChat = chat => {
    if (chat.text.trim()) {
      chat.text = chat.text.trim();
      const updatedChats = [chat, ...chats];
      setChats(updatedChats);
    }
  };

  return (
    <>
      <ChatForm onSubmit={addChat} />
      <div className="chat-list-container" style={{ width: '100%' }}>
        {chats.map(chat => (
          <Chat
            key={chat.id}
            id={chat.id}
            text={chat.text}
          />
        ))}
      </div>
    </>
  );
};

export default ChatWindow;
