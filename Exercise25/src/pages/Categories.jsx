
import { NavLink, Outlet } from "react-router-dom";
import { categories } from "../data/recipes";

function Categories() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Recipe Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Categories
          </h2>

          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <NavLink
                key={category.id}
                to={category.id}
                className={({ isActive }) =>
                  `p-3 rounded-md ${
                    isActive
                      ? "bg-pink-100 text-pink-700 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
                }
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Category content */}
        <div className="md:col-span-3">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default Categories;
