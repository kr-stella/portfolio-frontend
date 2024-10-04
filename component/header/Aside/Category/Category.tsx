// import "./header.aside.category.scss";

import classNames from "classnames";
import React, { lazy, useCallback, useEffect } from "react";

import { HeaderAsideCategoryMajorType } from "./";
import style from "./header.aside.category.module.scss";

const Home = lazy(() => import("./Home"));
const Box = lazy(() => import("./Box"));

interface Define {mode:string;};
const INIT_USER_CATEGORY:HeaderAsideCategoryMajorType[] = [
	{ key:`company`, str:`Company`, icon:`far fa-buildings` },
	{ key:`manager`, str:`Manager`, icon:`far fa-address-card` },
	{ key: `project`, str: `Project`, icon: `far fa-briefcase`, minor: [
		{ key: ``, str: `List`, icon: `far fa-table-list` },
		{ key: `report`, str: `Report`, icon: `far fa-chalkboard-user` }
	]},
	{ key: `as`, str: `A/S`, icon: `far fa-screwdriver-wrench`, minor: [
		{ key: ``, str: `List`, icon: `far fa-list-timeline` },
		{ key: `chart`, str: `Chart`, icon: `far fa-chart-pie` },
		{ key: `material`, str: `Material`, icon: `far fa-box-open-full` }
	]},
	{ key: `inbound`, str: `Inbound`, icon: `far fa-phone-intercom` },
	{ key: `board`, str: `Board`, icon: `far fa-chalkboard-user` },
	{ key: `files`, str: `Files`, icon: `far fa-box-open-full` },
	{ key: `report`, str: `Report`, icon: `far fa-chalkboard-user` }
];
const INIT_ROOT_CATEGORY:HeaderAsideCategoryMajorType[] = [
	{ key: `home`, str: `User`, icon: `far fa-user`, minor: [
		{ key: `root/permission`, str: `Permission`, icon: `far fa-user` },
		{ key: `root/account`, str: `Account`, icon: `far fa-user` },
	]}
];

const Category = () => {

	/** 두 배열의 모든 요소가 순서대로 일치하는지 검사하는 함수 */
	const strArrMatch = useCallback((arr1:string[], arr2:string[]) =>
		arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]), []);

	/**
	 * 페이지 Reload시 현재 도메인을 기반으로
	 * 카테고리, 서브카테고리 활성화 ( Aside )
	 * */
	useEffect(() => {

		/** 현재 창의 URL을 파싱 */
		const curUrl = new URL(window.location.href);
		const curPathSegments = curUrl.pathname.split(`/`).filter(p => p);

		/** 메인 카테고리 박스 요소 반복 */
		const category = document.querySelectorAll(`.major-category-box`);
		category.forEach(box => {

			/** 현재 카테고리와 URL이 일치하는지 여부 */
			let isMatch = false;
			const cElem = box.querySelector(`.major-category`);
			const cHref = cElem? cElem.getAttribute(`href`):``;
			const cUrl = new URL(cHref || `about:blank`, window.location.origin);
			const cPathSegments = cUrl.pathname.split(`/`).filter(p => p);
	
			/** 서브 카테고리 박스가 있는 경우, 서브 카테고리 반복 */
			const minorBox = box.querySelector(`.minor-category-box`) as HTMLElement;
			if(minorBox) {

				const sElem = box.querySelectorAll(`.minor-category`);
				sElem.forEach(sub => {

					const sHref = sub.getAttribute(`href`);
					const sUrl = new URL(sHref || `about:blank`, window.location.origin);
					const sPathSegments = sUrl.pathname.split(`/`).filter(p => p);
	
					/** 서브 카테고리의 URL과 현재 URL이 일치하는지 확인 */
					if(curUrl.host === sUrl.host && strArrMatch(curPathSegments, sPathSegments)) {
						/** 동적 높이 조절 */
						minorBox.style.height = `${sElem.length * 46}px`;
						box.classList.add(`on`);
						sub.classList.add(`on`);
						isMatch = true;
					}

				});

			};

			/**
			 * 서브 카테고리와 일치하지 않고
			 * 현재 URL이 카테고리 URL과 일치하는 경우 메인 카테고리 활성화
			 */
			if(!isMatch && curUrl.host === cUrl.host && strArrMatch(curPathSegments, cPathSegments))
				box.classList.add(`on`);

		});
	
	}, []);

	return (
	<ul className={classNames(style[`aside-category`])}>
		<li>
			<Home />
			<ul>
				<li className={classNames(style[`category-wrap`])}>
					<i className={`far fa-ellipsis`} />
					<span>{`Category`}</span>
				</li>
				{INIT_USER_CATEGORY.map((category, i) => (
				<Box key={`user-category-${i}`} major={category} index={i} />
				))}
				{/* <li className={`category-wrap`}>
					<i className={`far fa-ellipsis`} />
					<span>{`Settings`}</span>
				</li>
				{INIT_ROOT_CATEGORY.map((category, i) => (
				<Box key={`root-category-${i}`} major={category} index={i} />
				))} */}
			</ul>
		</li>
	</ul>
	);

};

export default React.memo(Category);