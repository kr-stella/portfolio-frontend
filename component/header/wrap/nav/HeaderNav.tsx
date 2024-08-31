import React, { memo } from "react";

import { Active } from "../..";
import { NavLeft } from "./left";
import { NavBrand } from "./brand";
import { NavRight } from "./right";

import style from "./header.nav.module.scss";
import classNames from "classnames";

interface Define {active:Active; onActive:(v:keyof Active) => void; onClose:() => void; onOption:() => void;};
export const HeaderNav = memo(({ active, onActive, onClose, onOption }:Define) => (
	<nav className={classNames(style.nav)}>
		<NavLeft onActive={onActive} onOption={onOption} />
		<NavBrand onClose={onClose} />
		<NavRight active={active} onActive={onActive} />
	</nav>
));