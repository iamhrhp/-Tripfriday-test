import React from 'react';
import CommentSection from './CommentSection';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <CommentSection comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
