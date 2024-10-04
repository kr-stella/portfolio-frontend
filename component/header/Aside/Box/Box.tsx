import classNames from "classnames";
import React, { lazy } from "react";

import { Active } from "../../../../config/type/Header";
import style from "./header.aside.box.module.scss";

const Home = lazy(() => import("./Home"));
const Search = lazy(() => import("./Search"));
const User = lazy(() => import("./User"));
const Logout = lazy(() => import("./Logout"));

interface Define {onActive:(v:keyof Active) => void;};
const Box = ({ onActive }:Define) => (
	<div className={classNames(style[`aside-box`])}>
		<ul>
			<Home />
			<Search onActive={onActive} />
			<User />
			<Logout />
		</ul>
	</div>
);

export default React.memo(Box);