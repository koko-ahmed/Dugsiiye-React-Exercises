
import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );

  if (!recipe) {
    return (
      <h1 className="text-2xl font-bold">
        Recipe Not Found
      </h1>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">

      <Link
        to="/recipes"
        className="text-pink-600 text-sm hover:underline"
      >
        ← Back to Recipes
      </Link>

      <h1 className="text-2xl font-bold mt-4 mb-6">
        {recipe.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-lg font-semibold mb-3">
            Ingredients
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">
            Instructions
          </h2>

          <ol className="list-decimal pl-5 space-y-2">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>

      </div>
    </div>
  );
}

export default RecipeDetail;
