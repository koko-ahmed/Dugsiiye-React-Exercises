
import { useParams } from "react-router-dom";
import { recipes, categories } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

function CategoryRecipes() {
  const { categoryId } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  if (!category) {
    return (
      <h2 className="text-xl font-bold text-red-600">
        Category Not Found
      </h2>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        {category.name}
      </h2>

      <p className="text-gray-600 mb-6">
        {category.description}
      </p>

      {filteredRecipes.length === 0 ? (
        <p className="text-gray-500">
          No recipes found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryRecipes;
