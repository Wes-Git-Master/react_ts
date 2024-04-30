import React, { useState, useEffect } from "react";

import { SinglePost } from "./SinglePost";

import type { Post } from "../../types";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      {posts.map((post: Post) => (
        <SinglePost key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};
