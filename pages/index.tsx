import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
	console.log(`develeop`);
	return (
	<main>
		{/* Swiper */}
		<section className={`_section relative box`}>
			<Swiper loop grabCursor navigation
				pagination={{ clickable: true }}
				modules={[ Navigation, Pagination, /* Scrollbar, */ Autoplay ]}
				autoplay={{
					delay: 3500,
					/** swiper 마우스로 동작 후 멈춤 방지 */
					disableOnInteraction: true,
					/** 마우스 올려다놨을 때 멈춤 */
					pauseOnMouseEnter: true
				}}
			>
				<SwiperSlide>
					<img src={`/image/side_top.webp`} />
					<div className={`swiper-cover`} />
					<div className={`swiper-data`}>
						<ul>
							<li data-layer={`slide-down`}>
								<a className={`badge badge_radius bg_g sz_13 clr_w`} href={`#`}>{`WEB 지식1`}</a>
							</li>
							<li data-layer={`slide-right`}>
								<h2 className={`size_h2 mt_16 mb_32`}>{`WEBWEBWEBWEBWEB`}</h2>
							</li>
							<li data-layer={`slide-left`}>
								<p className={`mb_16 sz_13`}>{`2022.12.04`}</p>
							</li>
							<li data-layer={`slide-up`}>
								<a className={`link_underline mt_4`} href={`#`}>{`Read Article`}</a>
							</li>
						</ul>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={`/image/side_top.webp`} />
					<div className={`swiper-cover`} />
					<div className={`swiper-data`}>
						<ul>
							<li data-layer={`slide-down`}>
								<a className={`badge badge_radius bg_g sz_13 clr_w`} href={`#`}>{`WEB 지식2`}</a>
							</li>
							<li data-layer={`slide-right`}>
								<h2 className={`size_h2 mt_16 mb_32`}>{`WEBWEBWEBWEBWEB`}</h2>
							</li>
							<li data-layer={`slide-left`}>
								<p className={`mb_16 sz_13`}>{`2022.12.04`}</p>
							</li>
							<li data-layer={`slide-up`}>
								<a className={`link_underline mt_4`} href={`#`}>{`Read Article`}</a>
							</li>
						</ul>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={`/image/side_top.webp`} />
					<div className={`swiper-cover`} />
					<div className={`swiper-data`}>
						<ul>
							<li data-layer={`slide-down`}>
								<a className={`badge badge_radius bg_g sz_13 clr_w`} href={`#`}>{`WEB 지식3`}</a>
							</li>
							<li data-layer={`slide-right`}>
								<h2 className={`size_h2 mt_16 mb_32`}>{`WEBWEBWEBWEBWEB`}</h2>
							</li>
							<li data-layer={`slide-left`}>
								<p className={`mb_16 sz_13`}>{`2022.12.04`}</p>
							</li>
							<li data-layer={`slide-up`}>
								<a className={`link_underline mt_4`} href={`#`}>{`Read Article`}</a>
							</li>
						</ul>
					</div>
				</SwiperSlide>
			</Swiper>
			<div className={`scroll_wrap`}>
				{/* <Hills /> */}
				<div className={`scroll_container`}>
					<div className={`relative w_100 h_100`}>
						<div className={`scroll_icon`}>
							<div className={`sc_mouse box`}>
								<span></span>
							</div>
							<div className={`sc_arrow`}>
								<span className={`box`}></span>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	</main>
	);

};

export default React.memo(Home);