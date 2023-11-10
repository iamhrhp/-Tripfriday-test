import React, { useState } from 'react';
import PostList from './PostList';
import CommentSection from './CommentSection';

const UserPosts = ({ posts }) => {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h3 onClick={toggleExpanded}>User Posts (Click to Expand/Collapse)</h3>
      {expanded && (
        <div>
          <input
            type="text"
            placeholder="Search Posts"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button>Create Comment</button>
          <PostList posts={filteredPosts} />
          <CommentSection />
        </div>
      )}
    </div>
  );
};

export default UserPosts;
