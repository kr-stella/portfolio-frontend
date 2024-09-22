import MainSummary from "component/main/MainSummary";
import MainSwiper from "component/main/MainSwiper";
import MainVideo from "component/main/MainVideo";
import React from "react";

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