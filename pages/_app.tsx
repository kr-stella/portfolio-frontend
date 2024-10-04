import "../style/global.scss";
import "../style/main.scss";
import "../style/footer.scss";
import "../style/swiper.scss";
import "swiper/swiper-bundle.css";
import "@fortawesome/fontawesome-pro/css/all.min.css";

import { Screen } from "component/loading";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
/** 전역 상태관리 */
import { Provider } from "react-redux";

import { Active } from "@type/Header";

import store from "../config/Store";

const Header = lazy(() => import("component/header"));
const Footer = lazy(() => import("component/footer"));

console.log(`

  /$$$$$$  /$$   /$$ /$$      /$$ /$$$$$$ /$$   /$$
 /$$__  $$| $$  | $$| $$$    /$$$|_  $$_/| $$$ | $$
| $$  \\__/| $$  | $$| $$$$  /$$$$  | $$  | $$$$| $$
|  $$$$$$ | $$  | $$| $$ $$/$$ $$  | $$  | $$ $$ $$
 \\____  $$| $$  | $$| $$  $$$| $$  | $$  | $$  $$$$
 /$$  \\ $$| $$  | $$| $$\\  $ | $$  | $$  | $$\\  $$$
|  $$$$$$/|  $$$$$$/| $$ \\/  | $$ /$$$$$$| $$ \\  $$
 \\______/  \\______/ |__/     |__/|______/|__/  \\__/

`);

const mode = process.env.NODE_ENV;

const App = ({ Component, pageProps }:AppProps) => {
	
	const router = useRouter();
	const [ option, setOption ] = useState<boolean>(false);

	/** Header 메뉴 활성화 / 비활성화 여부 */
	const [ active, setActive ] = useState<Active>({
		side: false, modal: false,
	});

	/** Header 메뉴 활성화 / 비활성화 함수 */
	const onActive = useCallback((v:keyof Active) => {
		setActive((prev:Active) => ({
			...active, [v]: !prev[v]
		}));
	}, []);

	/** Header 메뉴 비활성화 */
	const onClose = useCallback(() => {
		setActive(active);
	}, []);

	/** Header 메뉴 활성화 여부에 따라 ROOT 스크롤 삭제 OR 생성 */
	useEffect(() => {

		const html = document.documentElement;
		if(Object.values(active).some(a => a)) html.style.overflow = `hidden`;
		else html.style.overflow = `revert`;

	}, [active]);

	const onOption = useCallback(() => {
		setOption(!option);
	}, [option]);

	/** 메인페이지인지 확인하여 조건부 props 설정 */
	const isMain = router.pathname === `/`;
	const optionalProps = {
		...pageProps,
		...(isMain? { option }:{})
	};

	return (
	<Provider store={store}>
		<Screen />
		<Suspense>
		<Header active={active} onActive={onActive} onClose={onClose}
			onOption={onOption}
		/>
		</Suspense>
		<Component {...optionalProps} />
		<Footer mode={mode} />
	</Provider>
	);

};

export default React.memo(App);