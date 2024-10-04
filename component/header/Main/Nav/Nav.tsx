import classNames from "classnames";
import React, { lazy } from "react";

import { Active } from "@type/Header";

import style from "./header.nav.module.scss";

const Left = lazy(() => import("./Left"));
const Brand = lazy(() => import("./Brand"));
const Right = lazy(() => import("./Right"));

interface Define {active:Active; isSticky:boolean; onActive:(v:keyof Active) => void; onClose:() => void; onOption:() => void;};
const Nav = ({ active, isSticky, onOption, onActive, onClose }:Define) => (
	<nav className={classNames(style.nav)}>
		<Left isSticky={isSticky} onActive={onActive} onOption={onOption} />
		<Brand isSticky={isSticky} onClose={onClose} />
		<Right isSticky={isSticky} active={active} onActive={onActive} />
	</nav>
);

export default React.memo(Nav);