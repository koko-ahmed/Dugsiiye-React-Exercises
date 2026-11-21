
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-gray-200 pb-4">
      <h1 className="text-lg font-medium text-gray-700 mb-4">
        React Blog
      </h1>

      <div className="flex items-center gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "text-gray-700 px-4 py-2"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "text-gray-700 px-4 py-2"
          }
        >
          Create Post
        </NavLink>

        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
