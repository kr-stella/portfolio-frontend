import classNames from "classnames";
import React, { lazy, Suspense } from "react";

import { Active } from "@type/Header";

import style from "./header.aside.module.scss";

const Top = lazy(() => import("./Top"));
const Profile = lazy(() => import("./Profile"));
const Box = lazy(() => import("./Box"));
const Category = lazy(() => import("./Category"));

interface Define {/* mode:string; profile:ProfileType|undefined; */ onActive:(v:keyof Active) => void;
	active:boolean;
	onClose:() => void;
};
const Aside = ({ /* mode, profile, */ active, onActive, onClose }:Define) => (
	<aside className={classNames(style[`header-aside`])}>
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