import React, { useEffect, useState } from 'react';
import UserAlbumsSection from './UserAlbum';
import UserProfile from './UserProfile';
import UserPosts from './UserPost';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const { state } = useLocation();

  const posts = [
    {
      id: 1,
      title: 'The clowns had taken over',
      body: 'The clowns had taken over. And yes, they were literally clowns. Over 100 had appeared out of a small VW bug that had been driven up to the bank. Now they were all inside and had taken it over.',
      comments: [{ id: 1, body: 'Awesome Work' }],
    },
    {
      id: 2,
      title: 'huge heads on Easter Island',
      body: "He was aware there were numerous wonders of this world including the unexplained creations of humankind that showed the wonder of our ingenuity. There are huge heads on Easter Island. There are the Egyptian pyramids. There’s Stonehenge. But he now stood in front of a newly discovered monument that simply didn't make any sense and he wondered how he was ever going to be able to explain it.",
      comments: [{ id: 1, body: "That's great" }],
    },
  ];

  return (
    <div>
      <UserProfile user={state} />
      <UserPosts posts={posts} />
      <UserAlbumsSection />
    </div>
  );
};

export default DetailsPage;
