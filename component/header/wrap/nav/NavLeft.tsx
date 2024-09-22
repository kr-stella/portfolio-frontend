import classNames from "classnames";
import VinylRecord from "component/icon/VinylRecord";
import React from "react";

import { Active } from "@type/header";

import style from "./header.nav.left.module.scss";

interface Define {isSticky:boolean; onActive:(v:keyof Active) => void; onOption:() => void;};
const NavLeft = ({ isSticky, onActive, onOption }:Define) => (
	<ul className={classNames(
		style[`nav-left`], isSticky && style[`is-sticky`]
	)}>
		<li className={classNames(style[`nav-item`])} onClick={() => onActive(`side`)}>
			<div className={classNames(style[`icon`], style.vinyl)} tool-tip={`사이드바 메뉴`}>
				<VinylRecord />
			</div>
		</li>
		<li className={classNames(style[`nav-item`])} onClick={onOption}>
			<p className={classNames(style[`nav-link`])}>{`Option Test`}</p>
		</li>
	</ul>
);

export default React.memo(NavLeft);