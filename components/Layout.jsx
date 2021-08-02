import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, keywords, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords.join(", ")} />
			</Head>

			<div className="layout">
				<header>
					<Link href="/">
						<a>
							<h1>
								<span>Just Add</span>
								<span>Marmite</span>
							</h1>
							<h2>Spread The Joy</h2>
						</a>
					</Link>
				</header>

				<div className="page-content">{children}</div>

				<footer>
					<p>Copyright &copy; 2021 Just Add Marmite 😆</p>
				</footer>
			</div>
		</>
	);
};

Layout.defaultProps = {
	title: "Contentful Recipes",
	description:
		"The most mouth watering recipes app build with NextJs and Contentful CMS",
	keywords: ["recipe", "headless CMS", "nextjs", "react", "tailwindCss"],
};

export default Layout;
