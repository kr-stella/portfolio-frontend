import React, { useCallback, useState, useEffect, useRef } from "react";
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

import {Magnifying} from "../icon/Magnifying";
import {VinylRecord} from "../icon/VinylRecord";

import Styles from "./header.module.scss";
import classNames from "classnames";

interface Active { side:boolean; modal:boolean; }
interface Define {
	active:Active;
	onActive:(v:keyof Active) => void;
	onClose:() => void;
};
const Header = ({ active, onActive, onClose }:Define) => {
	
	const stickyRef = useRef();
	// const dispatch = useDispatch();
	// const [ data, setData ] = useState({
	// 	str: new Array(),
	// 	category: new Array(),
	// 	inside: new Array(),
	// });

	// const { aside } = useSelector(
	// 	state => ({
	// 		aside: state.AsideReducer.aside,
	// 	}),
	// 	shallowEqual
	// );

	// const onOpen = useCallback((e) => {

	// 	const target = e.currentTarget;
	// 	const parent = target.parentNode;
	// 	const child = target.nextSibling;
	// 	const children = target.nextSibling.childElementCount;
	// 	if(parent.classList.contains("on")) {
	// 		parent.classList.remove("on");
	// 		slideUp(child, children);
	// 	} else {
	// 		parent.classList.add("on");
	// 		slideDown(child, children);
	// 	}

	// });

	// // pure js slideDown
	// const slideDown = useCallback((target, cnt) => {

	// 	target.style.removeProperty("display");
	// 	const display = window.getComputedStyle(target).display;
	// 	if(display === "none")
	// 		target.style.display = "block";

	// 	const height = 44 * cnt;
	// 	target.style.height = 0;
	// 	target.offsetHeight; // 이게 있어야 자연스럽게 돌아감
	// 	target.style.transitionProperty = "height";
	// 	target.style.transitionDuration = "500ms";
	// 	target.style.height = height + "px";

	// 	window.setTimeout(() => {
	// 		target.style.removeProperty("height");
	// 		target.style.removeProperty("transition-duration");
	// 		target.style.removeProperty("transition-property");
	// 	}, 500);

	// });

	// // pure js slideUp
	// const slideUp = useCallback((target, cnt) => {

	// 	const height = 44 * cnt;
	// 	target.style.height = height + "px";
	// 	target.offsetHeight; // 이게 있어야 자연스럽게 돌아감
	// 	target.style.transitionProperty = "height";
	// 	target.style.transitionDuration = "500ms";
	// 	target.style.height = 0;

	// 	window.setTimeout(() => {
	// 		target.style.display = "none";
	// 		target.style.removeProperty("height");
	// 		target.style.removeProperty("transition-duration");
	// 		target.style.removeProperty("transition-property");
	// 	}, 500);

	// });

	// // svg 추가
	// const convertSvg = useCallback((v) => {
	// 	if(v === "lodash")
	// 		return <Lodash />;

	// 	if(v === "csv")
	// 		return <Csv />

	// 	if(v === "xml")
	// 		return <Xml />;

	// 	if(v === "json")
	// 		return <Json />;

	// 	if(v === "yaml")
	// 		return <Yaml />;

	// 	if(v === "sdk")
	// 		return <Sdk />;

	// 	if(v === "layer")
	// 		return <Layer />;

	// 	if(v === "virture-box")
	// 		return <VirtureBox />;

	// 	if(v === "postman")
	// 		return <Postman />;

	// });
	
	// // 메뉴호출
	// useEffect(() => {
		
	// 	dispatch(getAside());
	// 	window.addEventListener("scroll", () => {

	// 		const v = doc.documentElement.clientHeight;
	// 		stickyRef.current.classList.toggle("is_sticky", window.scrollY > v);

	// 	});

	// 	return () => window.removeEventListener("scroll");

	// }, []);

	// // 메뉴세팅
	// useEffect(() => {
	// 	setData({
	// 		str: aside?.filter(e => e.depth === 0),
	// 		category: aside?.filter(e => e.depth === 1),
	// 		inside: aside?.filter(e => e.depth === 2)
	// 	});
	// }, [aside]);

	return (<>
	<header className={classNames(Styles.header)}>
		<div /* ref={stickyRef} */ className={classNames(Styles[`header-wrap`])}>
			<div className={classNames(Styles[`header-box`])}>
				<nav className={classNames(Styles.nav)}>
					<ul className={classNames(Styles[`nav-left`])}>
						<li className={classNames(Styles[`nav-item`])} onClick={() => onActive(`side`)}>
							<div className={classNames(Styles[`nav-ico`], Styles.vinyl)} tool-tip={`사이드바 메뉴`}>
								<VinylRecord />
							</div>
						</li>
						<li className={classNames(Styles[`nav-item`])}>
							<p className={classNames(Styles[`nav-link`])}>{`A`}</p>
						</li>
					</ul>
					<a className={classNames(Styles[`nav-brand`])}>
						<p>{`Stella Dev 👨‍💻`}</p>
					</a>
					{/* <a href={INIT_SERVER[mode].home} className={`nav_brand`} onClick={(e) => onRedirect(e)}>
						<p>{`Stella`}</p>
						<p>{`Stella`}</p>
						<p>{`Stella`}</p>
						<p>{`Stella`}</p>
					</a> */}
					<div className={classNames(Styles[`nav-right`])}>
						<div className={classNames(Styles[`nav-ico`])}>
							<div className={classNames(Styles[`nav-search`])} onClick={() => onActive(`modal`)}>
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
					{/* <Link to={`/post`} className={`_root rainbow_text`}>
						<span>ROOT</span>
					</Link> */}
					<ul className={`col_category`}>
						{/* {data.str.map((v) => (
							<>
							<li className={`side_title`}>
								<i className={`far fa-ellipsis`}></i>
								<span>{v.str}</span>
							</li>
							{data.category.map((a) => (
								v.ino === a.idxGroup?
									// 하위노드 갯수
									data.inside.reduce((x, y) => a.ino === y.idxGroup? x+=1:x, 0) !== 0?
									<li>
										<p className={`category both_underline`} onClick={onOpen}>
											<i className={`${a.ico} swing`}></i>
											<span>{a.str}</span>
											<span className={`cnt`}>{[...data.inside].filter(v => v.idxGroup === a.ino).reduce((x, y) => x + y.cnt, 0)}</span>
											<i className={`fas fa-chevron-down`}></i>
										</p>
										<ul className={`col_sub_category`}>
											{data.inside.map((c) => (
												a.ino === c.idxGroup?
												<Link to={`/post/${a.str}/${c.str}`}>
													<p className={`sub_category`}>
														<i className={`${c.ico} swing`}>
															{convertSvg(c.ico)}
														</i>
														<span>{c.str}</span>
														<span className={`cnt`}>{c.cnt}</span>
													</p>
												</Link>
												:<></>
											))}
										</ul>
									</li>:
									<Link to={`/post/${a.str}`}>
										<p className={`category both_underline`}>
											<i className={`${a.ico} swing`}></i>
											<span>{a.str}</span>
											<span className={`cnt`}>{[...data.inside].filter(v => v.idxGroup === a.ino).reduce((x, y) => x + y.cnt, 0)}</span>
										</p>
									</Link>
								:<></>
							))}
							</>
						))} */}
					</ul>
				</nav>

			</div>
		</div>
	</aside>
	</>);
}

export default React.memo(Header);