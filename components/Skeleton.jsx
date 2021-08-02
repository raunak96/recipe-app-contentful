import Layout from "./Layout";

const Skeleton = () => {
	return (
		<Layout title="Loading...">
			<div className="max-w-5xl mx-auto animate-pulse flex flex-col space-y-5">
				<div className="bg-yellow-500 rounded py-20" />
				<div className="bg-yellow-500 rounded py-2 max-w-xl" />
				<div className="bg-yellow-500 rounded py-3 max-w-3xl" />
				<div className="bg-yellow-500 rounded py-3 max-w-3xl" />
				<div className="bg-yellow-500 rounded py-3 max-w-3xl" />
			</div>
		</Layout>
	);
};

export default Skeleton;
