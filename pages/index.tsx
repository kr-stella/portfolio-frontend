import React from "react";

import { MainVideo } from "component/main/video";
import { MainSwiper } from "component/main/swiper";
import { MainSummary } from "component/main/summary";

// export default IndexPage;
interface Define {option:boolean;};
const Home = ({ option }:Define) => {

	return (
	<main>

		{/* Swiper */}
		{option? <MainSwiper />:<MainVideo />}
		{/* Summary ( 총 방문자, 총 포스팅 + Welcome ) */}
		<MainSummary />

	</main>
	);

};

Home.displayName = `Home`;
export default React.memo(Home);