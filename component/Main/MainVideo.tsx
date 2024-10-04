import classNames from "classnames";
import React, { useEffect } from "react";

import style from "./video/main.video.module.scss";
import { CoverText } from "./video/text";

const MainVideo = () => {

	useEffect(() => {

		/** 클라이언트 측에서만 jarallax 코드를 로드 */
		import(`jarallax`).then(({ jarallax, jarallaxVideo }) => {

			jarallaxVideo();
			jarallax(document.querySelectorAll(`.` + style[`video-box`]), {
				speed: 0.5,
				videoSrc: `mp4:https://tistory3.daumcdn.net/tistory/4939852/skin/images/allLogo.mp4`,
				videoPlayOnlyVisible: true
			});

			return () =>
				jarallax(document.querySelectorAll(`.` + style[`video-box`]), `destroy`);

		});

	}, []);

	return (
	<section className={classNames(style[`video-wrap`])}>
		<div className={classNames(style[`video-box`])} />
		<CoverText />
	</section>
	);

};

export default React.memo(MainVideo);