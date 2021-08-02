import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
	const router = useRouter();
	useEffect(() => setTimeout(() => router.push("/"), 3000), []);
	return (
		<Layout title="Not Found">
			<div
				className="bg-gray-100 shadow-xl py-16 px-5 rounded-2xl w-3/4 mx-auto"
				style={{ transform: "rotateZ(-1deg)" }}>
				<h1 className="text-3xl">404</h1>
				<h2 className="text-2xl">
					Oops! This page could not be found 😊
				</h2>
				<p className="text=gray-800 text-lg">
					Redirecting to&nbsp;
					<Link href="/">
						<a className="text-blue-500 hover:text-blue-700">
							Homepage
						</a>
					</Link>{" "}
					for more marmite goodness...
				</p>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
