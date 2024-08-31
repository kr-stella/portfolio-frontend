import React, { memo, useCallback } from "react";

import style from "./header.nav.brand.module.scss";
import classNames from "classnames";

interface Define {onClose:() => void;};
export const NavBrand = memo(({ onClose }:Define) => {

	const onClick = useCallback(() => {
		onClose();
	}, []);

	return (
	<a className={classNames(style[`nav-brand`])} onClick={onClick}>
		<p>{`Stella Dev 👨‍💻`}</p>
	</a>
	);

});