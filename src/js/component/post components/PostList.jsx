import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const addPost = post => {
    if (post.text.trim()) {
      post.text = post.text.trim();
      const updatedPosts = [post, ...posts];
      setPosts(updatedPosts);
    }
  };

  const deletePost = id => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <>
      <PostForm onSubmit={addPost} />
      <div className="post-list-container">
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            text={post.text}
            deletePost={deletePost}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;