import React, { memo, useEffect } from "react";

import { CoverText } from "./text";

import style from "./main.video.module.scss";
import classNames from "classnames";

export const MainVideo = memo(() => {

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

});