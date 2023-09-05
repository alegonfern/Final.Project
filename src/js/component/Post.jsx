import React from 'react';

const Post = ({ id, text, fulfilled, fulfillPost, deletePost }) => {
  return (
    <div className={fulfilled ? 'post-container fulfilled' : 'post-container'}>
      <div className='post-text' onClick={() => fulfillPost(id)}>
        {text}
      </div>
      <div className='post-icons-container' onClick={() => deletePost(id)}>
      </div>
    </div>
  );
}

export default Post;