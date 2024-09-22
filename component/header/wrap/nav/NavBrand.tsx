import classNames from "classnames";
import React, { useCallback } from "react";

import style from "./header.nav.brand.module.scss";

interface Define {isSticky:boolean; onClose:() => void;};
const NavBrand = ({ isSticky, onClose }:Define) => {

	const onClick = useCallback(() => {
		onClose();
	}, []);

	return (
	<a className={classNames(
		style[`nav-brand`], isSticky && style[`is-sticky`]
	)} onClick={onClick}>
		<p>{`Stella Dev 👨‍💻`}</p>
	</a>
	);

};

export default React.memo(NavBrand);