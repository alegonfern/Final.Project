import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      const newPost = {
        id: Date.now(),
        text: input,
        fulfilled: false,
      };

      onSubmit(newPost);
      setInput('');
    }
  };

  return (
    <form className='post-form' onSubmit={handleFormSubmit}>
      <input
        className='post-input'
        type='text'
        placeholder='Add post'
        name='text'
        value={input}
        onChange={handleInputChange}
      />
      <button className='post-button' type='submit'>
        Add Post
      </button>
    </form>
  );
};

export default PostForm;