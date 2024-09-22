import classNames from "classnames";
import React, { memo, useRef } from "react";

import style from "./main.summary.card.module.scss";

export const Card = memo(() => {
	const counterRef = useRef<any>(new Array());
	return (
	<div className={classNames(style[`card-wrap`])}>
		<div className={classNames(style[`card-box`])}>
			
			<article data-aos={`fade-up`} data-aos-delay={`0`}>
				<div className={classNames(style.card)}>
					<div className={`c_bottom bg_b box`}></div>
					<div className={classNames(style[`info-wrap`], style[`line-blue`])}>


						<i className={`fad fa-user-friends dt_i`}></i>
						{/* <FontAwesomeIcon icon={`fad fa-user-friends`} /> */}
						<h2 className={`clr_b`}>
							<span ref={(el) => (counterRef.current[0] = el)}></span>
							<small className={`small`}>{` 명`}</small>
						</h2>
						<span className={`info_title`}>총 방문자</span>


					</div>
					{/* <div className={`c_info bg_cw line_b`}>

					</div> */}
				</div>
			</article>
			<article data-aos={`fade-up`} data-aos-delay={`150`}>
				<div className={classNames(style.card)}>
					<div className={`c_bottom bg_r box`}></div>
					<div className={classNames(style[`info-wrap`], style[`line-red`])}>

						<i className={`fad fa-book-reader dt_i`}></i>
						<h2 className={`clr_r`}>
							<span ref={(el) => (counterRef.current[1] = el)}></span>
							<small className={`small`}>{` 명`}</small>
						</h2>
						<span className={`info_title`}>총 포스팅</span>

					</div>
				</div>
			</article>
			<article data-aos={`fade-up`} data-aos-delay={`300`}>
				<div className={classNames(style.card)}>
					<div className={`c_bottom bg_y box`}></div>
					<div className={classNames(style[`info-wrap`], style[`line-yellow`])}>

						<i className={`fad fa-thumbs-up dt_i`}></i>
						<h2 className={`clr_y`}>
							<span ref={(el) => (counterRef.current[2] = el)}></span>
							<small className={`small`}>{` 명`}</small>
						</h2>
						<span className={`info_title`}>구독자</span>

					</div>
				</div>
			</article>
			<article data-aos={`fade-up`} data-aos-delay={`450`}>
				<div className={classNames(style.card)}>
					<div className={`c_bottom bg_g box`}></div>
					<div className={classNames(style[`info-wrap`], style[`line-green`])}>

						<i className={`fad fa-calendar-alt dt_i`}></i>
						<h2 className={`clr_g`}>
							<span ref={(el) => (counterRef.current[3] = el)}></span>
							<small className={`small`}>{` 일 째`}</small>
						</h2>
						<span className={`info_title`}>블로그 제작</span>
						
					</div>
				</div>
			</article>
			
		</div>
	</div>
	);
});