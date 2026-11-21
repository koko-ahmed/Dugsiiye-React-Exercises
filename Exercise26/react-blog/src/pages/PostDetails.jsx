
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = usePosts();

  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return <h2 className="mt-8">Post not found</h2>;
  }

  return (
    <div className="bg-white p-8 mt-8 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-700">
        {post.title}
      </h2>

      <p className="text-gray-700 whitespace-pre-wrap">
        {post.content}
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Previous
      </button>
    </div>
  );
}

export default PostDetails;
