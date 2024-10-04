import classNames from "classnames";
import { Magnifying } from "component/icon";
import React from "react";

import { Active } from "@type/Header";

import style from "./header.nav.right.module.scss";

interface Define {isSticky:boolean; active:Active; onActive:(v:keyof Active) => void;};
const NavRight = ({ isSticky, active, onActive }:Define) => (
	<div className={classNames(
		style[`nav-right`], isSticky && style[`is-sticky`]
	)}>
		<div className={classNames(style[`nav-icon`])} onClick={() => onActive(`modal`)}>
			<div className={classNames(style[`icon`], active.modal && style.close)}>
				{!active.modal? <Magnifying />:
				<i className={`fas fa-xmark`} />}
			</div>
		</div>
	</div>
);

export default React.memo(NavRight);