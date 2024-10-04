import classNames from "classnames";
import React, { useCallback } from "react";

import { Active } from "@type/Header";

import style from "./header.aside.box.search.module.scss";

interface Define {onActive:(v:keyof Active) => void;};
const Search = ({ onActive }:Define) => {

	const onClick = useCallback(() => {
		onActive(`modal`);
	}, [onActive]);

	return (
	<li>
		<div className={classNames(style.search)} onClick={onClick}>
			<i className={`fad fa-magnifying-glass`} />
			<p>{`검색`}</p>
		</div>
	</li>
	);

};

export default React.memo(Search);