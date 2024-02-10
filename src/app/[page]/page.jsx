import { notFound } from 'next/navigation';

// https://medium.com/@mohit-vaswani/how-to-integrate-mongodb-in-next-js-simply-explained-bafcc90a3f3d
// https://cloud.mongodb.com/v2/65c37eba1c9404608a49944a#/overview?connectCluster=Cluster0
// https://github.com/hukvadim/nextjs-commerce/blob/main/app/%5Bpage%5D/page.tsx

const Page = ({ params: { page = "" } = {} }) => {

	// Якщо сторінка не знайдена видаємо помилку 404
	if (page === "inderio") {
		notFound();
	}

    return (
		<div>Static page {page}</div>
	);
};

export default Page;
