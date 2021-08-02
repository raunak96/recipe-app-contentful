import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllRecipes, getRecipeBySlug } from "../../lib/gql";
import { getIngredients } from "../../utils";

const RecipeDetailsPage = ({ recipe }) => {
	const { featuredImage, title, cookingTime, ingredients, method } = recipe;
	return (
		<Layout title={`${recipe?.title} | Recipe`}>
			<div className="mb-10">
				<Link href="/">
					<a className="block mb-3 text-indigo-700 ml-2 hover:text-indigo-800">
						Go Back
					</a>
				</Link>
				<Image
					src={featuredImage.url}
					width={Math.min(featuredImage.width, 1000)}
					height={Math.min(featuredImage.height, 350)}
					objectFit="cover"
				/>
				<div
					className="bg-white shadow-lg px-3 py-2 rounded inline-block text-3xl relative -top-3 -left-3"
					style={{ transform: "rotateZ(-1deg)" }}>
					{title}
				</div>
			</div>
			<div className="mb-5">
				<p className="text-xl text-gray-800">
					Takes about {cookingTime} mins to cook.
				</p>
				<h3 className="text-3xl font-bold mt-4 mb-2 uppercase">
					Ingredients:
				</h3>
				<p className="text-xl text-purple-700">
					{getIngredients(ingredients)}.
				</p>
			</div>
			<div>
				<h3 className="text-3xl font-bold mt-7 mb-2 uppercase">
					Method:
				</h3>
				<div className="rich-text">
					{documentToReactComponents(method.json)}
				</div>
			</div>
		</Layout>
	);
};

export default RecipeDetailsPage;

export async function getStaticPaths() {
	const recipes = await getAllRecipes();
	const paths = recipes.map(({ slug }) => ({
		params: { slug },
	}));
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params: { slug } }) {
	const recipe = await getRecipeBySlug(slug);
	return {
		props: { recipe },
	};
}
