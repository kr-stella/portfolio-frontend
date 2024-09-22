import classNames from "classnames";
import React from "react";

import { Active } from "@type/header";

import style from "./header.nav.module.scss";
import NavBrand from "./NavBrand";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

interface Define {active:Active; isSticky:boolean; onActive:(v:keyof Active) => void; onClose:() => void; onOption:() => void;};
const HeaderNav = ({ active, isSticky, onActive, onClose, onOption }:Define) => (
	<nav className={classNames(style.nav)}>
		<NavLeft isSticky={isSticky} onActive={onActive} onOption={onOption} />
		<NavBrand isSticky={isSticky} onClose={onClose} />
		<NavRight isSticky={isSticky} active={active} onActive={onActive} />
	</nav>
);

export default React.memo(HeaderNav);