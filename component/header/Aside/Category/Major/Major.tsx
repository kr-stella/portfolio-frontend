import isEmpty from "lodash/isEmpty";
import React from "react";

import { ClickEvtElement } from "../../../../../config/type/Structure";
import { useHref } from "../../../../handler/Href";

interface Define {link:string; icon:string; str:string;};

const Major = ({ link, icon, str }:Define) => {

	const onMajor = useHref(
		(e:ClickEvtElement) => e.currentTarget,
		(element:HTMLElement, doc:Document) => {

			const parent = element.parentNode;
			Array.from(doc.getElementsByClassName(`major-category-box`))
				.forEach(a => a.classList.remove(`on`));
			Array.from(doc.getElementsByClassName(`minor-category-box`))
				.forEach(a => a.classList.remove(`on`));

			if(element.classList.contains(`on`))
				element.classList.remove(`on`);
			else element.classList.add(`on`);
			if(!isEmpty(parent) && (parent instanceof Element))
				parent.classList.add(`on`);

		}
	);

	return (
	<a href={link} className={`major-category`} onClick={onMajor}>
		<i className={icon} />
		<span>{str}</span>
		<i className={`fas fa-chevron-down`} />
	</a>
	);

};

export default React.memo(Major);