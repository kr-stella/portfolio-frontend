import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { Active } from "@type/header";

import style from "./header.wrap.module.scss";
import HeaderNav from "./nav/HeaderNav";

interface Define {active:Active; onActive:(v:keyof Active) => void; onClose:() => void; onOption:() => void;};
const HeaderWrap = ({ active, onActive, onClose, onOption }:Define) => {

	const stickyRef = useRef<HTMLDivElement>(null);
	const [ isSticky, setSticky ] = useState<boolean>(false);

	/** 스크롤 이벤트 */
	const onScroll = useCallback(() => {
		const height = document.documentElement.clientHeight;
		if(stickyRef.current)
			setSticky(window.scrollY > height);
	}, []);
	useEffect(() => {

		/** 클라이언트 사이드에서만 실행되도록 확인 */
		if(typeof window !== `undefined`) {

			onScroll();
			/** 스크롤 이벤트 리스너 등록 */
			window.addEventListener(`scroll`, onScroll);
			/** 컴포넌트 언마운트 시 이벤트 리스너 제거 */
			return () => window.removeEventListener(`scroll`, onScroll);

		};

	}, []);

	return (
	<div ref={stickyRef} className={classNames(
		style[`header-wrap`],
		isSticky && style[`is-sticky`]
	)}>
		<div className={classNames(`container`, style[`header-box`], style.container)}>
			<HeaderNav active={active} isSticky={isSticky}
				onActive={onActive} onClose={onClose} onOption={onOption} />
		</div>
	</div>
	);

};

export default React.memo(HeaderWrap);