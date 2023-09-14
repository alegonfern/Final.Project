import React from 'react';

const Chat = ({ text }) => {
  return (
    <div className="card text-bg-dark mb-3">
      <div className='card-body'>
        {text}
      </div>
    </div>
  );
}

export default Chat;
