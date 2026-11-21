
import { createContext, useContext, useState } from "react";

const PostsContext = createContext(null);

const initialPosts = [
  {
    id: 1,
    title: "Introduction to React",
    content: "Content of post 1",
  },
  {
    id: 2,
    title: "Understanding React Router",
    content: "Content of post 2",
  },
  {
    id: 3,
    title: "React Hooks in Depth",
    content: "Content of post 3",
  },
];

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (title, content) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
    return newPost;
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}
