
import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">
        All Recipes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
