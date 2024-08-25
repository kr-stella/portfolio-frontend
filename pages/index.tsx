import React from "react";

import { MainSwiper } from "component/Main/Swiper";
import { MainSummary } from "component/Main/Summary";

const Home = () => {

	return (
	<main>

		{/* Swiper */}
		<MainSwiper />
		{/* Summary ( 총 방문자, 총 포스팅 + Welcome ) */}
		<MainSummary />

	</main>
	);

};

export default React.memo(Home);