[![wakatime](https://wakatime.com/badge/github/raunak96/recipe-app-contentful.svg)](https://wakatime.com/badge/github/raunak96/recipe-app-contentful)
## Recipe App with NextJS + Contentful CMS (with Graphql contentful queries)
![App Demo](/public/demo.png)
#### View [Demo](https://recipe-app-contentful.vercel.app/)

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
  - Headers: Authorizaton = Bearer <ACCESS_TOKEN>
  - Body: { query : **Graphql Query** }
- **ACCESS_TOKEN** and **SPACE_ID** can be found in **Settings -> API keys** in Contentful.
  
### Parsing field of **Rich Text Type**
Simply use [@contentful/rich-text-react-renderer](https://www.npmjs.com/package/@contentful/rich-text-react-renderer) package's **documentToReactComponents** function which parses Rich Text json like response to JSX/HTML.

### When content is updated in CMS
- Case 1:  **Content updated**
  - For completely static page (built with **getStaticProps** and/or **getStaticPaths**) without Incremental Static Generation(ISG), updated content will not be visible on browser unless we redeploy the application.
  - To resolve, this we use ISG.
- Case 2: **Content added** and its a dynamic page whose path is produced with **getStaticPaths**
  - If in **getStaticPaths**, fallback is **false**, then for newly added content, path will not be regenerated and we will get **404**.
  - To resolve this we set fallback to **true** or **blocking**. True behaves like **getStaticProps** while blocking like **getServerSideProps**. With true, we can show a fallback page like loading when content is being served while with blocking since it is Server Side rendering there is no loading screen and result is show after a blank screen.