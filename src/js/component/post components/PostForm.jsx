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
    
    <div className="card">
    <div className="card-body">
      <form className="post-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Add post"
            name="text"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2 col-12 mx-auto">
        <button className="btn btn-dark mt-2" type="submit">
          Post
        </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default PostForm;