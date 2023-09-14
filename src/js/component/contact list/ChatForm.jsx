import React, { useState } from 'react';

const ChatForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      const newChat = {
        id: Date.now(),
        text: input,
      };

      onSubmit(newChat);
      setInput('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <form className="chat-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="text"
              value={input}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid gap-2 col-12 mx-auto">
            <button className="btn btn-dark mt-2" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;
