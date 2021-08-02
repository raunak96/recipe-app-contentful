## Recipe App with NextJS + Contentful CMS (with Graphql contentful queries)

### Getting Started
- Clone this repo, install the dependencies and run the NextJs server.
  ```bash
  git clone https://github.com/raunak96/recipe-app-contentful.git
  yarn
  yarn dev
  ```
- This starts the local server at http://localhost:3000.

### Getting data from Contentful CMS with graphql
- Make POST request to:
  - URL: https://graphql.contentful.com/content/v1/spaces/<SPACE_ID>
  - Headers: Authorizaton = Bearer <ACCESS_TOKEN>.
  - Body: { query : **Graphql Query** }
- **ACCESS_TOKEN** and **SPACE_ID** can be found in **Settings -> API keys** in Contentful.
  
### Parsing field of **Rich Text Type**
Simply use [@contentful/rich-text-react-renderer](https://www.npmjs.com/package/@contentful/rich-text-react-renderer) package's **documentToReactComponents** function which parses Rich Text json like response to JSX/HTML.