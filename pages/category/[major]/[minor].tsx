import MainSummary from "component/main/MainSummary";
import MainSwiper from "component/main/MainSwiper";
import MainVideo from "component/main/MainVideo";
import { useRouter } from "next/router";
import React from "react";

// export default IndexPage;
interface Define {option:boolean;};
const Minor = () => {

	const router = useRouter();
	const { major, minor } = router.query;

	return (
	<main>
		<p>{`카테고리 ${major}/${minor} 분류`}</p>
	</main>
	);

};

export default React.memo(Minor);