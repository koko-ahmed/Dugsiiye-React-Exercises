
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="block bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition"
    >
      <h2 className="text-lg font-semibold mb-2">
        {recipe.title}
      </h2>

      <p className="text-gray-600 text-sm mb-3">
        {recipe.description}
      </p>

      <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded">
        {recipe.category}
      </span>
    </Link>
  );
}

export default RecipeCard;
