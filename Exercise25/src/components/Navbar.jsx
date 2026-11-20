
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-semibold border-b-2 border-pink-600 pb-1"
      : "text-gray-600 hover:text-pink-600 pb-1";

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-pink-600">
          Recipe Book
        </h1>

        <div className="flex gap-6">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/recipes" className={linkStyle}>
            Recipes
          </NavLink>

          <NavLink to="/categories" className={linkStyle}>
            Categories
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
