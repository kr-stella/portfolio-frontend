import React, { useState, useCallback, useEffect } from "react";
import { AppProps } from "next/app";

/** 전역 상태관리 */
import { Provider } from "react-redux";
import store from "../config/Store";
import Header from "component/Header";

import "../style/main.scss"
import "../style/header.scss"

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

interface Active { side:boolean; modal:boolean; }
const App = ({ Component, pageProps }:AppProps) => {
	
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

	return (
	<Provider store={store}>
		<Header active={active} onActive={onActive} onClose={onClose} />
		<Component {...pageProps} />
	</Provider>
	);
};

export default React.memo(App);