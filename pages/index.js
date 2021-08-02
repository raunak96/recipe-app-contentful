import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipes } from "../lib/gql";

const HomePage = ({ recipes }) => {
	return (
		<Layout>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
				{recipes.map(recipe => (
					<RecipeCard key={recipe.sys.id} recipe={recipe} />
				))}
			</div>
		</Layout>
	);
};
export default HomePage;

export async function getStaticProps() {
	const recipes = await getAllRecipes();
	return {
		props: { recipes },
	};
}
