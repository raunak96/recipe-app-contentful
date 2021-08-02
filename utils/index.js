export const getIngredients = ingredients => {
	const transformedIngredients = ingredients.map(
		ingredient => `${ingredient[0].toUpperCase()}${ingredient.slice(1)}`
	);
	return transformedIngredients.join(", ");
};
