import classNames from "classnames";
import React, { lazy } from "react";

import { Active } from "@type/Header";

import style from "./header.aside.module.scss";

const Top = lazy(() => import("./Top"));
const Profile = lazy(() => import("./Profile"));
const Box = lazy(() => import("./Box"));
const Category = lazy(() => import("./Category"));

interface Define {active:boolean; onActive:(v:keyof Active) => void;};
const Aside = ({ active, onActive }:Define) => (
	<aside className={classNames(
		style[`header-aside`], active && style.active
	)}>
		<nav className={classNames(style[`aside-nav`])}>

			{/* Aside 최상단 배경 */}
			<Top />

			{/* Aside 사용자 정보 */}
			<Profile />

			{/* Aside Box ( 홈, 검색, 유저, 로그아웃 ) */}
			<Box onActive={onActive} />

			{/* Aside 카테고리 */}
			<Category />

		</nav>
	</aside>
);

export default React.memo(Aside);