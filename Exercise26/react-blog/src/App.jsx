
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import { PostsProvider } from "./context/PostsContext";

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/posts/:id" element={<PostDetails />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
