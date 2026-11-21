
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { addPost } = usePosts();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in all fields");
      return;
    }

    addPost(title.trim(), content.trim());
    navigate("/");
  };

  return (
    <div className="bg-white p-8 mt-8 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-700 mb-4">
        Create Post
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Post Title</label>
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded"
          />
        </div>

        <div>
          <label className="block mb-2">Post Content</label>
          <textarea
            placeholder="Write your post here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full border border-gray-300 p-3 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded cursor-pointer"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
