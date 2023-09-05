import React from 'react';
import { FaEraser } from "react-icons/fa6";


const Post = ({ id, text, fulfilled, fulfillPost, deletePost }) => {
  return (
    <div className={`card ${fulfilled ? 'fulfilled' : ''}`}>
      <div className='card-body' onClick={() => fulfillPost(id)}>
        {text}
      </div>
      <div className='card-footer' onClick={() => deletePost(id)}>
        <FaEraser />
      </div>
    </div>
  );
}

export default Post;