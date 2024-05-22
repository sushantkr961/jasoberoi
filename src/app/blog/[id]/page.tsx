"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Post = () => {
  const router = useRouter();
  console.log(6666, router);
  
  // const { id } = router.query;

  return (
    <div>
      <h1>Post Details for Post ID: {}</h1>
      {/* Post details fetched by ID */}
    </div>
  );
};

export default Post;
