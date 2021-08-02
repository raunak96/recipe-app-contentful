import axios from "axios";
axios.defaults.headers.common[
	"Authorization"
] = `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`;

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const recipeFields = `items{
      slug
      title
      cookingTime
      ingredients
      image{
        url
        height
        width
      }
      featuredImage{
        url
        height
        width
      }
      sys{
        id
      }
      method{
        json 
      }
    }`;

const GET_ALL_RECIPES = `
query{
  recipeCollection{
    ${recipeFields}
  }
}`;

const getRecipe = slug => `query{
   recipeCollection(where: { slug: "${slug}" },limit:1){
    ${recipeFields}
  }
}`;

export const getAllRecipes = async () => {
	const { data } = await axios.post(url, { query: GET_ALL_RECIPES });
	const { items } = data.data.recipeCollection;
	return items;
};

export const getRecipeBySlug = async slug => {
	try {
		const { data } = await axios.post(url, { query: getRecipe(slug) });
		const { items } = data.data.recipeCollection;
		return items[0];
	} catch (error) {
		return error.response.data;
	}
};
