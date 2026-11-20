
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="py-10">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Recipe Book
        </h1>

        <p className="text-gray-600">
          Discover delicious recipes for every occasion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Link
          to="/recipes"
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Browse Recipes
          </h2>

          <p className="text-gray-600 mb-4">
            Discover our collection of delicious recipes.
          </p>

          <span className="text-pink-600 font-medium">
            View Recipes →
          </span>
        </Link>

        <Link
          to="/categories"
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Explore Categories
          </h2>

          <p className="text-gray-600 mb-4">
            Find recipes by meal type and category.
          </p>

          <span className="text-pink-600 font-medium">
            View Categories →
          </span>
        </Link>

      </div>
    </div>
  );
}

export default Home;
