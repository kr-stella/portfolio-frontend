import React, { memo, useCallback, useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch, shallowEqual } from "react-redux";
// import { Link } from "react-router-dom";

// import { getAside } from "../../config/state/reducer/AsideReducer";

// import Lodash from "./icon/Lodash";
// import Csv from "./icon/Csv";
// import Xml from "./icon/Xml";
// import Json from "./icon/Json";
// import Yaml from "./icon/Yaml";
// import Sdk from "./icon/Sdk";
// import Layer from "./icon/Layer";
// import VirtureBox from "./icon/VirtureBox";
// import Postman from "./icon/Postman";
// import SvgPanel from "./icon/SvgPanel";
// import Search from "./icon/Search";

import { Magnifying } from "../Icon/Magnifying";
import { VinylRecord } from "../Icon/VinylRecord";

import Style from "./header.module.scss";
import classNames from "classnames";

interface Active { side:boolean; modal:boolean; }
interface Define {
	active:Active;
	onActive:(v:keyof Active) => void;
	onClose:() => void;
};
export const Header = memo(({ active, onActive, onClose }:Define) => {
	
	const stickyRef = useRef<HTMLDivElement>(null);
	useEffect(() => {

		// 클라이언트 사이드에서만 실행되도록 확인
		if (typeof window !== "undefined") {
			const handleScroll = () => {
				const clientHeight = document.documentElement.clientHeight;
				if (stickyRef.current) {
					stickyRef.current.classList.toggle(Style[`is-sticky`], window.scrollY > clientHeight);
				}
			};

			// 스크롤 이벤트 리스너 등록
			window.addEventListener("scroll", handleScroll);

			// 컴포넌트 언마운트 시 이벤트 리스너 제거
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return (<>
	<header className={classNames(Style.header)}>
		<div ref={stickyRef} className={classNames(Style[`header-wrap`])}>
			<div className={classNames(`container`, Style[`header-box`], Style.container)}>
				<nav className={classNames(Style.nav)}>
					<ul className={classNames(Style[`nav-left`])}>
						<li className={classNames(Style[`nav-item`])} onClick={() => onActive(`side`)}>
							<div className={classNames(Style[`nav-ico`], Style.vinyl)} tool-tip={`사이드바 메뉴`}>
								<VinylRecord />
							</div>
						</li>
						<li className={classNames(Style[`nav-item`])}>
							<p className={classNames(Style[`nav-link`])}>{`A`}</p>
						</li>
					</ul>
					<a className={classNames(Style[`nav-brand`])}>
						<p>{`Stella Dev 👨‍💻`}</p>
					</a>
					<div className={classNames(Style[`nav-right`])}>
						<div className={classNames(Style[`nav-ico`])}>
							<div className={classNames(Style[`nav-search`])} onClick={() => onActive(`modal`)}>
								{!active.modal? <Magnifying />:
								<i className={`fas fa-xmark`} />}
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</header>
	<aside>
		<div className={`sidebar`}>
			<div className={`_side`}>

				<div className={`usr_bg`}></div>
				<div className={`profile`}>
					<img src={`/image/usr_v2.png`} />
					{/* <Link to={`/`} className={`align_c`}>
						<p className={`nudge_text mt_8`}>
							<span className={`rainbow_text`}>FullStack Developer</span>
						</p>
						<p className={`clr_8`}>오수민</p>
					</Link> */}
				</div>
				<nav className={`side_menu`}>
					<ul className={`col_category`}></ul>
				</nav>

			</div>
		</div>
	</aside>
	</>);
});