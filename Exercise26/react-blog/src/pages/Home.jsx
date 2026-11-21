
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

function Home() {
  const { posts } = usePosts();

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="bg-white p-8 mt-8 rounded-lg shadow">
      <div className="max-w-xl">
        <h2 className="text-lg font-medium text-gray-700">
          Blog Posts
        </h2>

        <form onSubmit={handleSearch} className="space-y-4">
          <input
            type="text"
            placeholder="Search posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-2 border-blue-500 p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
          >
            Search
          </button>
        </form>

        <div className="mt-2 space-y-3">
          {filteredPosts.map((post) => (
            <div key={post.id}>
              <Link
                to={`/posts/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
