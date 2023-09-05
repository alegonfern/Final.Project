import React from 'react';
import { FaEraser } from "react-icons/fa6";


const Post = ({ id, text, deletePost }) => {
  return (
    <div className="card text-bg-dark mb-3">
      <div className='card-body' onClick={() => fulfillPost(id)}>
        {text}
      </div>
      <div className='card-footer' onClick={() => deletePost(id)}>
        <FaEraser style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
}

export default Post;