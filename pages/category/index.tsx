import { Image } from "component/layout/category";
import React from "react";

const Category = () => {

	return (
	<main>
		<Image />
		<p>{`카테고리 전체분류`}</p>
	</main>
	);

};

export default React.memo(Category);