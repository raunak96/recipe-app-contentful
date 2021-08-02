import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
	const { title, slug, cookingTime, image } = recipe;
	return (
		<div
			className="flex flex-col hover:animate-wiggle"
			style={{ transform: "rotateZ(-1deg)" }}>
			<Image
				src={image.url}
				height={image.height}
				width={image.width}
				layout="responsive"
				alt="thumbnail"
				className="rounded"
			/>
			<div
				className="bg-white shadow-lg rounded-b relative -top-5 -left-3"
				style={{ transform: "rotateZ(-1deg)" }}>
				<div className="p-4">
					<h3 className="uppercase mb-1">{title}</h3>
					<p className="text-gray-600 text-base">
						Takes approx <strong>{cookingTime} mins</strong> to make
					</p>
				</div>
				<div className="flex">
					<Link href={`/recipes/${slug}`}>
						<a className="bg-red-500 text-white ml-auto py-2 px-3 rounded-br hover:bg-red-600 transition hover:scale-125 duration-150">
							Cook this
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
