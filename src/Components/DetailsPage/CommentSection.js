import React, { useState } from 'react';

const CommentSection = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [postComments, setPostComments] = useState(comments);

  console.log('postComments', postComments);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const newCommentObj = {
        id: Date.now(), // Assign a unique ID (in a real application, this would be generated server-side)
        body: newComment,
      };
      setPostComments([...postComments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div>
      {postComments?.map((comment) => (
        <div key={comment?.id}>
          <h5>Comments</h5>
          <p>{comment?.body}</p>
        </div>
      ))}
      {postComments ? (
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
          />
          <button type="submit">Post Comment</button>
        </form>
      ) : null}
    </div>
  );
};

export default CommentSection;
