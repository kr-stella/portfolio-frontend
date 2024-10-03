import React from "react";

import { ClickEvtElement } from "../../../../../config/type/Structure";
import { useHref } from "../../../../handler/Href";

interface Define {link:string; icon:string; str:string;};

const Minor = ({ link, icon, str }:Define) => {

	const onMinor = useHref(
		(e:ClickEvtElement) => e.currentTarget,
		(element:HTMLElement, doc:Document) => {

			Array.from(doc.getElementsByClassName(`major-category-box`))
				.forEach(a => a.contains(element)? a.classList.add(`on`) : a.classList.remove(`on`));
			Array.from(doc.getElementsByClassName(`minor-category-box`))
				.forEach(a => a.classList.remove(`on`));
			if(!element.classList.contains(`on`))
				element.classList.add(`on`);

		}
	);

	return (
	<a href={link} className={`minor-category`} onClick={onMinor}>
		<i className={icon} />
		<span>{str}</span>
	</a>
	);

};

export default React.memo(Minor);