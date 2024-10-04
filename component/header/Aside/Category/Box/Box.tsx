// import "./header.aside.category.scss";

// import isEmpty from "lodash/isEmpty";
import React, { lazy, useCallback, useRef } from "react";

import { HeaderAsideCategoryMajorType } from "../";
// import { ClickEvt } from "../../../../../config/type/Structure";

// const Major = lazy(() => import("../Major"));
// const Minor = lazy(() => import("../Minor"));

interface Define {major:HeaderAsideCategoryMajorType; index:number;};
const Box = ({ major, index }:Define) => {

	/** Major 카테고리의 자식리스트 Wrapper ( ul태그 ) */
	const ulRef = useRef<HTMLUListElement>(null);

	/** 클릭 시 이동할 링크 생성 */
	const createLink = useCallback((majorKey:string, minorKey:string) => {
		// let baseUrl = INIT_SERVER[mode][majorKey];
		// return minorKey? `${baseUrl}/${minorKey}` : baseUrl;
	}, [/* mode */]);

	/** Category Dropdown On / Off */
	// const onDropdown = useCallback((e:ClickEvt) => {

	// 	const v = e.currentTarget;
	// 	const parent = v.parentNode;
	// 	if(!isEmpty(parent) && (parent instanceof Element)) {
	// 		const ulElement = ulRef.current;
	// 		if(!parent.classList.contains(`on`)) {

	// 			parent.classList.add(`on`);
	// 			if(ulElement)
	// 				ulElement.style.height = `${ulElement.children.length * 46}px`;

	// 		} else {
	// 			parent.classList.remove(`on`);
	// 			if(ulElement)
	// 				ulElement.style.height = `0px`;
	// 		}
	// 	}

	// }, [index]);

	return (
	<li className={`major-category-box`}>
		{/* 서브 카테고리가 존재하면 Dropdown / 아닌 경우 링크 동작 */}
		{/* {major.minor? (
		<>
			<p className={`major-category`} onClick={onDropdown}>
				<i className={major.icon} />
				<span>{major.str}</span>
				<i className={`fas fa-chevron-down rotate`} />
			</p>
			<ul ref={ulRef} className={`minor-category-box`}>
			{major.minor.map((item, j) => (
				<Minor key={`minor-${j}`}
					link={createLink(major.key, item.key)}
					icon={item.icon} str={item.str}
				/>
			))}
			</ul>
		</>
		):(
			<Major key={`major-${index}`}
				link={INIT_SERVER[mode][major.key]}
				icon={major.icon} str={major.str}
			/>
		)} */}
	</li>
	);

};

export default React.memo(Box);