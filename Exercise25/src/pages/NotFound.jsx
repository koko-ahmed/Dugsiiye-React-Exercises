
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">

      <h1 className="text-7xl font-bold text-pink-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-bold mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
      >
        Back to Home
      </Link>

    </div>
  );
}

export default NotFound;
